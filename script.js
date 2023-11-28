const cars = [
    {
        carBrand: 'Mercedes-Benz',
        price: 12000,
        isAvailableForSale: true
    },
    {
        carBrand: 'Toyota',
        price: 10000,
        isAvailableForSale: true
    },
    {
        carBrand: 'Honada',
        price: 7000,
        isAvailableForSale: false
    }
];
let newCar = [ 
    {
        carBrand: 'Ford',
        price: 4000,
        isAvailableForSale: false
        
    },
     {
        carBrand: 'Ford40',
        price: 4000,
        isAvailableForSale: false
    }
];
    let newCar2 = {
        carBrand: 'Ford',
        price: 4000,
        isAvailableForSale: false
        
    }

    cars.push(newCar);
    console.log(cars);
    console.log(cars[1].carBrand,cars[1].price, newCar.carBrand, newCar2.price, newCar2, newCar[1].isAvailableForSale, newCar[1].price)