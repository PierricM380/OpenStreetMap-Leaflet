let myMap = L.map('myMap').setView([42.72300, 2.61385], 13);

// Tile layer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: 1,
    maxZoom: 20
}).addTo(myMap);

// Display marker with his popup
L.marker([42.7163277, 2.6078925]).addTo(myMap)
    .bindPopup('Randonnée Belesta - Pic Aubeuil')
    .openPopup();