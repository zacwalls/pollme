#!/bin/bash

docker-compose up --build -d
dotenv -f .env.development.local -- npx prisma db push
pnpm run dev