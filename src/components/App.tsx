import NavBar from './nav/NavBar';
import Home from './home/Home';

const App = () => {
  return (
    <div>
      <header className="absolute z-50 w-full">
        <NavBar />
      </header>
      <main>
        <Home />
      </main>
    </div>
  );
};

export default App;
