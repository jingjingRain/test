import React, { Component, useState } from 'react';
import '../App';
import '@mantine/core/styles.css';
import { createTheme, MantineProvider, Button } from '@mantine/core';
const CompA = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>CompA</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <CompB count={count} />
    </div>
  );
};
interface IProps {
  count: number
}
class CompB extends Component<IProps, any> {
  render() {
    return <h1>Count from CompA{this.props.count}</h1>
  }
}

export default CompA;
