let currentNumber = 0;

document.getElementById('getTicket').addEventListener('click', () => {
    currentNumber++;
    document.getElementById('currentNumber').textContent = currentNumber;
    document.getElementById('yourNumber').textContent = currentNumber;
}); 