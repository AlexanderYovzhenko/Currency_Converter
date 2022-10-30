import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getConvert } from '../../api/queriesApiLayer';
import LoadingAnimation from '../../components/loading-animation/LoadingAnimation';
import { changeError, changePlaceholder } from '../../store/queriesApiLayerSlice';
import './ConverterPage.scss';

function ConverterPage() {
  const dispatch = useDispatch();
  const { isLoading, error, resultConvert, placeholder } = useSelector((state) => state.queriesApiLayer);

  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const queryArray = query.split(' ');
    const queryAmount = queryArray[0];
    const queryFrom = queryArray[1];
    const queryTo = queryArray[3];
    const queryParams = `?to=${queryTo}&from=${queryFrom}&amount=${queryAmount}`;

    if (queryArray.length === 4) {
      dispatch(getConvert(queryParams));
    } else {
      dispatch(changeError('The request was invalid!'))
    };

    setQuery('');
  }

  useEffect(() => {
    const queryArray = query.split(' ');
    const placeholder = `${queryArray[0]} ${queryArray[1]} in ${queryArray[3]}`;
       
    if (queryArray.length === 4) {
      dispatch(changePlaceholder(placeholder));
    } 
  }, [query]);

  return (
    <div className="Converter">
      <h1 className="converter-title">Конвертер</h1>
      <form action="#" className="form" onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="input" className="form__input">
          <input type="text"
            id="input" 
            placeholder="&nbsp;"
            value={ query }
            onChange={(event) => handleChange(event)} 
          />
          <span className="label">
            { placeholder } 
          </span>
          <span className="focus-bg"></span>
        </label>
      </form>
      {isLoading && (
        <div className="loader">
          <LoadingAnimation />
        </div>
      )}
      <div className="converter-result">
        { error ? error : resultConvert && resultConvert.result && `${ Math.round(resultConvert.result * 10) / 10 } ${ resultConvert.query.to }` }
      </div>
    </div>
  );
}

export default ConverterPage;
