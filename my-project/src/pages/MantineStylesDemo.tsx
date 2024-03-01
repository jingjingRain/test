import '../App';
import '@mantine/core/styles.css';
import { createTheme, MantineProvider, Button } from '@mantine/core';
const Demo1 = () => {
  return (
    <div>
      <Button
        style={{
          backgroundColor: "red",
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
        }}
      >
       样式button
      </Button>
    </div>
  );
};


export default Demo1;
