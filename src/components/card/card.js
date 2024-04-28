import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import namesList from '../../store/names'
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useSnackbar} from 'notistack';

import Api from '../../api';

import auth from '../../store/authorization';
import {observer} from "mobx-react-lite";

export default observer(function MediaCard() {
  const {enqueueSnackbar} = useSnackbar();
  const name = namesList.defaultNamesList[0]?.name;

  const addToFavorites = async () => {
    const {userId, token} = auth;
    Api.addLikedName({
      id: userId,
      name: name,
    }).then((res) => {
      console.log('res', res.data.message);
      enqueueSnackbar(res.data.message, {variant: 'success'});
    }).catch((err) => {
      console.log("error", err);
      enqueueSnackbar('!!!', {variant: 'error'});
    })
  }

  const removeNameFromNamesList = async () => {
    const {userId, token} = auth;
    // namesList.removeNameFromNamesList(name);
    Api.addUnlikedName({
      id: userId,
      name: name,
    }).then((res) => {
      enqueueSnackbar(res.data.message, {variant: 'info'});
      console.log('added to unliked');
    }).catch((err) => {
      console.log('error', err);
      enqueueSnackbar('!!!', {variant: 'error'});
    })
  }
  console.log(name)

  return (
    <Card sx={{maxWidth: 345}}>
      <CardMedia
        sx={{height: 140}}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name || 'the list is empty'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => removeNameFromNamesList()} variant="outlined"
                startIcon={<DeleteIcon/>}>
          Delete
        </Button>
        <Button onClick={addToFavorites} variant="outlined" startIcon={<FavoriteIcon/>}>
          Add to favorite
        </Button>
      </CardActions>
    </Card>
  );
})