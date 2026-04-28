package main

import (
	"log"
	"os"
	"smart-tourism/handlers"
	"smart-tourism/models"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/limiter"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/gofiber/fiber/v2/middleware/recover"
	"github.com/joho/godotenv"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func main() {
	if err := godotenv.Load(); err != nil {
		log.Println("Peringatan: File .env tidak ditemukan")
	}

	dsn := os.Getenv("DATABASE_URL")
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("Gagal konek ke Supabase:", err)
	}

	sqlDB, err := db.DB()
	if err == nil {
		sqlDB.SetMaxIdleConns(10)
		sqlDB.SetMaxOpenConns(100)
		sqlDB.SetConnMaxLifetime(time.Hour * 1)
	}
	log.Println("Berhasil konek ke Database dengan Connection Pooling!")

	db.AutoMigrate(&models.Destination{}, &models.Transaction{})
	handlers.DB = db

	app := fiber.New(fiber.Config{
		ServerHeader: "SmartTourism-Engine",
		AppName:      "Smart Tourism API v1",
	})

	app.Use(cors.New())
	app.Use(recover.New())
	app.Use(logger.New(logger.Config{
		Format: "[${time}] ${ip} | ${status} | ${latency} | ${method} ${path}\n",
	}))
	app.Use(limiter.New(limiter.Config{
		Max:        20,
		Expiration: 1 * time.Minute,
		LimitReached: func(c *fiber.Ctx) error {
			return c.Status(429).JSON(fiber.Map{"error": "Terlalu banyak request!"})
		},
	}))

	api := app.Group("/api")
	api.Get("/destinations", handlers.GetDestinations)
	api.Post("/booking", handlers.CreateBooking)
	api.Post("/smart-trip", handlers.GenerateItinerary)
	api.Get("/facilities", handlers.GetFacilities)
	api.Get("/seed", handlers.SeedDestinations)

	log.Println("Smart Tourism Backend Berjalan Stabil di Port 8080")
	app.Listen(":8080")
}
