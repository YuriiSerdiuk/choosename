import React from 'react';
import {observer} from "mobx-react-lite";

import namesList from '../../store/names'



import './namesComponent.css';
import MediaCard from "../card/card";

export const NamesComponent = observer((props) => {

    return <div className='names-component'>
        <span>Favorites : {namesList.favoriteNames.length}</span>
        <div className='card'>
            <MediaCard/>
        </div>
    </div>;
})