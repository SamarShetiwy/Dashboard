import dayjs from 'dayjs'

export const useDateFormat = (date, format = 'YYYY-MM-DD') => {
  const parsedDate = dayjs(date)
  if (!parsedDate.isValid()) {
    return 'invaild date'
  }
  return parsedDate.format(format)
}