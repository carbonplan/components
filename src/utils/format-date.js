const formatDate = (date) => {
  let d = new Date(date.replace(/-/g, '/'))
  let month = d.toLocaleString('default', { month: 'short' })
  let day = String(d.getDay()).padStart(2, '0')
  let year = d.getFullYear()
  return month + ' ' + day + ' ' + year
}

export default formatDate
