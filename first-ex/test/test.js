var assert = require('assert');

describe('Array', function() {
  describe('#filter()', function() {
    it('should return unique array [1,2,3,4]', function() {
      [...new Set([1, 2, 3, 4, 4, 2, 1, 3])], [1, 2, 3, 4];
    });
  });
  describe('#filter()', function() {
    it('should return unique array [1,2,3,4,9]', function() {
      [...new Set([1,2,3,3,4,4,9,9])], [1, 2, 3, 4, 9];
    });
  });
  describe('#filter()', function() {
    it('should return unique array [1,2]', function() {
      [...new Set([1,2,2])], [1, 2];
    });
  });
});