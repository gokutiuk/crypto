
describe ("getSymbols", function () {

    // it("Проверка что возвращается массив ", function ()
    // {
    //     assert.deepEqual(getSymbols(10,'abcd'),arrLetter =["a","b","c","d"]);
    // });
    it("Что первое значение в функции должно быть === number ", function ()
    {
        assert.deepEqual(getSymbols("12",),undefined);

    });

});
describe ("isBigLetter", function () {
    it("Проверка что на символ большого регистра функция выдает true", function ()
    {
        assert.equal(isBigLetter("A"),true);
    });
    it("Проверка на последнюю букву алфавита большо регистра", function ()
    {
        assert.equal(isBigLetter("Z"),true);
    });
    it("Проверка на букву низкого регистра", function ()
    {
        assert.equal(isBigLetter("s"),false);
    });
    it("Проверка на букву верхнего регистра из русского алфавита", function ()
    {
        assert.equal(isBigLetter("Ы"),false);
    });
});
describe ("isSmallLetter", function () {
    it("Проверка что на символ низкого регистра функция выдает true", function ()
    {
        assert.equal(isSmallLetter("a"),true);
    });
    it("Проверка на последнюю букву алфавита нижнего регистра", function ()
    {
        assert.equal(isSmallLetter("z"),true);
    });
    it("Проверка на букву верхнего регистра", function ()
    {
        assert.equal(isSmallLetter("S"),false);
    });
    it("Проверка на букву верхнего регистра из русского алфавита", function ()
    {
        assert.equal(isSmallLetter("Ы"),false);
    });
    it("Проверка на букву нижнего регистра из русского алфавита", function ()
    {
        assert.equal(isSmallLetter("а"),false);
    });
});

describe ("makeSmallLetters", function () {
    it("Проверка что функция возвращает массив ", function ()
    {
       var a = makeSmallLetters();

        assert.deepEqual(makeSmallLetters(),a);
    });
    it("Проверка проверка последней буквы алфавита нижнего регистра", function ()
    {
        var a = makeSmallLetters();

        assert.equal(a[25],"z");
    });
    it("Проверка проверка буквы e только ", function ()
    {
        var a = makeSmallLetters();

        assert.equal(a[4],"e");
    });
    it("Проверка проверка что в массиве только 26 символов ", function ()
    {
        var a = makeSmallLetters();

        assert.equal(a[26],undefined);
    });
    it("Проверка проверка что буквы только с анг алфавита (ввел русскую букву а) ", function ()
    {
        var a = makeSmallLetters();

        assert.notEqual(a[0],"а");
    });
    it("Проверка проверка что буквы только с анг алфавита (ввел русскую букву е) ", function ()
    {
        var a = makeSmallLetters();

        assert.notEqual(a[4],"е");
    });

});

describe ("makeBigLetters", function () {
    it("Проверка что функция возвращает массив ", function ()
    {
        var a = makeBigLetters();

        assert.deepEqual(makeBigLetters(),a);
    });
    it("Проверка проверка последней буквы алфавита верхнего регистра", function ()
    {
        var a = makeBigLetters();

        assert.equal(a[25],"Z");
    });
    it("Проверка проверка буквы b алфавита верхнего регистра", function ()
    {
        var a = makeBigLetters();

        assert.equal(a[1],"B");
    });
    it("Проверка проверка что в массиве только 26 символов ", function ()
    {
        var a = makeSmallLetters();

        assert.equal(a[26],undefined);
    });
    it("Проверка что буквы только из анг алфавита А != (А русского алфавита)", function ()
    {
        var a = makeSmallLetters();

        assert.notEqual(a[0],"а");
    });
    it("Проверка что буквы только из анг алфавита B != (В русского алфавита) ", function ()
    {
        var a = makeSmallLetters();

        assert.notEqual(a[2],"В");
    });

});
describe ("encryptionSmallLetter", function () {
    it("Проверка что на цифра 1 соответствует букве b анг алфавита нижнего регистра", function ()
    {
        assert.equal(encryptionSmallLetter(1),"b");
    });
    it("Проверка что на цифра 0 соответствует букве a анг алфавита нижнего регистра", function ()
    {
        assert.equal(encryptionSmallLetter(0),"a");
    });
    it("Проверка что на цифра 25 соответствует букве z анг алфавита нижнего регистра", function ()
    {
        assert.equal(encryptionSmallLetter(25),"z");
    });
    it("Проверка что алфавит состоит из 26 букв", function ()
    {
        assert.equal(encryptionSmallLetter(26),undefined);
    });
    it("Проверка что алфавит только анг включает в себя анг буквы (ввожу как ожидание букву рус с", function ()
    {
        assert.notEqual(encryptionSmallLetter(2),"с");
    });

});
describe ("encryptionBigLetter", function () {
    it("Проверка что на цифра 1 соответствует букве B анг алфавита верхнего регистра", function ()
    {
        assert.equal(encryptionBigLetter(1),"B");
    });
    it("Проверка что на цифра 0 соответствует букве A анг алфавита верхнего регистра", function ()
    {
        assert.equal(encryptionBigLetter(0),"A");
    });
    it("Проверка что на цифра 25 соответствует букве Z анг алфавита верхнего регистра", function ()
    {
        assert.equal(encryptionBigLetter(25),"Z");
    });
    it("Проверка что алфавит состоит из 26 букв", function ()
    {
        assert.equal(encryptionBigLetter(26),undefined);
    });
    it("Проверка что алфавит только анг включает в себя анг буквы (ввожу как ожидание букву рус с", function ()
    {
        assert.notEqual(encryptionBigLetter(2),"С");
    });

});


describe ("encryption", function () {
    it("Проверка что функция ширует правильно маленькие буквы анг алфавита", function ()
    {
        value = 3;
        assert.equal(encryption("abcd"),"defg");
    });
    it("Проверка что функция ширует правильно большие буквы анг алфавита", function ()
    {
        value = 1;
        assert.equal(encryption("ZXY"),"AYZ");
    });
    it("Проверка что функция ширует правильно с символамы какие не входят в анг алфавит", function ()
    {
        value = 1;
        assert.equal(encryption("Z%Y3Zю"),"A%Z3Aю");
    });
    it("Проверка что функция не ширует русские буквы", function ()
    {
        value = 1;
        assert.equal(encryption("фывавы"),"фывавы");
    });
    it("Проверка что функция  ширует буквы разного регистра ", function ()
    {
        value = 5;
        assert.equal(encryption("aZbZ"),"fEgE");
    });


});

