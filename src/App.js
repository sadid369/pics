import { useState } from "react";
import searchImages from "./api";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };
  return (
    <div>
      <SearchBar onSumbit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
