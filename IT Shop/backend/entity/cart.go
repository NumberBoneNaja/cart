package entity

import "gorm.io/gorm"

type Cart struct {
	gorm.Model
	Quantity uint

	//fk
	CustomerId uint
	Customer   Customer `gorm:"foreignKey:CustomerId"`

	ProductId uint 
	// `gorm:"type:varchar(255)"` 
	Product Product   `gorm:"foreignKey:ProductId "`
	

	
}