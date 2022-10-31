import './CoursesPage.scss';
import Select from 'react-select';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCurrency } from '../../store/queriesApiLayerSlice';
import LoadingAnimation from '../../components/loading-animation/LoadingAnimation';
import { getConvertRub, getConvertUsd } from '../../api/queriesApiLayer';

function CoursesPage() {
  const dispatch = useDispatch();
  const { isLoading, error, defaultCurrency, courses } = useSelector((state) => state.queriesApiLayer);

  const userLang = navigator.language || navigator.userLanguage;
  const options = [
    { value: 'RUB', label: 'RUB' },
    { value: 'USD', label: 'USD' }
  ];

  const [currency, setCurrency] = useState(defaultCurrency ? defaultCurrency : userLang.includes('RU') ? options[0] : options[1]);

  const handleChange = (event) => {
    setCurrency(event);
    dispatch(changeCurrency(event));

    if (event.value === 'RUB') {
      dispatch(getConvertRub());
    } else {
      dispatch(getConvertUsd());
    };  
  }

  useEffect(() => {
    if ( courses.length ) {
      return;
    }

    if (currency.value === 'RUB') {
      dispatch(getConvertRub());
    } else {
      dispatch(getConvertUsd());
    }; 
  }, []);

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
          {courses.map((el, ind) => <li className="courses-show__item" key={ind}>{ `${el.query.amount} ${el.query.from} = ${Math.round(el.result * 100) / 100 } ${el.query.to}`}</li>)}
        </ul>
      }
    </div>
  );
}

export default CoursesPage;
