var {removeMidItemFromArray } = require('../questions/removeMidItemFromArray.js');

describe('移除一个数组中位于中间的元素', function(){
    it('检查未给定数组的情况', function(){
        var result = removeMidItemFromArray();
        expect(result).toBe(undefined);
    });
});