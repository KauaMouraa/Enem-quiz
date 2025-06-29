import Header from "./components/Header";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primeflex/themes/primeone-light.css";
import Pergunta from "./components/Pergunta";

const App = () => {
  return ( 
    <>
      <Header />
      <Pergunta />
    </>
   );
}
 
export default App;