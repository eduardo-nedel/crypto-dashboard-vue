export const formatCurrency = ({ value, currency = 'USD', locale = 'en-US', ...props }) => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    ...props
  }).format(value)
}
