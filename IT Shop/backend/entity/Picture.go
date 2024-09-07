package entity

import "gorm.io/gorm"

type Picture struct {
	gorm.Model
	File string

	ProductId uint  
	//  `gorm:"type:varchar(255)"` 
	Product Product `gorm:"foreignKey:ProductId"`
}