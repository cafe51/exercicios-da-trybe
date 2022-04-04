const uppercase = (str, callback) => {
    // setTimeout(() => {
      callback(str.toUpperCase());
    // }, 500);
};




const printWord = (word) => console.log(word)
// const printWord = (word) => word;

uppercase('PinHa', printWord);

// uppercase('PinHa', (word) = (word) => console.log(word));
