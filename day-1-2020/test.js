const assert = require('assert');
const expenses = require('./one');

describe('Part One Intcode ', () => {
    it('should return 1010100 when input contains 1110 and 910', () => {
      let input = [1983, 387, 1193, 1110, 910];
      assert.deepStrictEqual(expenses(input), 1010100);
    });
});