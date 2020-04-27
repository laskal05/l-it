import * as React from 'react';
import { Button, Grid, Paper, FormGroup } from '@material-ui/core';

import { InputName, InputEmail, InputContent } from './Inputs';

export default function Home(): React.ReactElement {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [content, setContent] = React.useState('');

  return (
    <>
      <p>お問い合わせはこちらからお願いします。</p>
      <Paper>
        <FormGroup
          style={{
            paddingTop: 30,
            marginBottom: 30,
            marginLeft: 50,
            marginRight: 50,
          }}
        >
          <Grid container>
            <Grid item xs={12} md={12}>
              <InputName state={name} onChange={e => setName(e)} />
              <InputEmail state={email} onChange={e => setEmail(e)} />
              <InputContent state={content} onChange={e => setContent(e)} />
            </Grid>
          </Grid>
          <Grid container alignItems="center" justify="center">
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: 20 }}
              onClick={() => console.log('submit')}
              disabled
            >
              送信
            </Button>
          </Grid>
        </FormGroup>
        <br />
      </Paper>
    </>
  );
}
