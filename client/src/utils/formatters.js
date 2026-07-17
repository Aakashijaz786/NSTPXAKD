export function formatNumber(n) {
  return new Intl.NumberFormat('en-US').format(n);
}
