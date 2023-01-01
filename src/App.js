import './App.css';

import Hook from './useEffect/useEffect';
import Specific from './useEffect/useEffect_with_specific_state_and_props';
import Update from './useEffect/updateonprops';
import Style from './Style/app';
import Example from './Bootstrap/button';
import VariantsExample from './Bootstrap/dropdown';
import Array from './List/arraylist';
import List from './List/list_with_bootstrap';
import Nested from './List/nestedlist';
import Reuse from './List/Reuse/ReuseComponent';

function App() {
  return (
    <div className="App">
     <Hook/>
     <Specific/>
     <Update/> <br/>
     <Style/>
     <Example/> <br/>
     <VariantsExample/> <br/><br/>
     <Array/> <br/>
     <List/> <br/>
     <Nested/> <br/>
     <Reuse/>
    </div>
  );
}

export default App;
