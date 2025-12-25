#!/bin/bash

echo "🚀 Starting User Service..."

# Load .env if exists
if [ -f .env ]; then
    export $(grep -v '^#' .env | xargs)
    echo "Loaded environment from .env"
fi

# Check required variables
if [ -z "$DATABASE_URL" ] || [ -z "$DB_USERNAME" ] || [ -z "$DB_PASSWORD" ]; then
    echo "❌ ERROR: Database credentials not set!"
    echo "Create .env file with DATABASE_URL, DB_USERNAME, DB_PASSWORD"
    exit 1
fi

if [ -z "$JWT_SECRET" ]; then
    echo "❌ ERROR: JWT_SECRET not set!"
    exit 1
fi

echo "✅ All environment variables set"
echo "📡 Connecting to: $(echo $DATABASE_URL | sed 's/:[^:]*@/:***@/')"

# Run with Maven
mvn spring-boot:run