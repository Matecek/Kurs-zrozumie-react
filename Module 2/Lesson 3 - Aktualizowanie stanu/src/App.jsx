import { useState } from "react";

function App() {
  const [isSpoilerShown, setIsSpoilerShown] = useState(false);
  const [isWarningShown, setIsWarningShown] = useState(true);
  const [numberOfLikes, setNumberOfLike] = useState(50);

  function handleShowSpoilerClick() {
    setIsSpoilerShown(true);
    setIsWarningShown(false);
  }

  function handleCloseWarningClick() {
    setIsWarningShown(false);
  }

  function handleLikeButtonClick() {
    setNumberOfLike((previousNumberOfLikes) => previousNumberOfLikes + 1);
  }

  function handelLoveButtonClick() {
    setNumberOfLike((previousNumberOfLikes) => previousNumberOfLikes + 3);
  }

  return (
    <>
      <h1>Gwiezdne wojny V</h1>
      <h2>Rok produkcji: 1988</h2>
      <h2>Liczba polubień: {numberOfLikes}</h2>
      <button onClick={handleLikeButtonClick}>Lubie to!</button>
      <button onClick={handelLoveButtonClick}>Kocham to!</button>
      <h2>Fabuła</h2>
      {isWarningShown && (
        <p>
          Uwaga! Opis zawiera spoiler
          <button onClick={handleCloseWarningClick}>X</button>
        </p>
      )}
      <p>Dobrzy walczą ze złymi. Trzema wyłączyć pole siłowe.</p>
      {isSpoilerShown ? (
        <p>Vader okazuje się być ojcem Luka.</p>
      ) : (
        <button onClick={handleShowSpoilerClick}>Pokaż spoiler</button>
      )}
    </>
  );
}

export default App;
