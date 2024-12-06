
import axios from '../axios/axios';

export function appstorePageApi(data){
    return axios.post('/api/official/appstore/page', data);
}


export function appstoreGetByIdApi(id){
    return axios.get('/api/official/appstore/get?id='+id);
}