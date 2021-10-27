import axios, { AxiosResponse } from 'axios';

import { baseInstance } from '@chips/web/api/instance';
import { CurrentUserI } from '@chips/web/redux/slice/userSlice';

// api 有兩種寫法
export default {
  async method1(): Promise<AxiosResponse<CurrentUserI>> {
    return await axios.request({
      method: 'get',
      url: 'https://xxx/xxx/xxx'
    });
  },

  async method2(data: string): Promise<AxiosResponse<CurrentUserI>> {
    return await baseInstance()
      .get('/xxx', {
        data: data
      })
      .then(res => {
        return res;
      })
      .catch(err => {
        throw new Error(err);
      });
  }
};
