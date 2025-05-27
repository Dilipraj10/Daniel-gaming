import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGamesData } from '../actions/Action';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


export default function ResponsiveGrid() {
  const dispatch = useDispatch();
  const gamesData = useSelector(state => state.data)

  useEffect(() => {
    dispatch(fetchGamesData())
  }, [dispatch]);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));

  return (
    <>
      <Box sx={{ flexGrow: 1, p:4 }}>
        <Grid container spacing={1}>
          {gamesData && gamesData.map((data) => {
            return (
              <Grid size={3}>
                <Item>
                  <Card sx={{ maxWidth: 275 }}>
                    <CardMedia
                      component="img"
                      height="194"
                      image={data.background_image}
                      alt={data.name}
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
                </Item>
              </Grid>
            )
          })}
        </Grid>
      </Box>

    </>
  );
}
