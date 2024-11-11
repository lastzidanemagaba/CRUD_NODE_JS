const express = require('express');
const app = express();
const mahasiswaRoutes = require('./routes/mahasiswaRoutes');
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rute API
app.use('/api/mahasiswa', mahasiswaRoutes);

// Rute untuk frontend
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Menjalankan server
const PORT = process.env.PORT || 3008;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
