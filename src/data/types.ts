/*
 * @Author: Kanata You 
 * @Date: 2021-09-14 22:22:59 
 * @Last Modified by: Kanata You
 * @Last Modified time: 2021-09-15 01:16:36
 */

export type Location = Partial<{
  /** 都道府県 */
  prefecture: string;
  district: string;
  town: string;
}>;

export enum DaigakuinType {
  NATIONAL = '国立',
  PUBLIC = '公立',
  PRIVATE = '私立'
};

export type Daigakuin = {
  id: string;
  type: DaigakuinType;
  isDesignated?: boolean;
  name: string;
  nameEN: string;
  location: Location;
  logo?: string;
  motto?: string;
};
