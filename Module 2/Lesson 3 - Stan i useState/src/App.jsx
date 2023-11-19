import { useState } from "react";

function App() {
  const [isSpoilerShown, setIsSpoilerShown] = useState(false);
  const [isWarningShown, setIsWarningShown] = useState(true);

  function handleSpoilerClick() {
    setIsSpoilerShown(true);
    setIsWarningShown(false);
  }

  function handleWarningClick() {
    setIsWarningShown(false);
    setIsSpoilerShown(false);
  }

  return (
    <>
      <h1>Gwiezdne wojny V</h1>
      <h2>Rok produkcji: 1988</h2>
      <h2>Fabuła</h2>
      {isWarningShown && (
        <p>
          Uwaga! Opis zawiera spoiler
          <button onClick={handleWarningClick}>X</button>
        </p>
      )}
      <p>Dobrzy walczą ze złymi. Trzema wyłączyć pole siłowe.</p>
      {isSpoilerShown ? (
        <p>Vader okazuje się być ojcem Luka.</p>
      ) : (
        <button onClick={handleSpoilerClick}>Pokaż spoiler</button>
      )}
    </>
  );
}

export default App;
