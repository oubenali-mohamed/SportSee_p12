const url = 'http://localhost:3000/user/'
const Services = {
  /**
   *
   * @param {id} id  id  of the user
   * @returns {data} return object data in format JSON
   */
  getUserData: function (id) {
    return fetch(url + `${id}`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        return data
      })
  },
  /**
   *
   * @param {id} id id of the user
   * @returns {data} return object data in format JSON
   */
  getUserActivity: function (id) {
    return fetch(url + `${id}/activity`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        return data
      })
  },
  /**
   *
   * @param {id} id  id of the user
   * @returns {data} return object data in format JSON
   */
  getUserPerformance: function (id) {
    return fetch(url + `${id}/performance`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        return data
      })
  },
  /**
   *
   * @param {id} id  id of the user
   * @returns {data} return object data in format JSON
   */
  getUserSession: function (id) {
    return fetch(url + `${id}/average-sessions`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        return data
      })
  },
}

export default Services
