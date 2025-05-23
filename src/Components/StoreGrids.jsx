import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { getGamesData } from '../apis/Apis';

export default function ResponsiveGrid() {
  const [gamesData, setGamesData] = useState([]);

  console.log(gamesData);


  useEffect(() => {
    const fetchData = async () => {
      const data = await getGamesData();
      console.log(data);
      
      setGamesData(data);
    };

    fetchData();
  }, []);

  return (
    <>
      {gamesData && gamesData.map((data) => {
        return (
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="194"
              image="/static/images/cards/paella.jpg"
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body12" sx={{ color: 'text.secondary' }}>
                This impressive paella is a perfect party dish and a fun meal to cook
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        )
      })}
    </>
  );
}
