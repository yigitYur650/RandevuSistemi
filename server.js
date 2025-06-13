const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 50000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

let currentNumber = 0;

// Mevcut numarayı al
app.get('/api/number', (req, res) => {
    res.json({ number: currentNumber });
});

// Yeni numara al
app.post('/api/number', (req, res) => {
    currentNumber++;
    res.json({ number: currentNumber });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
}); 