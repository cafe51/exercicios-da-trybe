const uppercase = (str, callback) => {
    setTimeout(() => {
      callback(str.toUpperCase());
    }, 500);
};

// const printWord = (word) => console.log(word)


test('testa funcao callback', (done) => {
    const expected = 'BANANA'
    const printWord = (word) => {
        expect(word).toBe(expected)
        done();
    }
    uppercase('banana', printWord);
});

