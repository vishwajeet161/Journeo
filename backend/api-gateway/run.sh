#!/bin/bash

echo "🚀 Starting API Gateway..."

# Load .env if exists
if [ -f .env ]; then
    export $(grep -v '^#' .env | xargs)
    echo "Loaded environment from .env"
fi

# Check required variables
if [ -z "$JWT_SECRET" ]; then
    echo "❌ ERROR: JWT_SECRET not set!"
    echo "Create .env file with JWT_SECRET (must match user-service)"
    exit 1
fi

echo "✅ All environment variables set"
echo "🔐 Using JWT secret: ${JWT_SECRET:0:10}..."

# Run with Maven
mvn spring-boot:run