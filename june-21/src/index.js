import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import TestPage from './Pages/testPage';
import AboutPage from './Pages/aboutPage';
// import TestOne from './Pages/testOne'
import TestTwo from './Pages/testTwo'

function TestOne() {
  const {testId} = useParams()
  return (
    <h1>The course is {testId}</h1>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App/>}>
            <Route path="/test" element={<TestPage/>}>
              <Route path=":testId" element={<TestOne/>}/>
              <Route path=":testTwo" element={<TestTwo/>}/>
            </Route>
            <Route path="about" element={<AboutPage/>}/>
          </Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
