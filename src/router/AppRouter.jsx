import { Routes, Route, Navigate } from 'react-router-dom';
import ConverterPage from '../pages/converter-page/ConverterPage';
import CoursesPage from '../pages/courses-page/CoursesPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/convertor" element={<ConverterPage />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="*" element={<Navigate to="/convertor" />} />
    </Routes>
  );
};

export default AppRouter;
