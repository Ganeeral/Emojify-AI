package models

import (
	"time"
)

type Request struct {
	ID            uint   `gorm:"primaryKey"`
	UserID        uint   `gorm:"not null"`
	Description   string `gorm:"type:text"`
	CreationDate  time.Time
	User          User `gorm:"foreignKey:UserID"`
}
