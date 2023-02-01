
import React,{useState} from "react";
import GifSearch from "./GifSearch";
import GifList from "./GifList";

function GifListContainer() {
  
  const [searchedName, setSearchedName] = useState([]);
  const [newData, setNewData] = useState([]);
  function typeTextFunc(event) {
    setSearchedName(event.target.value);
  }
  function findGif() {
      fetch(
        `https://api.giphy.com/v1/gifs/trending?api_key=m6SseVwb5FEsJLBr2gjrHPcStjezgyXl&limit=25&rating=g`
       
      )
        .then((res) => res.json())
        .then((data) => setNewData(data));
  }
  return (
    <>
      <GifSearch typeTextFunc={typeTextFunc} findGif={findGif} />
      <GifList data={newData} alt={searchedName} />
    </>
  );
}

export default GifListContainer;