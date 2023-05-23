import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Details from './components/details';

const root = ReactDOM.createRoot(document.getElementById('root'));
//create a router object
const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/details",
    element:<Details/>
  }
])
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
