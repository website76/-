function predictBigSmall(periodNumber) {
    const lastDigit = (periodNumber * 7) % 10;
    return lastDigit % 2 === 1 ? "small" : "big";
}

function startPrediction() {
    const periodNumber = document.getElementById('periodNumber').value;
    if (!periodNumber || periodNumber < 100 || periodNumber > 999) {
        alert('Please enter a valid 3-digit period number!');
        return;
    }

    const processingBar = document.getElementById('processingBar');
    const resultDiv = document.getElementById('result');
    processingBar.classList.add('loading');
    resultDiv.classList.add('hidden');
    resultDiv.style.opacity = 0;

    setTimeout(() => {
        const result = predictBigSmall(periodNumber);
        processingBar.classList.remove('loading');
        resultDiv.classList.remove('hidden');
        resultDiv.textContent = `Prediction ➪ ${result}`;
        resultDiv.style.opacity = 1;
    }, 3000); // Simulate processing time with 3 seconds
}
