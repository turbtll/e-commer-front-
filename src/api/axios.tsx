import Axios from 'axios'

const axiosProd = Axios.create({
    baseURL:"https://e-commer-t.onrender.com/"

})

export default axiosProd