import { React, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MultiPage from './MultiPage';
import reportWebVitals from './reportWebVitals';
//import { useEffect } from 'react';


export function useTitle(title) {
  useEffect(() => {
    const prevTitle = document.title
    console.log(title);
    document.title = title
    return () => {
      document.title = prevTitle
    }
  });
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MultiPage />
  /*<React.StrictMode>
  </React.StrictMode> */
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
