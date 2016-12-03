var {vowelsCount} = require('../questions/vowelsCount.js');

describe('统计元音字母', function(){
    it('null值返回', function(){
        var count = vowelsCount(null);
        expect(count).toBe(0);
    });
    it('不含元音字母的情况', function(){
        var count = vowelsCount('b');
        expect(count).toBe(0);
    });
    it('含有元音字母a的情况', function(){
        var count = vowelsCount('a');
        expect(count).toBe(1);
    });
    it('含有元音字母e的情况', function(){
        var count = vowelsCount('e');
        expect(count).toBe(1);
    });
    it('含有元音字母i的情况', function(){
        var count = vowelsCount('i');
        expect(count).toBe(1);
    });
    it('含有元音字母o的情况', function(){
        var count = vowelsCount('o');
        expect(count).toBe(1);
    });
    it('含有元音字母u的情况', function(){
        var count = vowelsCount('u');
        expect(count).toBe(1);
    });
    it('长字符串测试abcdefg', function(){
        var count = vowelsCount('abcdefg');
        expect(count).toBe(2);
    });
    it('长字符串测试aceioudefzwkjr', function(){
        var count = vowelsCount('aceioudefzwkjr');
        expect(count).toBe(6);
    });
    
});