/**
* Altera a string para ter letra maiúscula na primeira letra.
*
* @type {Function}
* @param {String} str - String para ser processada.
* @return {String} String modificada.
*/
export default (str) => (str.charAt(0).toUpperCase() + str.slice(1));
