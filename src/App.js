import './App.css';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';

function App() {
  return (
    <div className='d-flex flex-column-reverse flex-md-row'>
      <LeftSide/>
      <RightSide/>
    </div>
  );
}

export default App;
