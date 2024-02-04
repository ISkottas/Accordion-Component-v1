
import './App.css';
import BarTable from './components/BarTable';

const answers = [
  {
    id: 1,
    title: 'Where are these chairs assembled ?',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
  },
  {
    id: 2,
    title: 'How long do i have to return the chair?',
    text: 'Der du von dem Himmel bist, Alles Leid und Schmerzen stillest, Den, der doppelt elend ist, Doppelt mit Erquickung füllest; Ach, ich bin des Treibens müde! Was soll all der Schmerz und Lust? Süßer Friede, Komm, ach komm in meine Brust!'
  },
  {
    id: 3,
    title: 'A Slovenian phrase?',
    text: 'Če ste sem prispeli z drugega spletnega mesta, bomo zelo hvaležni, če nam sporočite s katerega. Uredili bomo, da se vam in drugim uporabnikom to ne bo več zgodilo.'
  }
]

function App() {

  return (
    <div className="App">
      <BarTable answers={answers} />
    </div>
  );
}

export default App;
