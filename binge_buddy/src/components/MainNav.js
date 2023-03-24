import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteIcon from '@material-ui/icons/Favorite';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SearchIcon from '@material-ui/icons/Search';
import TvIcon from '@material-ui/icons/Tv';

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: 'fixed',
    display: 'flex',
    bottom: 0,
    backgroundColor : '#16241d',
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction style= {{color: "#e5f2da"}} label="TV Series" icon={<TvIcon />} />
      <BottomNavigationAction style= {{color: "#e5f2da"}} label="For you" icon={<WhatshotIcon />} />
      <BottomNavigationAction style= {{color: "#e5f2da"}} label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction style= {{color: "#e5f2da"}} label="Search" icon={<SearchIcon />} />
    </BottomNavigation>
  );
}
