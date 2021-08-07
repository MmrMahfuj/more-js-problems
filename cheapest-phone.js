const phones = [
    { name: 'samsung s5', price: 45000, camera: 10, storage: 32 },
    { name: 'waltone m32', price: 15000, camera: 8, storage: 8 },
    { name: 'shaomi m3', price: 12000, camera: 5, storage: 16 },
    { name: "oppo a2", print: 17000, camera: 12, storage: 64 },
    { name: 'nokia n95', price: 8000, camera: 2, storage: 4 },
    { name: 'htc h81', price: 25000, camera: 30, storage: 3 },
    { name: 'titanic g41', price: 5000, camera: 2, storage: 2 }
];

let cheapest = phones[0];
for (const phone of phones) {
    /* compare price onli */
    if (phone.price < cheapest.price) {
        cheapest = phone;
    }
}


console.log(cheapest);