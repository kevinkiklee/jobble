const fetchJSON = path => (
  fetch(path).then(res =>
    res.json(),
  )
)
export default fetchJSON
