package test

import  (
	"gorm.io/gorm"
)
type User struct {
	gorm.Model
	Name      string
	CompanyID string
	Company   Company `gorm:"references:Code"` // use Code as references
  }
  
type Company struct {
	ID   int
	Code string
	Name string
  }