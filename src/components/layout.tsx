/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { CssBaseline, Container } from '@material-ui/core';

import Header, { HeaderProps } from './header';
import Footer, { FooterProps } from './footer';
// import './layout.css';

interface LayoutProps extends HeaderProps, FooterProps {
  children: React.ReactElement | Array<React.ReactElement>;
}

const Layout = ({
  title,
  sections,
  footerTitle,
  description,
  children,
}: LayoutProps): React.ReactElement => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title={title} sections={sections} />
        <main>{children}</main>
      </Container>
      <Footer footerTitle={footerTitle} description={description} />
    </>
  );
};

export default Layout;
