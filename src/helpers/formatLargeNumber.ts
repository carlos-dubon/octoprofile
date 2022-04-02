import tc from "thousands-counter";

const formatLargeNumber = (n: number): string => {
  return tc(n);
};

export { formatLargeNumber };
