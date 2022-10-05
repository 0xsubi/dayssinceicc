import './App.css';

import Main from "./components/Main"

function App() {
  let daysSince = () => {
    let lastIccDay = new Date("06/23/2013")
    let today = new Date()
    let nowMillis = today.getTime()
    return (nowMillis - lastIccDay.getTime()) / (1000 * 3600 * 24)
  }
  return (
    <div className="App">
     <Main />
    </div>
  );
}

export default App;
