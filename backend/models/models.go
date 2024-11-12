package models

import (
	"gorm.io/gorm"
)

// Модель для пользователя
type User struct {
	gorm.Model
	Name     string `gorm:"size:100;not null"`
	Email    string `gorm:"uniqueIndex;not null"`
	Password string `gorm:"not null"`
}

// Модель для хранения запросов
type Request struct {
	gorm.Model
	UserID  uint
	Text    string
	Emotion string
}
