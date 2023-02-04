var myMap = L.map('myMap').setView([42.7452716, 2.9191579], 13);

// Tile layer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: 1,
    maxZoom: 20
}).addTo(myMap);

// Add PIN
L.marker([42.7452716, 2.9191579]).addTo(myMap)