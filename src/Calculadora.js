class Calculadora {
    constructor() {
        this.resultado = 0;
    }

    sumar(a, b) {
        this.resultado = a + b;
    }

    restar(a, b) {
        this.resultado = a - b;
    }

    multiplicar(a, b) {
        this.resultado = a * b;
    }

    getResultado() {
        return this.resultado;
    }
}

module.exports = Calculadora;