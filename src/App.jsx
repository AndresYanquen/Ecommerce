import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import { AccountCircle } from '@material-ui/icons';
import { useStyles } from './styles/Appbar/styles'
import { Typography } from '@material-ui/core';

function App() {

  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.title}>
          <h3>Buscar</h3>
          <div className={classes.search}>
            <InputBase
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          </div>
          {/* <div className={classes.grow} /> */}
          <div className={classes.sectionDesktop}>
            {/* User button */}
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={""}
              aria-haspopup="true"
              onClick={() => console.log("test")}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      
    </div>
  );
}

export default App;
