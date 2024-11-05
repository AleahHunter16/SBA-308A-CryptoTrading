// The api link for coinbase I got off of the example list from dog & cat website suppose try use fetch
const API_URL = 'https://api-public.sandbox.exchange.coinbase.com';

export const fetchCryptos = async () => {
    try {
        const response = await fetch(`${API_URL}/products`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching cryptocurrencies:', error);
    }
};

export const placeOrder = async (orderData) => {
    try {
        const response = await fetch(`${API_URL}/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderData),
        });
        return await response.json();
    } catch (error) {
        console.error('Error placing order:', error);
    }
};
