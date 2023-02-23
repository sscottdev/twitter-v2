import { MdPostAdd, MdMessage } from 'react-icons/md';
import classes from './MainHeader.module.css';
import {Fab} from "@mui/material";


function AddIcon() {
    return (
    <MdPostAdd size="2em" />
    )
}

function MainHeader({ onCreatePost }) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        oh yeah, mario time.
      </h1>
      <p>
          <Fab color="primary" className={classes.button} onClick={onCreatePost} aria-label="add">
            <AddIcon />
          </Fab>
      </p>
    </header>
  );
}

export default MainHeader;