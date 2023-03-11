const defaultOptions = {
  significantDigits: 2,
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbol: "₦",
};

export const toCurrency = (value: number | undefined) => {
  if (value === undefined) {
    return "";
  }
  let options = defaultOptions;
  let returnValue = value.toFixed(options.significantDigits);

  const [currency, decimal] = returnValue.split(".");
  return `${options.symbol} ${currency.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    options.thousandsSeparator
  )}${options.decimalSeparator}${decimal}`;
};
