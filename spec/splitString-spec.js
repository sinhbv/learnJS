var { splitString } = require('../questions/splitString.js');

describe('给定一个有分号（;）分隔的字符串，将其按照分号拆分为一个数组', function () {
    it('未给定字符串时，应该当返回空数组', function () {
        var result = splitString();
        expect(result).toEqual([]);
    });
    it('给定字符串中未含有分隔符时，应该返回包含给定字符串的数组', function () {
        var result = splitString('12');
        expect(result).toEqual(['12']);
    });
    it('应该准确分隔给定字符串', function () {
        var result = splitString('12;34;56');
        expect(result).toEqual(['12', '34', '56']);
    });
    it('给定字符串结尾为分隔符的，应该当只返回前边的分隔内容', function () {
        var result = splitString('57a;3;456;');
        expect(result).toEqual(['57a', '3', '456']);
    });
});