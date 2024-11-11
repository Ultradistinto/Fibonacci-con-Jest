const Calculadora = require('./Calculadora.js');

class CalculadoraTest {
    static runTests() {
        const calc = new Calculadora();
        calc.sumar(2, 3)
        console.log('Agrego: 2 + 3 =', calc.getResultado());
        calc.restar(5, 2)
        console.log('Resto: 5 - 2 =', calc.getResultado());
        calc.multiplicar(4, 3)
        console.log('Multiplico: 4 * 3 =', calc.getResultado());
    }
}

// Corro los tests
CalculadoraTest.runTests();