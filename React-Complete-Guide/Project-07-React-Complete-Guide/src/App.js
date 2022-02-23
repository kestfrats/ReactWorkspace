import React, { useState, useCallback } from 'react';

import './App.css';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log('APP RUNNING');

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      4AUkXAeFKsG9Nr1oBq6kN68pkzk7Kzo6ugWXfZozTggLgqWb7BCEqzDWU4XERLsrs1WPBMeE7EafHLQEnBW8wS56KmHB6zM
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow toggling!</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Pragraph!</Button>
    </div>
  );
}

export default App;
