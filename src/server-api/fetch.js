import axios from 'axios'
import qs from 'qs';

export default {
    axiosGet: (url, params) => {
        return axios({
            method: 'get',
            url: url,
            params: params,
            headers: {},
        }).then( res => {
            if(res.data.code == '000') {
                return res.data.data;
            };
        }).catch( res => console.log(`get请求 - ${res.request.responseURL} 发生错误`) );
    },

    axiosPost: (url, params) => {
        return axios({
            method: 'post',
            url: url,
            data: JSON.stringify(params),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then( res => {
            if (res.data.code == '000') {
                return res.data.data;
            };
        }).catch( res => console.log(`post请求 - ${res.request.responseURL} 发生错误`) );
    },

    axiosFormData: (url, params) => {
        return axios({
            method: 'post',
            url: url,
            data: params,
            headers: {
                "Content-Type": "multipart/form-data"
            },
        }).then( res => {
            if(res.data.code == '000') {
                return res.data.data;
            };
        }).catch( res => console.log(`formdata请求 - ${res.request.responseURL} 发生错误`) );
    },
}