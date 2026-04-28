package handlers

import (
	"fmt"
	"smart-tourism/models"
	"smart-tourism/pkg/ai"
	"smart-tourism/pkg/ipfs"
	"time"

	"github.com/gofiber/fiber/v2"
	"gorm.io/gorm"
)

var DB *gorm.DB

func GetDestinations(c *fiber.Ctx) error {
	var destinations []models.Destination
	if err := DB.Find(&destinations).Error; err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Gagal narik data destinasi"})
	}
	return c.JSON(destinations)
}

func GetFacilities(c *fiber.Ctx) error {
	var facilities []models.Facility
	if err := DB.Find(&facilities).Error; err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Gagal narik data fasilitas"})
	}
	return c.JSON(facilities)
}

func GenerateItinerary(c *fiber.Ctx) error {
	type Request struct {
		Budget string `json:"budget"`
		Style  string `json:"style"`
		Days   int    `json:"days"`
	}

	var req Request
	if err := c.BodyParser(&req); err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "Format request salah"})
	}

	itinerary, err := ai.GenerateSmartTrip(req.Budget, req.Style, req.Days)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"error": err.Error()})
	}

	return c.SendString(itinerary)
}

func CreateBooking(c *fiber.Ctx) error {
	type BookingRequest struct {
		UserName      string  `json:"user_name"`
		DestinationID uint    `json:"destination_id"`
		AmountPaid    float64 `json:"amount_paid"`
	}

	var req BookingRequest
	if err := c.BodyParser(&req); err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "Data booking tidak lengkap"})
	}

	rawTicketData := fmt.Sprintf("Ticket for %s, Dest ID: %d, Date: %s", req.UserName, req.DestinationID, time.Now().String())

	ipfsHash, err := ipfs.PinToIPFS(rawTicketData)
	if err != nil {
		fmt.Println("Gagal ke IPFS, tapi lanjut simpan ke DB:", err)
		ipfsHash = "PENDING_ON_CHAIN"
	}

	newTransaction := models.Transaction{
		UserName:      req.UserName,
		DestinationID: req.DestinationID,
		AmountPaid:    req.AmountPaid,
		TicketHash:    ipfsHash,
		BookingDate:   time.Now(),
	}

	if err := DB.Create(&newTransaction).Error; err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Gagal menyimpan transaksi"})
	}

	return c.JSON(fiber.Map{
		"message":     "Booking Berhasil!",
		"ticket_hash": ipfsHash,
		"data":        newTransaction,
	})
}

func SeedDestinations(c *fiber.Ctx) error {
	destinations := []models.Destination{
		{Name: "Candi Borobudur (Sunrise Ticket)", Category: "Sejarah", Price: 350000, Rating: 4.9, ImageURL: "/borobur.png", Description: "Matahari terbit di candi terbesar dunia."},
		{Name: "Uluwatu Kecak Fire Dance", Category: "Budaya", Price: 150000, Rating: 4.8, ImageURL: "/kecak_dance.png", Description: "Tarian magis di tebing Uluwatu."},
		{Name: "Paket Snorkeling Raja Ampat", Category: "Bahari", Price: 1200000, Rating: 5.0, ImageURL: "/snorkeling_raja.png", Description: "Surga bawah laut Papua."},
		{Name: "Jeep Tour Bromo Tengger", Category: "Alam", Price: 600000, Rating: 4.7, ImageURL: "/sewa_jeep.png", Description: "Petualangan jeep Bromo."},

		{
			Name:        "Jelajah Nusantara (AI Plan)",
			Category:    "AI Feature",
			Price:       0,
			Rating:      5.0,
			ImageURL:    "/wisata-indah.png",
			Description: "Peta rahasia perjalanan cerdasmu.",
		},
	}

	if err := DB.Create(&destinations).Error; err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Gagal nyuntik data local path ke database"})
	}

	return c.JSON(fiber.Map{
		"message": "BAM! Database diperbarui dengan Gambar Lokal & Data Banner!",
	})
}
