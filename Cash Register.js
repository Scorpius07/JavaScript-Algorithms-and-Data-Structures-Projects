function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  let x = [];
  const notes = [];
  const values = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100].filter(item => item < change).reverse();
  for (let i = 0; i < cid.length; i++) {
    notes.push(Math.round((cid[i][1] / values[i]) * 100) / 100); // rounding it
  }
  const newNotes = notes.slice(0, values.length);

  for (const [index, newValue] of values.entries()) {
    if ((change / newValue) <= newNotes[index]) {
      const x = newNotes.filter(item => item > 0);
      if ( JSON.stringify(x) === JSON.stringify(Array.of(newNotes[index])) ) {
        return {status: "CLOSED", change: cid}
      }
    }
  }

  cid = cid.slice(0, values.length).reverse();
  for (const [index, currency] of cid.entries()) {

    if (change > currency[1]) {
      x.push(currency);
      change = Math.round((change - currency[1]) * 100) / 100;
    } else {
      const z = (Math.floor(change / values[index])) * values[index];
      const newCurrency = [currency[0], z];

      if (!z) {
        continue;
      }

      x.push(newCurrency);
      change = Math.round((change - z) * 100) / 100;
    }
    
    if (!change) {
      return {status: "OPEN", change: x};
    }
  }

  return {status: "INSUFFICIENT_FUNDS", change: []};
}
