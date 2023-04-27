import logo from './logo.svg';
import './App.css';
import HookCounter from './components/useState/HookCounter';
import ArrayHookCounter from './components/useState/PrevHookCounter';
import ObjectHookCounter from './components/useState/ObjectHookCounter';
import EffectHookCounter from './components/useEffect/EffectHookCounter';

function App() {
  return (
    <div className="App">
  {    
     // <HookCounter />
     // <ArrayHookCounter />
     //<ObjectHookCounter />
  }
  {
    <EffectHookCounter />
  }
    </div>
  );
}

export default App;
