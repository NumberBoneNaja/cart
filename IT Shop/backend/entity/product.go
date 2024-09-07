package entity

import (
	

	"gorm.io/gorm"
)

type Product struct {
    
    gorm.Model
	ProductName    string
	Description     string
	PricePerPiece float64
	Stock           uint

	// fk
	CategoryID uint

	BrandId uint

	// ตัวเชื่อมกับ cart
	Carts []Cart `gorm:"foreignKey:ProductId"`
	Pictures []Picture `gorm:"foreignKey:ProductId"`
}
