import React from 'react';
import { observer } from "mobx-react-lite";

import './mainWrapper.css';
import {NamesComponent} from "../namesComponent/namesComponent";
import {Filters} from "../filters/filters";


export const MainWrapper = observer(() => {
    return <div className='main-wrapper'>
        <Filters/>

        <NamesComponent />
    </div>;
})