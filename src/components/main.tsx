import * as React from 'react';
import { Element } from 'react-scroll';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Divider, Typography } from '@material-ui/core';

import Markdown from './markdown';

const useStyles = makeStyles(theme => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
}));

interface MainProps {
  posts: Array<string>;
  title: string;
  url: string;
}

export default function Main(props: MainProps): React.ReactElement {
  const classes = useStyles();
  const { posts, title, url } = props;

  return (
    <Grid item xs={12} md={12}>
      <Element name={url} className="element">
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Divider />
        {posts.map(post => (
          <Markdown className={classes.markdown} key={post.substring(0, 40)}>
            {post}
          </Markdown>
        ))}
      </Element>
    </Grid>
  );
}
