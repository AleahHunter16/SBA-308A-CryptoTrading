// showing the availiable cryptos in a list form I hope
export const displayCryptos = (cryptos) => {
    const cryptoList = document.getElementById('crypto-list');
    cryptoList.innerHTML = '';
    cryptos.forEach(crypto => {
        const div = document.createElement('div');
        div.textContent = `${crypto.id}: ${crypto.quote_currency} - ${crypto.base_currency}`;
        cryptoList.appendChild(div);
    });
};

export const toggleOrderEntry = (show) => {
    const orderEntry = document.getElementById('order-entry');
    orderEntry.style.display = show ? 'block' : 'none';
};
