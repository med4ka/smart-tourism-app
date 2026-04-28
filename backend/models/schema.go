package models

import (
	"time"

	"gorm.io/gorm"
)

type Destination struct {
	ID          uint    `gorm:"primaryKey" json:"id"`
	Name        string  `gorm:"type:varchar(150);not null" json:"name"`
	Category    string  `gorm:"type:varchar(50)" json:"category"`
	Description string  `gorm:"type:text" json:"description"`
	Price       float64 `gorm:"type:decimal(10,2)" json:"price"`
	Rating      float64 `gorm:"type:decimal(2,1)" json:"rating"`
	ImageURL    string  `gorm:"type:varchar(255)" json:"image_url"`
}

type Transaction struct {
	ID            uint           `gorm:"primaryKey" json:"id"`
	UserName      string         `gorm:"type:varchar(100);not null" json:"user_name"`
	DestinationID uint           `json:"destination_id"`
	AmountPaid    float64        `json:"amount_paid"`
	TicketHash    string         `gorm:"type:varchar(255)" json:"ticket_hash"`
	BookingDate   time.Time      `json:"booking_date"`
	CreatedAt     time.Time      `json:"created_at"`
	DeletedAt     gorm.DeletedAt `gorm:"index" json:"-"`
}

type Facility struct {
	ID          uint    `gorm:"primaryKey" json:"id"`
	Name        string  `gorm:"type:varchar(100);not null" json:"name"`
	Type        string  `gorm:"type:varchar(50)" json:"type"`
	Lat         float64 `json:"lat"`
	Lng         float64 `json:"lng"`
	PhoneNumber string  `gorm:"type:varchar(20)" json:"phone_number"`
}
