import * as React from 'react';
import Button from '@mui/material/Button';
import { useSnackbar } from 'notistack';

export default function Snackbar() {
    const { enqueueSnackbar } = useSnackbar();

    const handleClick = () => {
        enqueueSnackbar('I love snacks.');
    };
    // React.useEffect(() => {
    //     setTimeout(() => {
    //         console.log('This is a success message!')
    //         enqueueSnackbar('This is a success message!', { variant: 'success' });
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


    const handleClickVariant = (variant) => () => {
        // variant could be success, error, warning, info, or default
        enqueueSnackbar('This is a success message!', { variant });
    };

    return (
        <React.Fragment>
            <Button onClick={handleClick}>Show snackbar</Button>
            <Button onClick={handleClickVariant('success')}>Show success snackbar</Button>
        </React.Fragment>
    );
}