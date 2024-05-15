import React from 'react';
import {observer} from "mobx-react-lite";
// import Button from '@mui/material/Button';
// import {useSnackbar} from "notistack";

// import Api from '../../api';

import MediaCard from "../card/card";

import namesList from '../../store/names'
// import gender from '../../store/gender';

import './namesComponent.css';

export const NamesComponent = observer(() => {
  // const {enqueueSnackbar} = useSnackbar();

  return <div style={{marginBottom: '15%'}}>
    {/*<div>*/}
    {/*  <Button*/}
    {/*    variant="outlined"*/}
    {/*    onClick={async () => {*/}

    {/*      // await Api.createNewList({*/}
    {/*      //   id: 'GLOBAL',*/}
    {/*      //   children: {*/}
    {/*      //     male: [{name: 'Roma'}, {name: 'Din'}, {name: 'Nick'}],*/}
    {/*      //     female: [{name: 'Nika'}, {name: 'Vila'}, {name: 'Dina'}]*/}
    {/*      //   },*/}
    {/*      // });*/}

    {/*      // await Api.addNameToList({*/}
    {/*      //   id: 'GLOBAL',*/}
    {/*      //   gender: gender.genderGroup,*/}
    {/*      //   name:'Ezra'*/}
    {/*      // }).then((res)=>{*/}
    {/*      //   // console.log('res', res.data.message);*/}
    {/*      //   enqueueSnackbar(res.data.message, {variant: 'success'});*/}
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