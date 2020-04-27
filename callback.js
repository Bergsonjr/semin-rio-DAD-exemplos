const raiz = (number) => {
  return number * number;
};

const callbackExample = (callback, number) => {
  console.log(callback, "callback");
  return callback(number);
};

module.exports = { callbackExample, raiz };
/* 
    Uma função callback é uma função passada a outra função como argumento, 
    que é então invocado dentro da função externa para completar algum tipo de rotina ou ação.
*/
