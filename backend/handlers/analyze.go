package handlers

import (
	"bytes"
	"encoding/json"
	"io/ioutil"
	"net/http"

	"github.com/gin-gonic/gin"
)

// Определяем структуру запроса
type RequestPayload struct {
	Scene string `json:"scene"`
}

// Определяем структуру ответа от API
type ResponsePayload struct {
	Candidates []struct {
		Output string `json:"output"`
	} `json:"candidates"`
}

func AnalyzeHandler(c *gin.Context) {
	// Ваш API ключ
	apiKey := "AIzaSyCNXTd8Q583IcEddDWX3BBr95-Bz5kZa2U"
	if apiKey == "" {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "API key is missing"})
		return
	}

	// Извлекаем тело запроса
	var requestPayload RequestPayload
	if err := c.BindJSON(&requestPayload); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request payload"})
		return
	}

	// URL для запроса
	url := "https://generativelanguage.googleapis.com/v1beta2/models/gemini-1.5-flash-latest:generateText?key=" + apiKey

	// Формируем JSON тело запроса
	requestBody := map[string]interface{}{
		"prompt": map[string]string{
			"text": requestPayload.Scene,
		},
		"maxOutputTokens": 50,
	}

	jsonPayload, err := json.Marshal(requestBody)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to marshal request payload"})
		return
	}

	// Создаём новый HTTP запрос
	req, err := http.NewRequest("POST", url, bytes.NewBuffer(jsonPayload))
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create request"})
		return
	}

	// Устанавливаем заголовки
	req.Header.Set("Content-Type", "application/json")

	// Отправляем запрос
	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to send request"})
		return
	}
	defer resp.Body.Close()

	// Чтение ответа
	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to read response"})
		return
	}

	// Парсинг ответа
	var response ResponsePayload
	if err := json.Unmarshal(body, &response); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to parse response"})
		return
	}

	// Проверка на наличие данных в ответе
	if len(response.Candidates) > 0 {
		c.JSON(http.StatusOK, gin.H{"emotion": response.Candidates[0].Output})
	} else {
		c.JSON(http.StatusOK, gin.H{"emotion": "No response generated"})
	}
}
