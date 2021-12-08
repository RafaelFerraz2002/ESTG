import './App.css';
//  import Header from "./players/Header";
import Players from "./players/Players";
import PlayersForm from "./players/add/PlayersForm";

function App() {
  return (
    <div className="App">
     
     <main>
       <Players />
       <PlayersForm />
     </main>
    </div>
  );
}

export default App;
