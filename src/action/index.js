import axis from 'axios';

const { REACT_APP_ENV, REACT_APP_DEVELOPMENT_URL, REACT_APP_PRODUCTION_URL } = process.env;
const BASE = REACT_APP_ENV === 'development' ? REACT_APP_DEVELOPMENT_URL : REACT_APP_PRODUCTION_URL;

const axios = axis.create({
    withCredentials: true
})

const simpleRequest = ({
    method = 'post', body = {},
    url = '', type = '',
}) => async dispatch => {  
    const config = {
        method,
        url: `${BASE}/${url}`,
        data: body,
        headers: { 
            'Content-Type': 'application/json'
        }
    };
    try {
        const response = await axios(config);
        const payload = response.data;
        dispatch({
            type,
            payload: {
                ...payload,
                success: true
            }
        });
    } catch (err) {
        console.log(err);
        dispatch({
            type,
            payload: {
                success: false,
                ...err?.response?.data
            }
        });
    };
};

const simpleFormRequest = ({
    body = {}, fileKey = 'file', 
    files, url = '', type = '',
    fileName = '',
}) => async dispatch => {
    const formData = new FormData();

    for(const key in body){
        formData.append(key, body[key]);
    }

    for(let i = 0; i < files?.length; i++){ 
        formData.append(fileKey, (files[i]), i + fileName);
    };

    const config = {
        method: 'post',
        url: `${BASE}/${url}`,
        data: formData
    };

    try {
        const response = await axios(config);
        const payload = response.data;
        dispatch({
            type,
            payload: {
                ...payload,
                success: true
            }
        });
    } catch (err) {
        dispatch({
            type,
            payload: {
                success: false,
                ...err?.response?.data
            }
        });
    };
};