import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="height-complete col-md-3">
            <div className="boxes">
            </div>
          
          </div>
          <div className="height-complete col-md-6 dashboard">
            <h1>Social Media Platform</h1>
            <Dashboard />
            
          </div>
          <div className="height-complete col-md-3">
            <div className="boxes">
              
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
