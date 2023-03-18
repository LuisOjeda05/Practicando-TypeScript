/*
    ===== Código de TypeScript =====
*/

interface SuperHero {
    name: string,
    age: number,
    address: Address,
    showInformation: () => string
}

interface Address {
    street: string,
    country: string,
    city: string
}

const superHero: SuperHero = {
    name: 'Batman',
    age: 34,
    address: {
        street: 'Calle el Gringo',
        country: 'Costa Rica',
        city: 'Heredia'
    },
    showInformation() {
        return ('Name: ' + this.name + ' Age: ' + this.age + ' Addres: ' + this.address.street + ', ' + this.address.city + ', ' + this.address.country + '.')
    }
}

const address: Address = superHero.address;
console.log(address);
console.log(superHero.showInformation());