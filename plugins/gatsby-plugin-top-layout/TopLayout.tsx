import * as React from 'react';
import { Helmet } from 'react-helmet';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import { red } from '@material-ui/core/colors';

// Color

// A custom theme for this app
const initialTheme = createMuiTheme({
  palette: {
    // primary: {
    //   main: '#556cd6',
    // },
    // secondary: {
    //   main: '#19857b',
    // },
    // error: {
    //   main: red.A400,
    // },
    // background: {
    //   default: '#fff',
    // },
  },
});

// reducer
interface ThemeState {
  darkMode: boolean;
}
const initialState: ThemeState = {
  darkMode:
    typeof window !== 'undefined' && localStorage.getItem('theme') === 'dark',
};

type Action = { type: 'TOGGLE_DARKMODE' };
export const themeReducer = (
  state = initialState,
  action: Action,
): ThemeState => {
  switch (action.type) {
    case 'TOGGLE_DARKMODE':
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    default:
      return state;
  }
};

export const ThemeContext = React.createContext({
  mode:
    (typeof window !== 'undefined' && localStorage.getItem('theme')) || 'dark',
  toggleTheme: () => {}, // eslint-disable-line
});

interface TopLayoutProps {
  children: React.ReactElement;
}
export default function TopLayout(props: TopLayoutProps): React.ReactElement {
  const [state, dispatch] = React.useReducer(themeReducer, initialState);
  const mode = React.useMemo(() => {
    const res = state.darkMode ? 'dark' : 'light';
    if (typeof window !== 'undefined') localStorage.setItem('theme', res);
    return res;
  }, [state.darkMode]);
  const theme = React.useMemo(() => {
    return createMuiTheme({
      ...initialTheme,
      palette: {
        type: mode,
        primary: initialTheme.palette.primary,
        secondary: initialTheme.palette.secondary,
      },
    });
  }, [mode]);
  const toggleTheme = React.useCallback(
    (): void => dispatch({ type: 'TOGGLE_DARKMODE' }),
    [state],
  );

  return (
    <React.Fragment>
      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <ThemeContext.Provider value={{ mode, toggleTheme }}>
          {props.children}
        </ThemeContext.Provider>
      </ThemeProvider>
    </React.Fragment>
  );
}
