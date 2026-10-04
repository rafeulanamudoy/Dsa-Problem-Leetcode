function timeConversion(s) {
    // Write your code here
    //console.log(s)
    const postion = s.search("PM")

    // console.log(postion)

    if (postion !== -1) {
        const time = s.split("PM")
        let timeFormat;

        const hour = parseInt(time[0].split(":"))
        if (hour === 12) {

            timeFormat = 12;
        }
        else {
            timeFormat = hour + 12
        }

        console.log(timeFormat)
    }
}

timeConversion("12:05:45PM")