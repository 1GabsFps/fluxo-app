import Cartoes from "./components/Cards/Cartoes";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import Button from "./components/Buttons/button";

function App() {
  return (
    <div>
      <Header />
      <Cartoes Titulo="Titulo" Texto="Texto" Imagem="https://via.placeholder.com/150" Botao="Botao" />
      <Input placeholder="preto"/>
      <Button Text="pretao"/>
    </div>
  );
}


export default App;