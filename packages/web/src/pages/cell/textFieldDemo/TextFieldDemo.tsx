import React, { useState } from 'react';
import { TextField } from '@chips/core';
import { BiUserCircle } from 'react-icons/bi';

import './textFieldDemo.scss';

const TextFieldDemo = (): JSX.Element => {
  const [demoText, setDemoText] = useState('');
  const [demoNumber, setDemoNumber] = useState('');
  const [demoPassword, setDemoPassword] = useState('');
  const [errorText, setErrorText] = useState('');
  const [iconText, setIconText] = useState('');
  const [multiLineText, setMultiLineText] = useState('');

  const icon = <BiUserCircle style={{ height: '60px', width: '60px' }} />;

  return (
    <div>
      <h2>Basic Text Fields</h2>
      <div className="d-flex basic-text-fields">
        <div>
          <TextField
            className="single-field"
            variant="standard"
            type="text"
            label="standard"
            value={demoText}
            onChange={e => setDemoText(e.target.value)}
            style={{ height: '200px' }}
          />
          <TextField
            className="single-field"
            variant="outlined"
            type="number"
            label="outlined"
            value={demoNumber}
            onChange={e => setDemoNumber(e.target.value)}
          />
          <TextField
            className="single-field"
            variant="filled"
            type="password"
            label="filled"
            value={demoPassword}
            onChange={e => setDemoPassword(e.target.value)}
          />
        </div>
        <div>
          <TextField
            className="single-field"
            variant="standard"
            type="text"
            label="standardDisabled"
            value={demoText}
            onChange={e => setDemoText(e.target.value)}
            disabled
          />
          <TextField
            className="single-field"
            variant="outlined"
            type="number"
            label="outlinedDisabled"
            value={demoNumber}
            onChange={e => setDemoNumber(e.target.value)}
            disabled
          />
          <TextField
            className="single-field"
            variant="filled"
            type="password"
            label="filledDisabled"
            value={demoPassword}
            onChange={e => setDemoPassword(e.target.value)}
            disabled
          />
        </div>
      </div>
      <div className="d-flex basic-text-fields">
        <TextField
          className="single-field"
          variant="outlined"
          type="text"
          label="fullWidthInput"
          value={demoText}
          onChange={e => setDemoText(e.target.value)}
          fullWidth
        />
      </div>
      <div className="d-flex basic-text-fields">
        <TextField
          className="single-field"
          variant="outlined"
          type="text"
          label="randomWidthInput"
          value={demoText}
          onChange={e => setDemoText(e.target.value)}
          fullWidth
          style={{ width: '600px' }}
        />
      </div>
      <hr />
      <h2>Text Field with Error</h2>
      <div className="text-field-helper">
        <div>
          <TextField
            className="single-field"
            variant="standard"
            type="text"
            label="standardError"
            value={errorText}
            onChange={e => setErrorText(e.target.value)}
            error
            helperText="Invalid entry"
            style={{ textAlign: 'center' }}
          />
          <TextField
            className="single-field"
            variant="outlined"
            type="text"
            label="outlinedError"
            value={errorText}
            onChange={e => setErrorText(e.target.value)}
            error
            helperText="Invalid entry"
          />
          <TextField
            className="single-field"
            variant="filled"
            type="text"
            label="filledError"
            value={errorText}
            onChange={e => setErrorText(e.target.value)}
            error
            helperText="Invalid entry"
          />
        </div>
      </div>
      <hr />
      <h2>Text Field with Icons</h2>
      <div className="d-flex basic-text-fields">
        <div>
          <TextField
            className="single-field"
            variant="standard"
            type="text"
            label="standardIconFront"
            value={iconText}
            onChange={e => setIconText(e.target.value)}
            startAdornment={icon}
          />
          <TextField
            className="single-field"
            variant="outlined"
            type="text"
            label="outlinedIconFront"
            value={iconText}
            onChange={e => setIconText(e.target.value)}
            startAdornment={icon}
          />
          <TextField
            className="single-field"
            variant="filled"
            type="text"
            label="filledIconFront"
            value={iconText}
            onChange={e => setIconText(e.target.value)}
            startAdornment={icon}
          />
        </div>
        <div>
          <TextField
            className="single-field"
            variant="standard"
            type="text"
            label="standardIconBack"
            value={iconText}
            onChange={e => setIconText(e.target.value)}
            endAdornment={icon}
          />
          <TextField
            className="single-field"
            variant="outlined"
            type="text"
            label="outlinedIconBack"
            value={iconText}
            onChange={e => setIconText(e.target.value)}
            endAdornment={icon}
          />
          <TextField
            className="single-field"
            variant="filled"
            type="text"
            label="filledIconBack"
            value={iconText}
            onChange={e => setIconText(e.target.value)}
            endAdornment={icon}
          />
        </div>
      </div>
      <div className="d-flex basic-text-fields">
        <TextField
          className="single-field"
          variant="outlined"
          type="text"
          label="fullWidthIconInputStart"
          value={iconText}
          onChange={e => setIconText(e.target.value)}
          startAdornment={icon}
          fullWidth
        />
      </div>
      <div className="d-flex basic-text-fields">
        <TextField
          className="single-field"
          variant="outlined"
          type="text"
          label="fullWidthIconInputEnd"
          value={iconText}
          onChange={e => setIconText(e.target.value)}
          endAdornment={icon}
          fullWidth
        />
      </div>
      <hr />
      <h2>Multi-line Text Field</h2>
      <div className="d-flex basic-text-fields">
        <TextField
          className="single-field"
          variant="standard"
          type="text"
          label="multiLineStandardStart"
          value={multiLineText}
          onChange={e => setMultiLineText(e.target.value)}
          multiLine
          startAdornment={icon}
        />
        <TextField
          className="single-field"
          variant="standard"
          type="text"
          label="multiLineStandardEnd"
          value={multiLineText}
          onChange={e => setMultiLineText(e.target.value)}
          multiLine
          endAdornment={icon}
        />
      </div>
      <div className="d-flex basic-text-fields">
        <TextField
          className="single-field"
          variant="filled"
          type="text"
          label="multiLineFilledStart"
          value={multiLineText}
          onChange={e => setMultiLineText(e.target.value)}
          multiLine
          startAdornment={icon}
        />
        <TextField
          className="single-field"
          variant="filled"
          type="text"
          label="multiLineFilledEnd"
          value={multiLineText}
          onChange={e => setMultiLineText(e.target.value)}
          multiLine
          endAdornment={icon}
        />
      </div>
      <div className="d-flex basic-text-fields">
        <TextField
          className="single-field"
          variant="outlined"
          type="text"
          label="multiLineOutlinedStart"
          value={multiLineText}
          onChange={e => setMultiLineText(e.target.value)}
          multiLine
          startAdornment={icon}
        />
        <TextField
          className="single-field"
          variant="outlined"
          type="text"
          label="multiLineOutlinedEnd"
          value={multiLineText}
          onChange={e => setMultiLineText(e.target.value)}
          multiLine
          endAdornment={icon}
        />
      </div>
      <div className="d-flex basic-text-fields">
        <TextField
          className="single-field"
          variant="outlined"
          type="text"
          label="fullWidthMultiLine"
          value={multiLineText}
          onChange={e => setMultiLineText(e.target.value)}
          multiLine
          startAdornment={icon}
          fullWidth
        />
      </div>
      <div className="d-flex basic-text-fields">
        <TextField
          className="single-field"
          variant="outlined"
          type="text"
          label="randomWidthMultiLineStart"
          value={multiLineText}
          onChange={e => setMultiLineText(e.target.value)}
          multiLine
          startAdornment={icon}
          style={{ width: '500px', height: '100px' }}
        />
      </div>
      <div className="d-flex basic-text-fields">
        <TextField
          className="single-field"
          variant="outlined"
          type="text"
          label="randomWidthMultiLineEnd"
          value={multiLineText}
          onChange={e => setMultiLineText(e.target.value)}
          multiLine
          endAdornment={icon}
          style={{ width: '500px', height: '300px' }}
        />
      </div>
    </div>
  );
};

export default TextFieldDemo;
