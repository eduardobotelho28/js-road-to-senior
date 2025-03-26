const clock = document.querySelector('#clock')

function updateClock () {

    const date = new Date()

    let hour = date.getHours()
    hour = hour < 10 ? "0" + hour : hour

    let minutes = date.getMinutes()
    minutes = minutes < 10 ? "0" + minutes : minutes

    let seconds = date.getSeconds()
    seconds = seconds < 10 ? "0" + seconds : seconds

    const stringClock = hour + ":" + minutes + ":" + seconds
    clock.innerHTML = stringClock

}

const interval = setInterval(updateClock, 1000)