// Set up trade orders aka market execution or placing at set price
import { placeOrder } from './api.js';

export const setupOrderForm = () => {
    const form = document.getElementById('order-form');
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const orderData = {
            cryptocurrency: document.getElementById('crypto').value,
            amount: document.getElementById('amount').value,
        };
        const response = await placeOrder(orderData);
        console.log('Order response:', response);
    });
};
