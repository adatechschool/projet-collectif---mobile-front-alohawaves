package main

import (
 "example/gorm_tuto/config"
 "example/gorm_tuto/models"
 "example/gorm_tuto/routes"
 "fmt"
"github.com/jinzhu/gorm"
)

var err error

func main() {
 Config.DB, err = gorm.Open("mysql", Config.DbURL(Config.BuildDBConfig()))

 if err != nil {
  fmt.Println("Status:", err)
 }

defer Config.DB.Close()
Config.DB.AutoMigrate(&Models.Spot{})

r := Routes.SetupRouter()
 //running
 r.Run()
}