import { useState } from 'react';
import './ConverterPage.scss';

function ConverterPage() {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setText('');
  }

  return (
    <div className="Converter" onSubmit={(event) => handleSubmit(event)}>
      <h1 className="converter-title">Конвертер</h1>
      <form action="#" className="form">
        <label htmlFor="input" className="form__input">
          <input type="text"
            id="input" 
            placeholder="&nbsp;"
            value={ text }
            onChange={(event) => handleChange(event)} 
          />
          <span className="label">Конвертер</span>
          <span className="focus-bg"></span>
        </label>
      </form>
      <div className="converter-result">{ text }</div>
    </div>
  );
}

export default ConverterPage;
