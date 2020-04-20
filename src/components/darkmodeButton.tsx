import * as React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Brightness4 from '@material-ui/icons/Brightness4';
import Brightness5 from '@material-ui/icons/Brightness5';
import { ThemeContext } from '../../plugins/gatsby-plugin-top-layout/TopLayout';

function DarkModeButton(props: any): React.ReactElement {
  return (
    <ThemeContext.Consumer>
      {({ mode, toggleTheme }): React.ReactElement => (
        <IconButton onClick={(): void => toggleTheme()} {...props}>
          {mode === 'dark' ? <Brightness5 /> : <Brightness4 />}
        </IconButton>
      )}
    </ThemeContext.Consumer>
  );
}

export default DarkModeButton;
