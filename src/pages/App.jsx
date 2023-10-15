import { Routes,Route,Link } from 'react-router-dom';
import ComicsPage from './Comics';
import SeriesPage from './Series';
import MainPage from './MainPage';

const App = () => {
    return (
      <>
        <Routes>
          <Route path = "/" element = {<MainPage></MainPage>}></Route>
          <Route path="/Comics" element = {<ComicsPage></ComicsPage>}></Route>
          <Route path='/Series' element= {<SeriesPage></SeriesPage>}></Route>
        </Routes>
      </>
      
    )
  }
  
  export default App;
  