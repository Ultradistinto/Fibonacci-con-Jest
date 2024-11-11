class Fibonacci {
  constructor() {}

  numeroFib(a) {
    if (a <= 0) {
      throw new Error('fibonacci only accepts positive numbers');
    }
    if (a === 1) {
      return 0;
    }
    const numeros = new Array(a + 1);
    numeros[0] = 0;
    numeros[1] = 1;
    for (let i = 2; i <= a; i++) {
      numeros[i] = numeros[i - 1] + numeros[i - 2];
    }
    return numeros[a];
  }

  listaHasta(a) {
    if (a <= 0) {
      throw new Error('fibonacci only accepts positive numbers');
    }
    if (a === 1) {
      return [0];
    }
    const numeros = new Array(a + 1);
    numeros[0] = 0;
    numeros[1] = 1;
    for (let i = 2; i <= a; i++) {
      numeros[i] = numeros[i - 1] + numeros[i - 2];
    }
    return numeros;
  }

  sumaFib(a) {
    if (a <= 0) {
      throw new Error('fibonacci only accepts positive numbers');
    }
    if (a === 1) {
      return 0;
    }
    const numeros = new Array(a + 1);
    let suma = 1;
    numeros[0] = 0;
    numeros[1] = 1;
    for (let i = 2; i <= a; i++) {
      numeros[i] = numeros[i - 1] + numeros[i - 2];
      suma += numeros[i];
    }
    return suma;
  }

  productoFib(a) {
    if (a <= 1) {
      throw new Error('fibonacci only accepts positive numbers');
    }
    const numeros = new Array(a + 1);
    let producto = 1;
    numeros[0] = 0;
    numeros[1] = 1;
    for (let i = 2; i <= a; i++) {
      numeros[i] = numeros[i - 1] + numeros[i - 2];
      producto *= numeros[i];
    }
    return producto;
  }

  formaParteFib(a) {
    if (a < 0) {
      throw new Error('fibonacci only accepts positive numbers');
    }
    if (a === 1 || a === 0) {
      return true;
    }
    const numeros = new Array(a + 1);
    numeros[0] = 0;
    numeros[1] = 1;
    for (let i = 2; i <= a; i++) {
      numeros[i] = numeros[i - 1] + numeros[i - 2];
      if (numeros[i] === a) {
        return true;
      }
    }
    return false;
  }
}

export default Fibonacci;
