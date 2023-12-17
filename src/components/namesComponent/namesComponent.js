import React from 'react';
import {observer} from "mobx-react-lite";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';



import './namesComponent.css';
import MediaCard from "../card/card";

export const NamesComponent = observer((props) => {

    return <div className='names-component'>
        <div className='card'>
            <MediaCard/>
        </div>
    </div>;
})