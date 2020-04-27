import * as React from 'react';
import { Element } from 'react-scroll';
import { Grid, Divider, Typography } from '@material-ui/core';
import { MainProps } from 'l-it/types';

export default function Main(props: MainProps): React.ReactElement {
  const { title, url, children } = props;
  return (
    <Grid item xs={12} md={12}>
      <Element name={url} className="element">
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Divider />
        <br />
        {children}
        <br />
      </Element>
    </Grid>
  );
}
