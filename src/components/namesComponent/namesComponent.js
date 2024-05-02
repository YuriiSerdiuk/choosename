import React from 'react';
import {observer} from "mobx-react-lite";
import Button from '@mui/material/Button';

// import Api from '../../api';

import namesList from '../../store/names'
import MediaCard from "../card/card";
// import { nameListId } from '../../constants/constants';

import './namesComponent.css';
// import {GENDER_GROUP} from "../../constants/constants";

export const NamesComponent = observer((props) => {

  return <div style={{marginBottom: '15%'}}>
    {/*<div>*/}
    {/*  <Button*/}
    {/*    variant="outlined"*/}
    {/*    onClick={async () => {*/}
    {/*      console.log('add name to list');*/}

    {/*      // await Api.createNewList({*/}
    {/*      //   id: 'GLOBAL',*/}
    {/*      //   children: {*/}
    {/*      //     male: [{name: 'Roma'}, {name: 'Din'}, {name: 'Nick'}],*/}
    {/*      //     female: [{name: 'Nika'}, {name: 'Vila'}, {name: 'Dina'}]*/}
    {/*      //   },*/}
    {/*      // });*/}

    {/*      // await Api.addNameToList({*/}
    {/*      //   id: 'GLOBAL',*/}
    {/*      //   gender: GENDER_GROUP.female,*/}
    {/*      //   name:'asdf'*/}
    {/*      // }).then((res)=>{*/}
    {/*      //   console.log('res',res);*/}
    {/*      // });*/}

    {/*    }}*/}
    {/*  >Create new list</Button>*/}
    {/*</div>*/}
    <div>Liked Named : {namesList.likedNames.length}</div>
    <div>names : {namesList.defaultNamesList.length}</div>
    <div className='names-component'>
      <div className='card'>
        <MediaCard/>
      </div>
    </div>
  </div>;
})