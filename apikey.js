
const fetch = require('node-fetch');
const API_URL = 'https://api-public.sandbox.exchange.coinbase.com';
// API
const API_KEY = process.env.COINBASE_API_KEY;
const API_SECRET = process.env.COINBASE_API_SECRET;
; //private key

// list of crypto and trading pairs
export const fetchCryptos = async () => {
    try {
        const response = await fetch(`${API_URL}/products`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'CB-ACCESS-KEY': API_KEY,
                'CB-ACCESS-SIGN': generateSignature('GET', '/products', '', API_SECRET),
                'CB-ACCESS-TIMESTAMP': Date.now() / 1000,
            },
        });
        return await response.json();
    } catch (error) {
        console.error('Error fetching cryptocurrencies:', error);
    }
};

const generateSignature = (method, path, body = '', secret) => {
    const timestamp = Date.now() / 1000;
    const bodyString = body || '';
    const message = timestamp + method + path + bodyString;
    
    const hmac = require('crypto').createHmac('sha256', secret);
    return hmac.update(message).digest('base64');
};

export const placeOrder = async (orderData) => {
    try {
        const response = await fetch(`${API_URL}/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'CB-ACCESS-KEY': API_KEY,
                'CB-ACCESS-SIGN': generateSignature('POST', '/orders', JSON.stringify(orderData), API_SECRET),
                'CB-ACCESS-TIMESTAMP': Date.now() / 1000,
            },
            body: JSON.stringify(orderData),
        });
        return await response.json();
    } catch (error) {
        console.error('Error placing order:', error);
    }
};
