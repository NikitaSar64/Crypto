const formatPercentage = (num: number | undefined, numAfterDot: number): string => {
  return `${num?.toFixed(numAfterDot)}%`;
};

export default formatPercentage;
