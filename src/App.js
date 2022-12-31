import './App.css';
import Counter from "./components/counter";

function App() {
  return (
   <div className='m-3'>
    <Counter title="Laravel" value={1} image="images/profile.png"/>
    <Counter title="MySQL" value={1} image="images/mysql.png"/>
   </div>
  );
}

export default App;
