export const formatNumber = ({ value, locale = 'en-US', ...props }) => {
  return new Intl.NumberFormat(locale, {
    ...props
  }).format(value)
}
