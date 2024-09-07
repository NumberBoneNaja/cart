package entity

import (
	"time"

	"gorm.io/gorm"
)

type Customer struct {
	gorm.Model
	Prefix    string
	FirstName string
	LastName  string
	Email     string
	Password  string
	BirtDay   time.Time `gorm:"type:date"`

	Carts []Cart `gorm:"foreignKey:CustomerId;references:ID"`
}
