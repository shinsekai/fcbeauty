.PHONY: help install dev lint build preview docker-build docker-run clean

help: ## List available targets
	@grep -E '^[a-zA-Z_-]+:.*?## ' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-16s\033[0m %s\n", $$1, $$2}'

install: ## Install dependencies
	npm install

dev: ## Start the development server
	npm run dev

lint: ## Run the linter
	npm run lint

build: ## Type-check and build for production
	npm run build

preview: ## Preview the production build locally
	npm run preview

docker-build: ## Build the production Docker image
	docker build -t fcbeauty .

docker-run: ## Serve the Docker image on http://localhost:8080
	docker run --rm -p 8080:80 fcbeauty

clean: ## Remove build artifacts
	rm -rf dist
