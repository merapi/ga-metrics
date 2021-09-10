import logo from './logo.svg';
import './App.css';
import ReactGA from 'react-ga';

function App() {
    const sendTiming = () => {
        const perfData = window.performance.getEntriesByType("navigation")[0];
        ReactGA.timing({
            category: 'Metrics',
            variable: 'load',
            value: perfData.domComplete,
            label: 'Load time'
        });
        ReactGA.timing({
            category: 'Metrics',
            variable: 'domInteractive',
            value: perfData.domInteractive,
        });
        ReactGA.event({
            category: 'User',
            action: 'Button Click',
            label: 'Send metrics to GA',
            value: 1,
        });
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
