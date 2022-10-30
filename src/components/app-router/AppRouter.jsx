import { Routes, Route, Navigate } from 'react-router-dom';
import ConverterPage from '../../pages/ConverterPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/convertor" element={<ConverterPage />} />
      <Route path="/courses" element={"Курсы"} />
      <Route path="*" element={<Navigate to="/convertor" />} />
    </Routes>
  );
};

export default AppRouter;
