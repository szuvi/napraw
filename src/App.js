import React from 'react';
import './style.css';
import convert from './convert';
import Container from './components/Container';
import TextInput from './components/TextInput';

export default function App() {
  const [input, setInput] = React.useState('');
  const [copySuccess, setCopySuccess] = React.useState(false);
  const textAreaRef = React.useRef(null);

  const handleChange = e => {
    const inputValue = e.target.value;
    setInput(convert(inputValue));
    setCopySuccess(false);
  };

  const handleCopy = () => {
    textAreaRef.current.select();
    document.execCommand('copy');
    setCopySuccess(true);
  };

  return (
    <Container centered>
      <TextInput ref={textAreaRef} value={input} onChange={handleChange} />
      {copySuccess && <p>Skopiowano</p>}
      <button onClick={handleCopy}>Kopiuj</button>
    </Container>
  );
}
