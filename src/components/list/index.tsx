/*
 * @Author: Kanata You 
 * @Date: 2021-09-14 22:52:16 
 * @Last Modified by: Kanata You
 * @Last Modified time: 2021-09-15 01:38:42
 */

import React, { useEffect, useState } from 'react';
import context from '../../context';
import { Daigakuin } from '../../data/types';

import './index.scss';

const DaigakuinItem: React.FC<Daigakuin> = ({
  name,
  nameEN,
  type,
  isDesignated,
  location,
  logo,
  motto
}) => {
  return (
    <article className="list-item">
      <div className="list-item-body">
        <div className="list-item-logo">
          {logo && (
            <img
              alt={nameEN}
              aria-label={name}
              src={logo}
            />
          )}
        </div>
        <div className="list-item-detail">
          <div className="list-item-title">
            <label className="list-item-title_jp">
              {name}
              <span className="list-item-title_label">
                {isDesignated ? '指定国立大学' : type}
              </span>
            </label>
            <label className="list-item-title_en">
              {nameEN}
            </label>
          </div>
          <div className="list-item-location">
            {[location.prefecture, location.district, location.town].filter(Boolean).join('　')}
          </div>
          {motto && (
            <div className="list-item-motto">
              <p>{`ーー ${motto}`}</p>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

interface ListProps {
  pageSize?: number;
}

const List: React.FC<ListProps> = ({
  pageSize = 20
}) => {
  const [data, setData] = useState<Daigakuin[]>([]);
  useEffect(() => {
    const listener = () => {
      setData(context.state.daigakuin);
    };
    context.subscribe(listener, [s => s.daigakuin]);
    return () => {
      context.unsubscribe(listener);
    };
  }, []);
  const [pageNum, setPageNum] = useState(0);
  const page = data.slice(pageNum * pageSize, (pageNum + 1) * pageSize);
  return (
    <div className="list">
      {
        page.map(item => (
          <DaigakuinItem
            key={item.nameEN}
            {...item}
          />
        ))
      }
    </div>
  );
};

export default List;
