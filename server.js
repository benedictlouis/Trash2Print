// Menggunakan sintaks 'import' dari ES Modules
import express from 'express';
import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

// Trik standar untuk mendapatkan __dirname di ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// API Endpoint untuk logging
app.post('/api/log-click', (req, res) => {
  const { productName, productLink } = req.body;

  if (!productName || !productLink) {
    return res.status(400).json({ message: 'Data produk tidak lengkap.' });
  }

  const timestamp = new Date().toISOString();
  const logEntry = `Timestamp: ${timestamp}, Product: "${productName}", Link: ${productLink}\n`;
  const logFilePath = path.join(__dirname, 'click_log.txt');

  fs.appendFile(logFilePath, logEntry, (err) => {
    if (err) {
      console.error('Gagal menulis ke file log:', err);
      return res.status(500).json({ message: 'Gagal menyimpan log.' });
    }
    console.log('Log berhasil dicatat:', logEntry.trim());
    res.status(200).json({ message: 'Log berhasil dicatat.' });
  });
});

app.listen(PORT, () => {
  console.log(`Server logging berjalan di http://localhost:${PORT}`);
});