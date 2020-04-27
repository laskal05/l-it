import { ReactElement } from 'react';

declare module 'l-it/types' {
  export interface HomeProps {
    title: string;
    url: string;
    children: ReactElement;
  }

  export type SectionTitles = 'Home' | 'Works' | 'Business' | 'Contact';
  export type SectionURLs = 'home' | 'works' | 'business' | 'contact';
  export interface MainProps {
    title: SectionTitles;
    url: SectionURLs;
    children: ReactElement;
  }

  export type MainCardInterface = {
    [key in SectionURLs]: Array<CardInterface>;
  };

  export interface CardInterface {
    title?: string;
    date?: string;
    description?: string;
    image?: string;
    imageTitle?: string;
    href?: string;
  }

  export interface FeaturedPostProps {
    post: CardInterface;
    gridMDNum: any;
  }

  export interface InputProps {
    state: string;
    onChange: (e: any) => void;
    error?: boolean;
    onBlur?: () => void;
  }
}
