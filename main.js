
import { fetchCryptos } from './api.js';
import { displayCryptos, toggleOrderEntry } from './dom.js';
import { setupOrderForm } from './order.js';
import { login, logout, isLoggedIn } from './auth.js';

const init = async () => {
    if (isLoggedIn()) {
        toggleOrderEntry(true);
        document.getElementById('logout-btn').style.display = 'inline';
    } else {
        toggleOrderEntry(false);
        document.getElementById('logout-btn').style.display = 'none';
    }

    const cryptos = await fetchCryptos();
    displayCryptos(cryptos);
    setupOrderForm();

    document.getElementById('login-btn').addEventListener('click', () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        if (login(username, password)) {
            toggleOrderEntry(true);
            document.getElementById('logout-btn').style.display = 'inline';
        } else {
            alert('Login failed!');
        }
    });

    document.getElementById('logout-btn').addEventListener('click', () => {
        logout();
        toggleOrderEntry(false);
        document.getElementById('logout-btn').style.display = 'none';
    });
};

init();
