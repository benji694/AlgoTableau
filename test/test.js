import assert from 'assert';


import { minimum } from '../js/app.js';
describe('Array', function () {
  describe('minimum()', function () {
    it('should return -8', function () {
        assert.equal(minimum([-2, -5, -8, -1]), -8);
    });
    it('should return 2', function () {
        assert.equal(minimum([2, 5, 8, 4]), 2);
    });
    it('should return -2', function () {
        assert.equal(minimum([-2, 5, 0, 8, 1]), -2);
    });
    it('should return undifined', function () {
        assert.equal(minimum([]), undefined);
    });
  });
});

import { moyenne } from '../js/app.js';
describe('Array', function () {
    describe('moyenne()', function () {
      it('should return -4', function () {
          assert.equal(moyenne([-2, -5, -8, -1]), -4);
      });
      it('should return 3.5', function () {
          assert.equal(moyenne([2, 5, 8, 4, -2, 4]), 3.5);
      });
      it('should return 4', function () {
          assert.equal(moyenne([-2, 10]), 4);
      });
      it('should return Nan', function () {
          assert.equal(moyenne([]), NaN);
      });
    });
  });

import { withoutString } from '../js/app.js';
describe('Array', function () {
    describe('withoutString()', function () {
      it('should return [-2, -5, -1]', function () {
          assert.deepEqual(withoutString([-2, -5, "hello", -1]), [-2, -5, -1]);
      });
      it('should return [2, 8, 4, 4]', function () {
          assert.deepEqual(withoutString([2, 'hello', 8, 4, 'bonjour', 4]), [2, 8, 4, 4]);
      });
      it('should return [10]', function () {
          assert.deepEqual(withoutString(['hey', 10]), [10]);
      });
      it('should return []', function () {
          assert.deepEqual(withoutString([]), []);
      });
    });
  });

import { pairImpair } from '../js/app.js';
describe('Array', function () {
    describe('pairImpair()', function () {
      it('should return [[-5, -3],[-10, -8]]', function () {
          assert.deepEqual(pairImpair([-5, -10, -8, -3]), [[-5, -3],[-10, -8]]);
      });
      it('should return [[7, 9],[2, 4, 8]]', function () {
          assert.deepEqual(pairImpair([2, 4, 7, 9, 8]), [[7, 9],[2, 4, 8]]);
      });
      it('should return [[], [8, 10]]', function () {
          assert.deepEqual(pairImpair([8, 10]), [[], [8, 10]]);
      });
      it('should return [[],[]]', function () {
          assert.deepEqual(pairImpair([]), [[],[]]);
      });
    });
  });

  