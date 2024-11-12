package main

import (
	"github.com/Ganeeral/emojify-ai/database"
	"github.com/Ganeeral/emojify-ai/models"
)

func main() {
	database.ConnectDB()

	// Миграция моделей
	database.DB.AutoMigrate(&models.User{}, &models.Request{})
}
