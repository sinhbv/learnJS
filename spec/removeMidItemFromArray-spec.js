var {removeMidItemFromArray } = require('../questions/removeMidItemFromArray.js');

describe('移除一个数组中位于中间的元素', function(){
    it('检查未给定数组的情况', function(){
        var result = removeMidItemFromArray();
        expect(result).toBe(undefined);
    });
    it('给定一个空数组的情况', function(){
        var result = removeMidItemFromArray([]);
        expect(result).toEqual([]);
    });
    it('给定数组中只有一个元素的情况', function(){
        var result = removeMidItemFromArray([1]);
        expect(result).toEqual([]);
    });
    it('给定数组中有两个元素的情况', function(){
        var result = removeMidItemFromArray([1,2]);
        expect(result).toEqual([]);
    });
    it('给定数组中有三个元素的情况', function(){
        var result = removeMidItemFromArray([1,2,3]);
        expect(result).toEqual([1,3]);
    });
    it('给定数组中有四个元素的情况', function(){
        var result = removeMidItemFromArray([1,2,3,4]);
        expect(result).toEqual([1,4]);
    });
});