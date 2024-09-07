package main

import (
	// "time"
	// "fmt"

	"net/http"
	"thiradet/config"
	"thiradet/controller"
	"github.com/gin-gonic/gin"
	
)


const PORT = "8000"
func main() {

     config.Config()
	
	 r := gin.Default()
	  r.Use(CORSMiddleware())
	 r.GET("/allUsers",controller.GetUser)
	 r.POST("/createCart",controller.CreateCart)
	 r.PATCH("/updateCart/:id",controller.UpdateCart)
	 r.DELETE("/deleteCart/:id",controller.DelteProductCart)
	
	r.GET("/getAllCart",controller.GetAllCart)
	 r.GET("/cart/:customerId", controller.GetCartByCustomer)
    
	r.POST("/upload", controller.CreateImage)
	r.GET("/images", controller.GetAllImages)
	r.GET("/images/:id", controller.GetImage)
	r.GET("/getAllProducts", controller.GetProducts)

	r.POST("/c/:id", controller.CreateCartByChat)
    r.Static("/uploads", "./uploads")




	 r.GET("/", func(c *gin.Context) {
		
		c.String(http.StatusOK, "API RUNNING... PORT: %s", PORT)
	})
	r.Run("localhost:" + PORT)
	
}
func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, DELETE, PATCH")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}
