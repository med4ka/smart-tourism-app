package ai

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
	"strings"
)

func GenerateSmartTrip(budget string, style string, days int) (string, error) {
	rawKey := os.Getenv("GEMINI_API_KEY")

	apiKey := strings.TrimSpace(rawKey)
	apiKey = strings.ReplaceAll(apiKey, "\"", "")
	apiKey = strings.ReplaceAll(apiKey, "'", "")

	if apiKey == "" {
		return "", fmt.Errorf("GEMINI_API_KEY IS MISSING IN .ENV")
	}

	url := "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=" + apiKey

	systemPrompt := fmt.Sprintf(`You are a Smart Tourism AI Planner.
Make a travel itinerary for %d days.
Budget level: %s.
Travel style: %s.
Include cultural/local events and weather-aware suggestions.
IMPORTANT: You must respond ONLY with a valid RAW JSON array of objects. Do not use markdown blocks. 
Example format: [{"day": 1, "theme": "...", "activities": ["morning: ...", "afternoon: ..."]}]`, days, budget, style)

	reqBody := map[string]interface{}{
		"contents": []map[string]interface{}{
			{"parts": []map[string]interface{}{{"text": systemPrompt}}},
		},
	}

	jsonData, _ := json.Marshal(reqBody)
	resp, err := http.Post(url, "application/json", bytes.NewBuffer(jsonData))
	if err != nil {
		return "", err
	}
	defer resp.Body.Close()

	bodyBytes, _ := io.ReadAll(resp.Body)

	if resp.StatusCode != http.StatusOK {
		fmt.Println("\n=== GOOGLE API ERROR DETECTED === ")
		fmt.Println("STATUS:", resp.StatusCode)
		fmt.Println("GOOGLE RESPONSE:", string(bodyBytes))
		fmt.Println("API KEY TERKIRIM:", apiKey[:10]+"... (disensor)")
		fmt.Println("====================================\ndan mungkin ini penyebabnya:")
		return "", fmt.Errorf("Google nolak request! Cek terminal VS Code lu.")
	}

	var geminiResp struct {
		Candidates []struct {
			Content struct {
				Parts []struct {
					Text string `json:"text"`
				} `json:"parts"`
			} `json:"content"`
		} `json:"candidates"`
	}

	json.Unmarshal(bodyBytes, &geminiResp)

	if len(geminiResp.Candidates) > 0 && len(geminiResp.Candidates[0].Content.Parts) > 0 {
		rawText := geminiResp.Candidates[0].Content.Parts[0].Text
		rawText = strings.ReplaceAll(rawText, "```json", "")
		rawText = strings.ReplaceAll(rawText, "```", "")
		return strings.TrimSpace(rawText), nil
	}

	return "", fmt.Errorf("AI sedang pusing, coba lagi")
}
