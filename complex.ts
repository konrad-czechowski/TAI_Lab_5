class Complex {

    private real: number;
    private imaginary: number;

    constructor(real: number, imaginary: number) {
        this.real = real;
        this.imaginary = imaginary;
    }

    add(obj: Complex) : Complex {
        return new Complex(this.real + obj.real, this.imaginary + obj.imaginary);
    }

    sub(obj: Complex) : Complex {
        return new Complex(this.real - obj.real, this.imaginary - obj.imaginary);
    }

    mod() : number {
        return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
    }

    toString() {
        console.log(`${this.real},${this.imaginary}i`);
    }
}

let x = new Complex(6,5);
let y = new Complex(4,3);

console.log('Liczba1: ', x);
console.log('Liczba2: ', y);

let z = x.add(y);
console.log('\nDodawanie:');
z.toString();

let zz = z.sub(x);
console.log('\nOdejmowanie:');
zz.toString();

console.log('\nModuł: ', zz.mod());