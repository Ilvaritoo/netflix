import Row from "./components/Row";
import requests from '../src/request'


function App() {
  return (
    <div className="App">
      <Row title='Netflix originals' fetchUrl/>
      <Row title='Trending now' fetchUrl/>
    </div>
  );
}

export default App;
