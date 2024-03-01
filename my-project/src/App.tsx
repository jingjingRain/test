import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { createTheme, MantineProvider, Button } from '@mantine/core';
import './App.css';
import '@mantine/core/styles.css';
import MantineStyles from './pages/MantineStylesDemo'
import MobxDemo from './pages/MobxDemo'

const theme = createTheme({
  /** Put your mantine theme override here */
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  );
}
const App = () => {
  return (
    <Router>
      <div>
        <Link to="/first"> 页面一  </Link>
        <Link to="/second"> 页面二 </Link>
        <Routes>
          <Route path="/first" element={<MantineStyles />}></Route>
          <Route path="/second" element={<MobxDemo />}></Route>
        </Routes>
      </div>
    </Router>
  );
}


export default Demo;
