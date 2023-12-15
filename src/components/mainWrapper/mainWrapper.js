import React from 'react';

import './mainWrapper.css';
import {NamesComponent} from "../namesComponent/namesComponent";
import {Filters} from "../filters/filters";
export const MainWrapper = () => {
    return <div className='main-wrapper'>
        <Filters/>
        <NamesComponent/>
    </div>;
}