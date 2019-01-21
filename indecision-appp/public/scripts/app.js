'use strict';

var add = function add(a, b) {
    //console.log(arguments);
    return a + b;
};

console.log(add(1, 2));

// arrow function not support argument

var user = {
    name: 'Chaos',
    cities: ['Beijing', 'Hangzhou', 'Chengdu'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        console.log(this.name);
        console.log(this.cities);
        this.cities.forEach(function (city) {
            console.log(_this.name + ' has lived in ' + city);
        });

        var cityMessages = this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
        return cityMessages;
    }
};
console.log(user.printPlacesLived());

var multiplier = {
    numbers: [2, 3, 4],
    multiplyBy: 2,
    multiply: function multiply() {
        var _this2 = this;

        var result = this.numbers.map(function (number) {
            return number * _this2.multiplyBy;
        });
        return result;
    }
};

console.log(multiplier.multiply());
