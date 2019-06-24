describe ("getSymbols", function () {
    it("Проверка что возвращается массив ", function ()
    {
        assert.equal(getSymbols(10,'abcd'),arrLetter["a","b","c","d"]);
    });
    it("Что первое значение в функции === number ", function ()
    {
        assert.equal(getSymbols("12",),arrLetter["a","b","c","d"]);

    });

});