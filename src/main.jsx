import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './pages/MainPage.jsx'

import { Routes,Route,Link } from 'react-router-dom';
import ComicsPage from './pages/Comics';
import SeriesPage from './pages/Series';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<App></App>}></Route>
        <Route path="/Comics" element = {<ComicsPage></ComicsPage>}></Route>
        <Route path='/Series' element= {<SeriesPage></SeriesPage>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
