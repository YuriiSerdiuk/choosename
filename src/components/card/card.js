import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import namesList from '../../store/names'
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function MediaCard() {
  const addToFavorites = (name) => {
    namesList.addToFavorites(name || '');
  }
  const removeNameFromNamesList = (name) => {
    namesList.removeNameFromNamesList(name || '');
  }

  const name = namesList.defaultNamesList[3].name;
  return (
    <Card sx={{maxWidth: 345}}>
      <CardMedia
        sx={{height: 140}}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => removeNameFromNamesList(name)} variant="outlined" startIcon={<DeleteIcon/>}>
          Delete
        </Button>
        <Button onClick={() => addToFavorites(name)} variant="outlined" startIcon={<FavoriteIcon/>}>
          Add to favorite
        </Button>
      </CardActions>
    </Card>
  );
}