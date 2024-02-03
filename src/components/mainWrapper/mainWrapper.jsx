import React, { useEffect } from 'react';
import { observer } from "mobx-react-lite";
import { useNavigate } from 'react-router-dom';

import { NamesComponent } from "../namesComponent/namesComponent";
// import { Filters } from "../filters/filters";
import { MenuAppBar } from "../app-bar/app-bar";
import MyApp from '../snackbar/Snackbar'

import './mainWrapper.css';

export const MainWrapper = observer(() => {
    const navigate = useNavigate();

    // useEffect(() => {
    //     setTimeout(() => {
    //         navigate('/qwe123')
    //     }, 5000);
    // }, []);


    return <div className='main-wrapper'>
        {/*<Filters/>*/}
        <MyApp />
        <MenuAppBar />
        <NamesComponent />
    </div>;
})