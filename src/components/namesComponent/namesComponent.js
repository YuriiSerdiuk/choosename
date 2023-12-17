import React from 'react';

import './namesComponent.css';
import namesList from '../../store/names'

export const NamesComponent = (props) => {

    return <div className='names-component'>
        {namesList.defaultNamesList.map((element)=>{
            return <div>{element.name}</div>
        })}
    </div>;
}