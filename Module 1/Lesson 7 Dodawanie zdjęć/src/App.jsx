import { PersonInfo } from "./components/Personinfo";
import dogImg from "./assets/dog.jpg";

function App() {
  const jan = {
    name: "Jan",
    lastName: "Kowalski",
    mail: "j.kowalski@gmail.com",
    tel: "+48 111 222 333",
  };
  const janina = {
    name: "Janina",
    lastName: "Kowalski",
    mail: "janina.kowalska@gmail.com",
    tel: "+48 222 333 444",
  };
  const karol = {
    name: "Karol",
    lastName: "Kowalski",
    mail: "karol.kowalski@gmail.com",
  };

  return (
    <>
      <PersonInfo person={jan} />
      <br />
      <PersonInfo person={janina} />
      <br />
      <PersonInfo person={karol} />
      <img src={dogImg} alt="" />
    </>
  );
}

export default App;
