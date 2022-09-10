const Services = {
  getUserData: function (id) {
    return fetch(`http://localhost:3000/user/${id}`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        return data
      })
  },
  getUserActivity: function (id) {
    return fetch(`http://localhost:3000/user/${id}/activity`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        // console.log(data)
        return data
      })
  },
  getUserPerformance: function (id) {
    return fetch(`http://localhost:3000/user/${id}/performance`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        // console.log(data.data)
        return data
      })
  },
  getUserSession: function (id) {
    return fetch(`http://localhost:3000/user/${id}/average-sessions`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        // console.log(data)
        return data
      })
  },
}

export default Services
