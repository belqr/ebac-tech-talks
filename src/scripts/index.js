AOS.init();

const dateEvent = new Date('May 16, 2024 19:00:00')
const timeStampEvent = dateEvent.getTime()

const counterHours = setInterval(function() {
  const now = new Date()
  const timeStampNow = now.getTime()
  const distanceEvent = timeStampEvent - timeStampNow

  const day = 1000 * 60 * 60 * 24
  const hour = 1000 * 60 * 60
  const minute = 1000 * 60

  const dayEvent = Math.floor(distanceEvent / day)
  const hoursEvent = Math.floor((distanceEvent % day) / hour)
  const minutesEvent = Math.floor((distanceEvent % hour) / minute)
  const secondsEvent = Math.floor((distanceEvent % minute) / 1000)

  document.getElementById('counter').innerHTML = 
    `${dayEvent}d ${hoursEvent}h ${minutesEvent}m ${secondsEvent}s`

  if (distanceEvent < 0) {
    clearInterval(counterHours)
    document.getElementById('counter').innerHTML = 'Evento expirado!'
  }
}, 1000)