package Controllers

import (
 "example/gorm_tuto/models"
 "fmt"
 "net/http"
"github.com/gin-gonic/gin"
)

//GetUsers ... Get all users
func GetSpots(c *gin.Context) {
 var spot []Models.Spot
 err := Models.GetAllSpots(&spot)
 if err != nil {
  c.AbortWithStatus(http.StatusNotFound)
 } else {
  c.JSON(http.StatusOK, spot)
 }
}

//CreateUser ... Create User
func CreateSpot(c *gin.Context) {
 var spot Models.Spot
 c.BindJSON(&spot)
 err := Models.CreateSpot(&spot)
 if err != nil {
  fmt.Println(err.Error())
  c.AbortWithStatus(http.StatusNotFound)
 } else {
  c.JSON(http.StatusOK, spot)
 }
}

//GetUserByID ... Get the user by id
func GetSpotByID(c *gin.Context) {
 id := c.Params.ByName("id")
 var spot Models.Spot
 err := Models.GetSpotByID(&spot, id)
 if err != nil {
  c.AbortWithStatus(http.StatusNotFound)
 } else {
  c.JSON(http.StatusOK, spot)
 }
}

//UpdateUser ... Update the user information
func UpdateSpot(c *gin.Context) {
 var spot Models.Spot
 id := c.Params.ByName("id")
 err := Models.GetSpotByID(&spot, id)
 if err != nil {
  c.JSON(http.StatusNotFound, spot)
 }
 c.BindJSON(&spot)
 err = Models.UpdateSpot(&spot, id)
 if err != nil {
  c.AbortWithStatus(http.StatusNotFound)
 } else {
  c.JSON(http.StatusOK, spot)
 }
}

//DeleteUser ... Delete the user
func DeleteSpot(c *gin.Context) {
 var spot Models.Spot
 id := c.Params.ByName("id")
 err := Models.DeleteSpot(&spot, id)
 if err != nil {
  c.AbortWithStatus(http.StatusNotFound)
 } else {
  c.JSON(http.StatusOK, gin.H{"id" + id: "is deleted"})
 }
}