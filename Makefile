# Переменные
NPM = pnpm
NPM_RUN = $(NPM) run
APP_NAME = mediagrab-frontend
PORT = 3000

.PHONY: install dev build start test lint format clean help docker-build docker-run docker-compose-up

install: ## Установить зависимости
	$(NPM) install

dev: ## Запустить dev-сервер
	$(NPM_RUN) dev

build: ## Собрать production-версию
	$(NPM_RUN) build

start: ## Запустить production-сборку
	$(NPM_RUN) start

test: ## Запустить тесты
	$(NPM_RUN) test

lint: ## Проверить код линтером
	$(NPM_RUN) lint

format: ## Форматировать код
	$(NPM_RUN) format

clean: ## Очистить node_modules и сборку
	rm -rf node_modules .next dist

help: ## Показать помощь
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

docker-build: ## Собрать Docker-образ
	docker build -t $(APP_NAME) .

docker-run: ## Запустить контейнер
	docker run -p $(PORT):$(PORT) $(APP_NAME)

docker-compose-up: ## Запустить через docker-compose
	docker-compose up -d