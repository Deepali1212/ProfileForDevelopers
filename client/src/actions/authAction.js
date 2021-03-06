import {GET_ERRORS} from './types'
import axios from 'axios';
//register user
export const registeruser = userData => dispatch => {
   axios.post('/api/users/register',userData)
        .then(res => console.log(res.data))
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );

};