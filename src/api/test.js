import axios from 'axios';

export const getDataList = (params) => {
  return axios.get('/v1/web/getDataList', {params});
}


export async function getData(){
  const {data: newData} = await axios.get('https://dube.io/service/ping',{withCredentials:true});
  return newData;
}   
