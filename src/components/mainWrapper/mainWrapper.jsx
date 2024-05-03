import React, { useEffect } from 'react';
import { observer } from "mobx-react-lite";
import { useSnackbar } from 'notistack';

import { NamesComponent } from "../namesComponent/namesComponent";
import { MenuAppBar } from "../app-bar/app-bar";
import MyApp from '../snackbar/Snackbar'

import authorization from '../../store/authorization';

import './mainWrapper.css';

export const MainWrapper = observer(() => {
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        const { isLoggedIn } = authorization;

        isLoggedIn && enqueueSnackbar('Login success', { variant: 'success' });
        // eslint-disable-next-line
    }, [authorization]);

    return <div className='main-wrapper'>
        <MyApp />
        <MenuAppBar />
        <NamesComponent />
    </div>;
})