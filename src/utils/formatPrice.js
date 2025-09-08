export const formatPrice = (price) => {
  const num = Number(price) || 0;
  const amount = new Intl.NumberFormat("de-DE", {
    minimumFractionDigits: 2,
    // maximumFractionDigits:2,
    useGrouping: false,
  }).format(num);
  return `€${amount}`;
};
