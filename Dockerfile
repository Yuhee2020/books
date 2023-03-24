# Используем за основу Docker-образ node версии 14
FROM node

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем файлы package.json и package-lock.json и устанавливаем зависимости
COPY package*.json ./
RUN npm install

# Копируем все файлы внутрь контейнера
COPY . .

# Собираем проект
RUN npm run build

# Указываем, что приложение будет запускаться на порту 80
EXPOSE 80

# Команда для запуска приложения
CMD ["npm", "run", "start"]