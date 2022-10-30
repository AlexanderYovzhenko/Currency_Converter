import './App.scss';
import AppRouter from './components/app-router/AppRouter';
import Navigation from './components/navigation/Navigation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
      <main>
        <AppRouter />
      </main>
    </div>
  );
}

export default App;
