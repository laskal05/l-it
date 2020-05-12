import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
// import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import { MainProps } from 'l-it/types';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Main from '../components/main';
import MainContainer from '../components/mainContainer';
import Sidebar from '../components/sidebar';
import Home from '../components/Home';
import Works from '../components/Works';
import Business from '../components/Business';
import Contact from '../components/Contact';

const PAGE_TITLE = 'L;IT';
const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections: Array<MainProps> = [
  { title: 'Home', url: 'home', children: <Home /> },
  { title: 'Works', url: 'works', children: <Works /> },
  { title: 'Business', url: 'business', children: <Business /> },
  { title: 'Contact', url: 'contact', children: <Contact /> },
];

const mainCard = {
  title: 'Engineer',
  description:
    'ホームページ、システム開発、業務効率化などのITに関わる仕事の他、様々な業種に関わっています',
  image: 'https://source.unsplash.com/random',
  imgText: 'random image',
  linkText: 'Continue reading…',
};

const sidebar = {
  title: 'About',
  description: '',
  archives: [],
  social: [
    { name: 'GitHub', icon: GitHubIcon, href: 'https://github.com/laskal05/' },
    {
      name: 'Twitter',
      icon: TwitterIcon,
      href: 'https://twitter.com/laskal05/',
    },
  ],
};

function IndexPage(): React.ReactElement {
  const classes = useStyles();
  return (
    <Layout title={PAGE_TITLE} sections={sections}>
      <SEO title={PAGE_TITLE} />
      <main>
        <MainContainer post={mainCard} />
        <Grid container spacing={5} className={classes.mainGrid}>
          <Grid item xs={12} md={8}>
            {sections.map((section, i) => {
              const { title, url, children } = section;
              return (
                <Main key={i.toString()} title={title} url={url}>
                  {children}
                </Main>
              );
            })}
          </Grid>
          <Sidebar
            title={sidebar.title}
            description={sidebar.description}
            archives={sidebar.archives}
            social={sidebar.social}
          />
        </Grid>
      </main>
    </Layout>
  );
}

export default IndexPage;
