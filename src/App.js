import Booksearch from './components/bookSearch/Booksearch.js';
import SubjectSearch from './components/subjectSearch/Subjectsearch.js';
import './App.css';

function App() {
  return (
    <div className="App" style={{ display: "flex", height: "100vh" }}>
      <div style={{ flex: "1 1 25%" }}>
        <SubjectSearch />
      </div>
      <div style={{ flex: "1 1 90%" }}>
        <Booksearch />
      </div>
    </div>
  );
}


export default App;
