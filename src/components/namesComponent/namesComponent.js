import React, {useEffect} from 'react';
import {observer} from "mobx-react-lite";
import Button from '@mui/material/Button';

import Api from '../../api';

import namesList from '../../store/names'
import MediaCard from "../card/card";
// import { nameListId } from '../../constants/constants';

import './namesComponent.css';

export const NamesComponent = observer((props) => {

  // useEffect(async () => {

  //   // todo make request get list data
  //   // todo add functionality update list names
  //   // check correct working

  //   const data = await Api.getList(nameListId.GLOBAL);

  //   console.log('inside namesComponent', data);
  // }, []);

  return <div style={{marginBottom: '15%'}}>
    {/*<div>*/}
    {/*  <Button*/}
    {/*    variant="outlined"*/}
    {/*    onClick={async () => {*/}
    {/*      console.log('create new list');*/}

    {/*      await Api.createNewList({*/}
    {/*        id: 'GLOBAL',*/}
    {/*        children: {*/}
    {/*          male: [{name: 'Roma'}, {name: 'Din'}, {name: 'Nick'}],*/}
    {/*          female: [{name: 'Nika'}, {name: 'Vila'}, {name: 'Dina'}]*/}
    {/*        },*/}
    {/*      });*/}
    {/*    }}*/}
    {/*  >Create new list</Button>*/}
    {/*</div>*/}
    <div>Favorites : {namesList.favoriteNames.length}</div>
    <div>names : {namesList.defaultNamesList.length}</div>
    <div className='names-component'>
      <div className='card'>
        <MediaCard/>
      </div>
    </div>
  </div>;
})