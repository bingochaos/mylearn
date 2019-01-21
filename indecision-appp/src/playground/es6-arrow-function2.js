const add = (a, b) => {
    //console.log(arguments);
    return a + b;
}

console.log(add(1,2));

// arrow function not support argument

const user = {
    name: 'Chaos',
    cities: ['Beijing', 'Hangzhou', 'Chengdu'],
    printPlacesLived() {
        console.log(this.name);
        console.log(this.cities);
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        });

        const cityMessages = this.cities.map((city) => {
            return this.name + ' has lived in ' + city;
        });
        return cityMessages;
    }
};
console.log(user.printPlacesLived());

const multiplier = {
    numbers: [2, 3, 4],
    multiplyBy : 2,
    multiply() {
        const result = this.numbers.map((number) => number * this.multiplyBy);
        return result;
    }
}

console.log(multiplier.multiply());