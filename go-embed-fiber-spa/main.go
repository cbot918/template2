package main

import (
	"embed"

	"github.com/gofiber/fiber/v2"
	"github.com/soypat/rebed"
)

//go:embed ui/dist
var assets embed.FS

func main() {
	app := fiber.New()
	// I prefer this form with www parent directory
	// as it avoids overwriting the existing frontend/dist directory
	// if you happen to run the program in the same working directory
	rebed.Write(assets, "www")
	app.Static("/", "www/ui/dist")
	err := app.Listen(":3003")
	if err != nil {
		panic(err)
	}
}
