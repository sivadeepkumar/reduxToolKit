import { Provider } from 'react-redux';
import Counter from './Components/Counter';
import store from './Components/store';

const App = () => <>
<Provider store={store}>
  
<Counter/>
</Provider>


</>

export default App;

