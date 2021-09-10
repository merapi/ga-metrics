import logo from './logo.svg';
import './App.css';
import ReactGA from 'react-ga';

function App() {
    const sendTiming = () => {
        const perfData = window.performance.timing;
        const perfDataV2 = window.performance.getEntriesByType("navigation")[0];
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        const data = {
            category: 'Metrics',
            variable: 'load',
            value: pageLoadTime,
            label: 'Load time'
        }
        ReactGA.timing(data);
        ReactGA.event({
            category: 'User',
            action: 'Button Click',
            label: 'Send metrics to GA',
            value: 1,
        });
        console.log(data)
        console.log({perfData, perfDataV2})
    }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={sendTiming}>Send metrics to GA</button>
      </header>
    </div>
  );
}

export default App;
