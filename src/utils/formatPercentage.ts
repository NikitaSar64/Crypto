const formatPercentage = (num: number, numAfterDot: number): string => {
  return `${num.toFixed(numAfterDot)}%`;
};

export default formatPercentage;
