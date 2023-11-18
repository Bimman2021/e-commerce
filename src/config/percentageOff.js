function calculateDiscountPercentage(initialPrice, newPrice) {
  return Math.round(((initialPrice - newPrice) / initialPrice) * 100);
}
