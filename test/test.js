import assert from 'assert';


describe('Int', function () {
  describe('minimum()', function () {
    it('should return -2', function () {
      assert.equal(minimum([-2, -5, -8, -1]), -8);
    });
    it('should return 2', function () {
        assert.equal(minimum([2, 5, 8, 4]), 2);
      });
      it('should return -2', function () {
        assert.equal(minimum([-2, 5, 0, 8, 1]), -2);
      });
      it('should return -2', function () {
        assert.equal(minimum([]), -2);
      });
  });
});