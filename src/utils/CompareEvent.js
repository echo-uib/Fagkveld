export const comparator = (e1, e2) => {
  const h1 = parseInt(e1.time.substring(0, 2), 10);
  const h2 = parseInt(e2.time.substring(0, 2), 10);
  const m1 = parseInt(e1.time.substring(3, 5), 10);
  const m2 = parseInt(e2.time.substring(3, 5), 10);

  if (h1 !== h2) return h1 - h2;
  else return m1 - m2;
};
