import './App.css'
import Header from './layout/Header/Header';
import Login from './page/Login/Login';
import Home from './page/Home/Home';
import Report from './page/Report/Report';
function App() {
    return ( 
        <div className="App">
            {/* <Header /> */}
            {/* <Login />              */}
            <h1>App</h1>
            <h2>nct dream</h2>
            <h3>Home</h3>
            <h4>Login</h4>
            <Home />
        </div>
        
     );
}

export default App;