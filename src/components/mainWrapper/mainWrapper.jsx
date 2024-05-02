import React, { useEffect } from 'react';
import { observer } from "mobx-react-lite";
import { useSnackbar } from 'notistack';

import { NamesComponent } from "../namesComponent/namesComponent";
// import { Filters } from "../filters/filters";
import { MenuAppBar } from "../app-bar/app-bar";
import MyApp from '../snackbar/Snackbar'

import authorization from '../../store/authorization';

import './mainWrapper.css';

export const MainWrapper = observer(() => {
    const { enqueueSnackbar } = useSnackbar();

    // React.useEffect(() => {
    //     setTimeout(() => {
    //         console.log('This is a success message!')
    //         enqueueSnackbar('1111   This is a success message!', { variant: 'success' });
    //     }, 5000);
    //     setTimeout(() => {
    //         console.log('This is a success message!')
    //         enqueueSnackbar('This is a success message!', { variant: 'success' });
    //     }, 7000);
    //     setTimeout(() => {
    //         console.log('This is a success message!')
    //         enqueueSnackbar('This is a success message!', { variant: 'success' });
    //     }, 10000);
    // }, []);

    useEffect(() => {
        const { isLoggedIn } = authorization;

        isLoggedIn && enqueueSnackbar('Login success', { variant: 'success' });
        // eslint-disable-next-line
    }, [authorization]);

    return <div className='main-wrapper'>
        {/*<Filters/>*/}
        <MyApp />
        <MenuAppBar />
        <NamesComponent />
    </div>;
})