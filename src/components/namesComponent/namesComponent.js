import React from 'react';
import { observer } from "mobx-react-lite";
import Button from '@mui/material/Button';

import Api from '../../api';

import namesList from '../../store/names'
import MediaCard from "../card/card";
import { nameListId } from '../../constants/constants';

import './namesComponent.css';

export const NamesComponent = observer((props) => {

  return <div style={{ marginBottom: '15%' }}>
    {/* <div>
      <Button
        variant="outlined"
        onClick={async () => {
          console.log('creae new listt');

          await Api.CreateNewList({
            id: 'TEST2',
            children: {
              male: ['Roma'],
              female: ['Nika']
            },
          });
        }}
      >Create new list</Button>
    </div> */}
    <div>Favorites : {namesList.favoriteNames.length}</div>
    <div>names : {namesList.defaultNamesList.length}</div>
    <div className='names-component'>
      <div className='card'>
        <MediaCard />
      </div>
    </div>
  </div>;
})