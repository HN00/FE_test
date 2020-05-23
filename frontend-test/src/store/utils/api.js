import axios from 'axios';
import {url} from './url';
export default function callApi( endpoint, method, body ) {
    return axios({
        method: method ? method : "GET",
        url: `${url}/${endpoint}`,
        data: body ? body : "",
    }).catch( err => {
        console.log(err);
    });
}