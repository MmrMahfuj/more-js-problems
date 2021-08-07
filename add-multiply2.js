

function woodCalculator(chairQuantity, tabelQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWoodQuantity = chairQuantity * perChairWood;
    const tableWoodQuantity = tabelQuantity * perTableWood;
    const bedWoodQuantity = bedQuantity * perBedWood;

    const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;

    return totalWood;
}

const myWood = woodCalculator(12, 5, 3);
console.log('your need wood ', myWood);