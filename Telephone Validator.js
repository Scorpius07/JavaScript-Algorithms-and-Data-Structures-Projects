function telephoneCheck(str) {
  const d = /\d/g;
  const l = str.match(d).length;
  const x = /^(\([0-9]{3}\)*|[0-9]{3}-*)[0-9]{3}-*[0-9]{4}$/;
  const y = /^1(\([0-9]{3}\)*|[0-9]{3}-*)[0-9]{3}-*[0-9]{4}$/;
  const string = str.split(' ').join('');

  if (l > 11) {
    return false;
  } else if (l > 10 && str.startsWith(1)) {
    return y.test(string);
  } else {
    return x.test(string);
  }
}
