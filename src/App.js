import React from 'react';
import './App.css';
import QRCode from 'react-qr-code'

//https://www.npmjs.com/package/react-qr-code

function App() {
  const [inputValue, setInputValue] = React.useState('')

  return (
    <div className="container">
      <h1 className="py-4">Содержимое QR-кода</h1>
      <input type="text" placeholder='Введите ссылку для QR-кода'
        className='border' onChange={e => setInputValue(e.target.value)} />

      <QRCode className='qr' value={inputValue} />
    </div>
  );
}

export default App;
