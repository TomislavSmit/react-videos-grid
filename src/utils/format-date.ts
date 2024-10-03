import dayjs from 'dayjs'

const formatDate = (dateString: string, format = 'DD.MM.YYYY'): string => {
    const date = dayjs(dateString)

    return date.format(format)
}

export { formatDate }
