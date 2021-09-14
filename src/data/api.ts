/*
 * @Author: Kanata You 
 * @Date: 2021-09-14 22:19:08 
 * @Last Modified by: Kanata You
 * @Last Modified time: 2021-09-14 22:46:52
 */

import daigakuinList from './daigakuin';
import { Daigakuin } from './types';

const api = {
  getDaigakuinList: async (): Promise<Daigakuin[]> => {
    return daigakuinList;
  }
};

export default api;
