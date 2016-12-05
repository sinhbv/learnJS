var { cutString } = require('../questions/cutString.js');

describe('将给定的字符串的首字母和末字母去掉', function(){
    it('检查未给定参数的情况', function(){
        var result = cutString();
        expect(result).toBe(undefined);
    });
    it('检查只传传入一个字母的情况', function(){
        var result = cutString('a');
        expect(result).toBe('');
    });
    it('检查字符串中有两个字母的情况', function(){
        var result = cutString('ab');
        expect(result).toBe('');
    });
    it('检查字符串中有三个字母的情况', function(){
        var result = cutString('abc');
        expect(result).toBe('b');
    });
});