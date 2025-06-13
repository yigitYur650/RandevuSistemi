let currentNumber = 0;

// Sayfa yüklendiğinde mevcut numarayı al
async function getCurrentNumber() {
    try {
        const response = await fetch('/api/number');
        const data = await response.json();
        currentNumber = data.number;
        document.getElementById('currentNumber').textContent = currentNumber;
    } catch (error) {
        console.error('Error:', error);
    }
}

// Yeni numara al
async function getNewNumber() {
    try {
        const response = await fetch('/api/number', {
            method: 'POST'
        });
        const data = await response.json();
        currentNumber = data.number;
        document.getElementById('currentNumber').textContent = currentNumber;
        document.getElementById('yourNumber').textContent = currentNumber;
    } catch (error) {
        console.error('Error:', error);
    }
}

// Sayfa yüklendiğinde mevcut numarayı al
getCurrentNumber();

// Butona tıklandığında yeni numara al
document.getElementById('getTicket').addEventListener('click', getNewNumber); 