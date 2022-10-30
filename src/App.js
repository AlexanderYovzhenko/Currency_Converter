import './App.scss';
import ConverterPage from './pages/ConverterPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>SPA для конвертирования валют</h1>
      </header>
      <main>
        <ConverterPage />
      </main>
    </div>
  );
}

export default App;
