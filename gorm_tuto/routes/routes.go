package Routes

import (
 "example/gorm_tuto/controllers"
"github.com/gin-gonic/gin"
)

//SetupRouter ... Configure routes
func SetupRouter() *gin.Engine {
 r := gin.Default()
 grp1 := r.Group("/spots-api")
 {
  grp1.GET("spots", Controllers.GetSpots)
  grp1.POST("spots", Controllers.CreateSpot)
  grp1.GET("spots/:id", Controllers.GetSpotByID)
  grp1.PUT("spots/:id", Controllers.UpdateSpot)
  grp1.DELETE("spots/:id", Controllers.DeleteSpot)
 }
 return r
}