export const getFormattedDate = (date: Date): string => {
    const now = new Date();

    if (date.getDay() === now.getDay() && date.getMonth() === now.getMonth() &&
        date.getFullYear() === now.getFullYear()) {
        return "Today";
    }

    const yesterday = new Date(now.getDate() - 1);
    if (date.getDay() === yesterday.getDay() && date.getMonth() === yesterday.getMonth() &&
        date.getFullYear() === yesterday.getFullYear()) {
        return "Yesterday"
    }

    return new Intl.DateTimeFormat('en-GB', {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    }).format(date)
}
