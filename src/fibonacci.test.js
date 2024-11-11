import { describe, expect, test } from '@jest/globals';
import Fibonacci from '../src/fibonacci';

/* Jest Cheatsheet https://github.com/sapegin/jest-cheat-sheet */

const fibonacci = new Fibonacci();



describe('Fibonacci with mock function', () => {
  const fibonacci = new Fibonacci();

  fibonacci.numeroFib = jest.fn();
  fibonacci.numeroFib.mockImplementation((n) =>{
    const mockValues = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
    return mockValues[n];
  });
  describe("listaHasta", () => {
    test('should use the mocked method', () => {
      const result = fibonacci.listaHasta(5);

      expect(fibonacci.numeroFib).toHaveBeenCalledTimes(6);
      expect(result).toEqual([0, 1, 1, 2, 3, 5]);
    });
  });
});



describe('Fibonacci', () => {
  describe('numeroFib', () => {
    test('should throw an error', () => {
      expect(() => fibonacci.numeroFib(-1)).toThrow();
    });
    test('should return the nth number from the fibonacci sequence', () => {
      expect(fibonacci.numeroFib(1)).toBe(0);
    });
    test.each([
      [3, 2],
      [5, 5],
      [10, 55],
      [16, 987],
    ])(
      'should return the nth number from the fibonacci sequence',
      (a, expected) => {
        expect(fibonacci.numeroFib(a)).toBe(expected);
      },
    );
  });

  describe('listaHasta', () => {
    test('should throw an error', () => {
      expect(() => fibonacci.listaHasta(-1)).toThrow();
    });

    test('should return the list from f1 to the nth number', () => {
      expect(fibonacci.listaHasta(1)).toEqual([0]);
    });

    test('should return the list from f1 to the nth number', () => {
      expect(fibonacci.listaHasta(5)).toEqual([0, 1, 1, 2, 3, 5]);
    });

    test('should return the list from f1 to the nth number', () => {
      expect(fibonacci.listaHasta(7)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
    });

    test('should return the list from f1 to the nth number', () => {
      expect(fibonacci.listaHasta(11)).toEqual([
        0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89,
      ]);
    });

    test('the length of the returned array should be the same as the input + 1', () => {
      expect(fibonacci.listaHasta(11).length).toBe(12);
    });
  });

  describe('sumaFib', () => {
    test('should throw an error', () => {
      expect(() => fibonacci.sumaFib(-1)).toThrow();
    });
    test('should return the sum of all fibonacci numbers until n', () => {
      expect(fibonacci.sumaFib(1)).toBe(0);
    });

    test('should return the sum of all fibonacci numbers until n', () => {
      expect(fibonacci.sumaFib(11)).toBe(232);
    });
  });

  describe('productoFib', () => {
    test('should throw an error', () => {
      expect(() => fibonacci.productoFib(-1)).toThrow();
    });
    test('should return the product of all fibonacci numbers until n', () => {
      expect(fibonacci.productoFib(2)).toBe(1);
    });

    test('should return the product of all fibonacci numbers until n', () => {
      expect(fibonacci.productoFib(11)).toBe(10904493600);
    });
  });

  describe('formaParteFib', () => {
    test('should throw an error', () => {
      expect(() => fibonacci.formaParteFib(-1)).toThrow();
    });
    /* 
    test('should return if n is part of fibonacci', () => {
      expect(fibonacci.formaParteFib(0)).toBeTruthy();
    });
    */
    test('should return if n is part of fibonacci', () => {
      expect(fibonacci.formaParteFib(21)).toBeTruthy();
    });
    test('should return if n is part of fibonacci', () => {
      expect(fibonacci.formaParteFib(4)).toBeFalsy();
    });
  });
});
