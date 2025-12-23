import ReactDOM from 'react-dom/client'

import App from './App.jsx';

// import "./index.css";

let roots = document.querySelector('#root')
let root = ReactDOM.createRoot(roots)
root.render(<App/>)