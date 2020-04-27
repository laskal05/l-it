import * as React from 'react';
import { TextField } from '@material-ui/core';
import { InputProps } from 'l-it/types';

export const InputName = (props: InputProps): React.ReactElement => {
  const { state, onChange, onBlur = () => {}, error = false } = props;
  return (
    <TextField
      type="text"
      label="氏名(全角)"
      placeholder="内容　太郎"
      value={state}
      onChange={e => onChange(e.target.value)}
      onBlur={() => onBlur()}
      style={{ width: '100%' }}
      margin="normal"
      required
      error={error}
    />
  );
};

export const InputEmail = (props: InputProps) => {
  const { state, onChange, onBlur = () => {}, error = false } = props;
  return (
    <TextField
      type="email"
      label="メールアドレス(半角)"
      placeholder="sample@example.com"
      value={state}
      onChange={e => onChange(e.target.value)}
      onBlur={() => onBlur()}
      style={{ width: '100%' }}
      margin="normal"
      required
      error={error}
    />
  );
};

export const InputContent = (props: InputProps) => {
  const { state, onChange, onBlur = () => {}, error = false } = props;
  return (
    <TextField
      type="text"
      label="内容"
      placeholder=""
      value={state}
      onChange={e => onChange(e.target.value)}
      onBlur={() => onBlur()}
      style={{ width: '100%' }}
      margin="normal"
      required
      rows="10"
      error={error}
    />
  );
};
