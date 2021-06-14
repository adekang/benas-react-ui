import React from 'react';
import Input from './input';

function InputDemo() {
  return (
    <div>
      <h1>Input组件</h1>
      <Input
        style={{width: '300px'}}
        placeholder="placeholder"
      />
      <Input
        style={{width: '300px'}}
        placeholder="disabled input"
        disabled
      />
      <Input
        style={{width: '300px'}}
        placeholder="input with icon"
        icon="search"
      />
      <Input
        style={{width: '300px'}}
        defaultValue="large size"
        size="lg"
      />
      <Input
        style={{width: '300px'}}
        placeholder="small size"
        size="sm"
      />
      <Input
        style={{width: '300px'}}
        defaultValue="prepend text"
        prepend="https://"
      />
      <Input
        style={{width: '300px'}}
        defaultValue="google"
        append=".com"
      />
    </div>
  );
}

export default InputDemo;