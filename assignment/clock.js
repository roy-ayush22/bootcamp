const displayTime = () => {
    let time = new Date()
    console.log(time.toLocaleTimeString())
}

setInterval(displayTime, 1000)
