const assert = require('assert');
const expensesTwo = require('./one');
const expensesThree = require('./two');

describe('Part One expenseListTwo ', () => {
    it('should return 1010100 when input contains 1110 and 910', () => {
      let input = [1983, 387, 1193, 1110, 910];
      assert.deepStrictEqual(expensesTwo(input), 1010100);
    });
});

describe('Part Two expenseListThree ', () => {
    it('should return 20000000 when input contains 1000, 1000 and 20', () => {
      let input = [1289, 1092, 1000, 1000, 20];
      assert.deepStrictEqual(expensesThree(input), 20000000);
    });
});