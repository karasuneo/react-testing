import logo from './logo.svg';
import './App.css';
import RenderInput from './RenderInput';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RenderInput outputConsole={console.log}/>
      </header>
    </div>
  );
}

export default App;
