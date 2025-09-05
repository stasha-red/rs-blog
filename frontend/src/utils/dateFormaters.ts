export const formatDate = (dateString: Date, options?: Intl.DateTimeFormatOptions) => {
  const date = new Date(dateString)

  const settings = options || {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }

  return date.toLocaleDateString('ru-RU', settings)
}
