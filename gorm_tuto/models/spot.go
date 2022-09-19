package Models

import (
 "example/gorm_tuto/config"
 "fmt"
_"github.com/go-sql-driver/mysql"
)

//GetAllUsers Fetch all user data
func GetAllSpots(spot *[]Spot) (err error) {
 if err = Config.DB.Find(spot).Error; err != nil {
  return err
 }
 return nil
}

//CreateUser ... Insert New data
func CreateSpot(spot *Spot) (err error) {
 if err = Config.DB.Create(spot).Error; err != nil {
  return err
 }
 return nil
}

//GetUserByID ... Fetch only one user by Id
func GetSpotByID(spot *Spot, id string) (err error) {
 if err = Config.DB.Where("id = ?", id).First(spot).Error; err != nil {
  return err
 }
 return nil
}

//UpdateUser ... Update user
func UpdateSpot(spot *Spot, id string) (err error) {
 fmt.Println(spot)
 Config.DB.Save(spot)
 return nil
}

//DeleteUser ... Delete user
func DeleteSpot(spot *Spot, id string) (err error) {
 Config.DB.Where("id = ?", id).Delete(spot)
 return nil
}