function palindrome(str) {
  const x = str.toLowerCase().match( /[^\W_]/g);
  const y = x.join('');
  const z = x.reverse().join('');
  return (y === z) ? true : false;
}

console.log(palindrome("_eye"));
