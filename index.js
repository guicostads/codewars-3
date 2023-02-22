function duplicateCount(text) {
  if (text.length === 0) {
    return 0;
  }
  let txt = text.toLowerCase().split("");
  let count = {};
  txt.filter((char) => {
    count[char] = (count[char] || 0) + 1;
  });
  let values = Object.values(count);
  let filtered = values.filter((num) => num > 1);
  return filtered.length;
}
