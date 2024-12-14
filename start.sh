#!/bin/sh

# Gerar o cliente Prisma
npx prisma generate

# Sincronizar o banco de dados com o esquema Prisma
npx prisma db push

# Iniciar o servidor de desenvolvimento
npm run start:dev
