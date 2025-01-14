import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./Example/MyComponent";
import LoginComponent from "./Example/LoginComponent";
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Rì ách hello world</p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <MyComponent />
                <LoginComponent />
            </header>
        </div>
    );
}

export default App;
