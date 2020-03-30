var Complex = /** @class */ (function () {
    function Complex(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    Complex.prototype.add = function (obj) {
        return new Complex(this.real + obj.real, this.imaginary + obj.imaginary);
    };
    Complex.prototype.sub = function (obj) {
        return new Complex(this.real - obj.real, this.imaginary - obj.imaginary);
    };
    Complex.prototype.mod = function () {
        return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
    };
    Complex.prototype.toString = function () {
        console.log(this.real + "," + this.imaginary + "i");
    };
    return Complex;
}());
var x = new Complex(6, 5);
var y = new Complex(4, 3);
console.log('Liczba1: ', x);
console.log('Liczba2: ', y);
var z = x.add(y);
console.log('\nDodawanie:');
z.toString();
var zz = z.sub(x);
console.log('\nOdejmowanie:');
zz.toString();
console.log('\nModuł: ', zz.mod());
