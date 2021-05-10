import './App.css';
import { useEffect, useState } from "react";
import ImageCard from "./Components/ImageCard";
import ImageSearch from "./Components/ImageSearch";

function App() {
  let [images, setImages] = useState([]);
  let [term, setTerm] = useState("");
  let [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=20964531-d8eaac78a1ef970cee61bc30b&q=${term}&image_type=photo&pretty=true`)
    .then(response => response.json())
    .then(data => {
      setImages(data.hits);
      setIsLoading(false);
    })
    .catch(err => console.log(err));
  },[term])

  return (
    <>
      <ImageSearch searchTerm={(text) => setTerm(text)} />
      <div className="imagesContainer">
        {images.map(image => (
          <ImageCard image={image} />
        ))}
      </div>
    </>
  );
}

export default App;
