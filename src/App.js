import './App.css';
import Posts from './components/Posts/Posts'
import AddPost from './components/AddPost/AddPost'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AddPost />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
