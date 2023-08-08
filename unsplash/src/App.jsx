import ThemeToggle from './components/ThemeToggle';
import SearchForm from './components/SearchForm';
import Gallery from './components/Gallery';
import { useGlobalContext } from './context';

function App() {
  const { isDarkTheme, toggleTheme } = useGlobalContext();
  return (
    <main>
      <ThemeToggle />
      <SearchForm />
      <Gallery />
    </main>
  );
}

export default App;
