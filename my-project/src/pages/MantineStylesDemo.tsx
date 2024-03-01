import '../App';
import '@mantine/core/styles.css';
import { createTheme, MantineProvider, Button } from '@mantine/core';
const Demo1 = () => {
  return (
    <div>
      <Button
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
        }}
      >
        Click me
      </Button>
    </div>
  );
};


export default Demo1;
