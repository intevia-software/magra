

import Navbar from './components/Navbar'
import Bar from './components/Bar'
import First from './components/First'
import Second from './components/Second'
import './App.css';

function App() {
  return (
    <div className="App">
			<div className="w-full">
				<Navbar />
				<Bar />
				<First />
				<Second />
			</div>
		</div>
  );
}

export default App;
