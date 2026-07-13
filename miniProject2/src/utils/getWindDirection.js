export function getWindDirection(weatherToday) {
    let windDirection;

    if(weatherToday > 0 && weatherToday <= 45) {
        windDirection = "NE"
    } else if (weatherToday <= 135) {
        windDirection = "SE"
    } else if (weatherToday <= 225) {
        windDirection = "SW"
    } else {
        windDirection = "NW"
    }

    return windDirection;
}