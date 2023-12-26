import React from 'react';
import {observer} from "mobx-react-lite";

import namesList from '../../store/names'


import './namesComponent.css';
import MediaCard from "../card/card";

export const NamesComponent = observer((props) => {

  return <div style={{marginBottom: '25%'}}>
    <div>Favorites : {namesList.favoriteNames.length}</div>
    <div>names : {namesList.defaultNamesList.length}</div>
    <div className='names-component'>
      <div className='card'>
        <MediaCard/>
      </div>
    </div>
  </div>;
})