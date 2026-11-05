const express = require('express');
const app = express();
const PORT = 3000;

// 1. مسار الصفحة الرئيسية
app.get('/', (req, res) => {
  res.send("Welcome to Camper Bot's homepage!");
});

// 2. مسار الهوايات
app.get('/hobbies', (req, res) => {
  res.send("I cycle, go boating, and play guitar.");
});

// 3. مسار المهارات
app.get('/skills', (req, res) => {
  res.send("JavaScript, Node.js, and Express.js!");
});

// 4. مسار الـ API الخاص بالملف الشخصي
app.get('/api/profile', (req, res) => {
  res.json({
    name: "Camper Bot",
    hobbies: ["cycling", "boating", "guitar"],
    skills: ["JavaScript", "Node.js", "Express.js"]
  });
});

// تشغيل الخادم على المنفذ 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});