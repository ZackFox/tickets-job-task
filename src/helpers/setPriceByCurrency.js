export default (price, activeCurrency) => {
  switch (activeCurrency.name) {
    case "usd":
      return `$${(price / activeCurrency.value).toFixed(0)}`;
    case "eur":
      return `\u20AC${(price / activeCurrency.value).toFixed(0)}`;
    default:
      return `${price}\u20bd`;
  }
};
