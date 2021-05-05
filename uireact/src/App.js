import React from 'react';
import './App.css';
import { SideBar } from './components/SideBar';
import { Top } from './components/Top';
import { WidgetRow1 } from './components/WidgetRow1';
import { WidgetRow2 } from './components/WidgetRow2';

function App() {
  return (
    <div className="app">
        <SideBar />
        <Top />
        <WidgetRow1 />
        <WidgetRow2 />
    </div>
  );
}

export default App;
