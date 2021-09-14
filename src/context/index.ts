/*
 * @Author: Kanata You 
 * @Date: 2021-09-14 22:14:49 
 * @Last Modified by: Kanata You
 * @Last Modified time: 2021-09-14 23:43:49
 */

import { createContext } from '../hibou/core';
import { Daigakuin } from '../data/types';
import api from '../data/api';

type ContextState = {
  daigakuin: Daigakuin[];
};

const initialState: ContextState = {
  daigakuin: []
};

const context = createContext({
  init: initialState,
  asyncActions: {
    getDaigakuinList: async () => {
      const list = await api.getDaigakuinList();
      return {
        daigakuin: list
      };
    }
  }
});

context.actions.getDaigakuinList();

export default context;
