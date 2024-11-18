package handlers

import (
    "net/http"
    "github.com/gin-gonic/gin"
    "github.com/Ganeeral/emojify-ai/database"
    "github.com/Ganeeral/emojify-ai/models"
)

func GetProfile(c *gin.Context) {
    userID := c.GetUint("userID")

    var user models.User
    if err := database.DB.First(&user, userID).Error; err != nil {
        c.JSON(http.StatusNotFound, gin.H{"error": "Пользователь не найден"})
        return
    }

    c.JSON(http.StatusOK, gin.H{
        "id":        user.ID,
        "name":      user.Name,
        "email":     user.Email,
        "Avatar": 	 user.Avatar,
    })
}
