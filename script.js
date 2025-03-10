document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('coin-form');
    const valueInput = document.getElementById('value');
    const coinSelect = document.getElementById('coin');
    const resultDiv = document.getElementById('result');
    const coinResult = document.getElementById('coin-value');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const value = parseFloat(valueInput.value);
        const coin = coinSelect.value;
        let convertedValue;
        let exempleContent;

        switch (coin) {
            case 'USD':
                convertedValue = value / 5.86;
                exempleContent = 'US$ 1,00 = R$ 5,86';  // VALOR DO DIA 10/03/2025
                break;
            case 'EUR':
                convertedValue = value / 6.35;
                exempleContent = '€ 1,00 = R$ 6,35';    // VALOR DO DIA 10/03/2025
                break;
            case 'BTC':
                convertedValue = value / 465707;
                exempleContent = 'BTC 1,00 = R$ 465.707,00';    // VALOR DO DIA 10/03/2025
                break;
            default:
                convertedValue = value;
                exempleContent = 'Moeda não encontrada';
        }

        document.getElementsByClassName('result')[0].style.display = 'flex';
        coinResult.textContent = `${exempleContent}`;
        resultDiv.textContent = `${convertedValue.toFixed(2)} ${coin}`;
    });
});