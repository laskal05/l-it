import * as React from 'react';
import { animateScroll as scroll, scroller } from 'react-scroll';
import { makeStyles } from '@material-ui/core/styles';
import { Link, Toolbar, Typography } from '@material-ui/core';
import DarkModeButton from './darkmodeButton';

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

interface Section {
  title: string;
  url: string;
}

export interface HeaderProps {
  sections: Array<Section>;
  title: string;
}

function Header(props: HeaderProps): React.ReactElement {
  const classes = useStyles();
  const { sections = [], title } = props;

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
        <DarkModeButton />
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {sections.map((section, i) => (
          <Link
            color="inherit"
            key={i.toString()}
            className={classes.toolbarLink}
            href="#"
            onClick={() => {
              scroller.scrollTo(section.url, {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart',
              });
            }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

export default Header;
