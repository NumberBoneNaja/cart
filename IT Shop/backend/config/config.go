package config

import(
	"fmt"
	//"thiradet/entity"


	"thiradet/entity"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)
const (
	username     = "root"
	password     = "1234"
	host         = "localhost"
	port         = "3306"
	databaseName = "itshopx"
)
var db *gorm.DB

func DB() *gorm.DB {
	return db
}

func Config (){
	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8mb4&parseTime=True&loc=Local",
		username, password, host, port, databaseName)
	database, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("failed to connect to database")
	}

	// Print database connection object
	fmt.Println(database)
	fmt.Println("Database connection successful!")
   

	database.AutoMigrate(&entity.Customer{})

	// Migrate ตาราง Cart หลังจาก Product
	database.AutoMigrate(&entity.Product{})

	// Migrate ตาราง Customer สุดท้าย
	database.AutoMigrate(&entity.Cart{},&entity.Picture{})
	db = database
}

