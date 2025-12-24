import ReactDOM from 'react-dom/client'

import App from './App.jsx';

// import "./index.css";

let root_ = document.querySelector('#root')
let root = ReactDOM.createRoot(root_)
root.render(<App/>)