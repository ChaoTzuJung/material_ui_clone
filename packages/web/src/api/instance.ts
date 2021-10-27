import axios from 'axios';

// baes api url
export const baseInstance = () => {
  return axios.create({
    baseURL: 'https://xxx.com',
    headers: {
      'Content-Type': 'application/json'
      // 這裡可以自定義 header 參數
    },
    params: {}
  });
};
