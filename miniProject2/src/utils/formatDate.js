export function formatDate(date) {
    const newDate = new Date(date).toLocaleDateString("en-US", {
            weekday: "short",
            day: "numeric",
            month: "short"
    })
    return newDate
}