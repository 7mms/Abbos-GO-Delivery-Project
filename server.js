const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Подключаем папку public для статики
app.use(express.static(path.join(__dirname, "public")));

// Отдаём index.html при заходе на /
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Обработка ошибок (например, если файл не найден)
app.use((req, res, next) => {
  res.status(404).send("Страница не найдена");
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
