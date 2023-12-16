import React from 'react';
import { observer } from "mobx-react-lite";

import './mainWrapper.css';
import {NamesComponent} from "../namesComponent/namesComponent";
import {Filters} from "../filters/filters";
import {names} from "../../store/names";

const list =  names();
console.log('*** names' ,list.names.length )
console.log('*** names' ,list.names.push({}) )
setTimeout(()=>{
    list.names.push({})
},5000);

console.log('*** names' ,list.names.length )
export const MainWrapper = observer(() => {
    return <div className='main-wrapper'>
        <Filters/>
        {list.names.length}
        <NamesComponent>
        </NamesComponent>
    </div>;
})