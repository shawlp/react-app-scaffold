import axios from 'axios';

export const getDataList = (params) => {
  return axios.get('/v1/web/getDataList', {params});
}