import axios from 'axios';

const addDesc = (desc, id) => {
    return axios.put('http://localhost:3032/api/animals/'+desc+'&'+id).then(res => {
        return res.data
    }).catch(error => {
        console.log(error)
    })
}

export default addDesc