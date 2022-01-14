import axios from 'axios'

const COURSE_API_URL = 'http://localhost:8080'

//onst INSTRUCTOR_API_URL = `${COURSE_API_URL}`

class flightdetails {

    retrieveflights(name) {
        return axios.get(`${COURSE_API_URL}/fdetails/${name}`);
    }
}
export default new flightdetails();
