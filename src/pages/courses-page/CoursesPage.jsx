import './CoursesPage.scss';
import Select from 'react-select';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCurrency } from '../../store/queriesApiLayerSlice';
import LoadingAnimation from '../../components/loading-animation/LoadingAnimation';

function CoursesPage() {
  const dispatch = useDispatch();
  const { isLoading, error, defaultCurrency } = useSelector((state) => state.queriesApiLayer);

  const userLang = navigator.language || navigator.userLanguage;
  const options = [
    { value: 'RUB', label: 'RUB' },
    { value: 'USD', label: 'USD' }
  ];

  const [currency, setCurrency] = useState(defaultCurrency ? defaultCurrency : userLang.includes('RU') ? options[0] : options[1]);

  const handleChange = (event) => {
    setCurrency(event);
    dispatch(changeCurrency(event));
  }

  return (
    <div className="Courses">
      <h1 className="courses-title">Tекущие курсы</h1>
      <Select 
        className="courses-select"
        options={options} 
        defaultValue={currency}
        onChange={(event) => handleChange(event)}
      />
      {isLoading ? (
        <div className="loader">
          <LoadingAnimation />
        </div>) 
        : error ? error : 
        <ul className="courses-show">
          <li className="courses-show__item">1 USD = 63.49 RUB</li>
          <li className="courses-show__item">1 EUR = 72.20 RUB</li>
        </ul>
      }
    </div>
  );
}

export default CoursesPage;
