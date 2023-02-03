import searchImages from "./api";
import SearchBar from "./components/SearchBar";
function App() {
  const handleSubmit = (term) => {
    console.log("Do a search with", term);
    searchImages(term);
    // searchImages(term);
  };
  return (
    <div>
      <SearchBar onSumbit={handleSubmit} />
    </div>
  );
}

export default App;
