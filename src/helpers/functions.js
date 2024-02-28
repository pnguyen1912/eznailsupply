export function getDayOfWeek(num) {
  switch (num) {
    case 1:
      return 'Monday';
    case 2:
      return 'Tueday';
    case 3:
      return 'Wednesday';
    case 4:
      return 'Thursday';
    case 5:
      return 'Friday';
    case 6:
      return 'Saturday';
    case 0:
      return 'Sunday';
  }
}

export function getTimeFormat(num) {
  if (num < 1300) {
    let string = num.toString()
    let first = string.slice(0, string.length - 2)
    let second = string.slice(string.length - 2)
    let newTime = first + ':' + second + 'AM'
    return newTime
  } else {
    let newNum = (num - 1200).toString()
    let first = newNum.slice(0, newNum.length - 2)
    let second = newNum.slice(newNum.length - 2)
    let newTime = first + ':' + second + 'PM'
    return newTime
  }
}


export function checkTime(currentTime, openTime, closeTime) {
  if (openTime === '' || openTime === 0 || openTime === '0') {
    return true
  } else {
    if (currentTime > openTime && currentTime < closeTime) {
      return false
    } else {
      return true
    }
  }
}

export function formatPhoneNumber(phoneNumberString) {
  var cleaned = ('' + phoneNumberString).replace(/\D/g, '')
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3]
  }
  return null
}
