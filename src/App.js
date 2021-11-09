import Photo from './component/Profile/ProfilePhoto.js';
import Name from './component/Profile/FullName.js';
import Adress from './component/Profile/Address.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="profile">
      <Photo/>
      <Name/>
      <Adress/>
      </div>
    </div>
  );
}

export default App