export const getFormattedDateForDivider = (date: Date): string => {
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

export const getFormattedTimeForMessage = (date: Date): string => {
    return new Intl.DateTimeFormat('en-GB', {
        hour: "2-digit",
        minute: "2-digit"
    }).format(date)
}

export const getFormattedDateForLastMessage = (date: Date): string => {
    return new Intl.DateTimeFormat('en-GB', {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    }).format(date)
}
