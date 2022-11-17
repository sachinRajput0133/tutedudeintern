
import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/layout/header/Header';
import ReferEarnPage from './component/refer&earn/ReferEarnPage';
import ScreenA from './component/screena/ScreenA';

function App() {
  return (
    <Fragment>

      <Header/>
      <Routes>
         <Route path='/tutedudeintern' element={ <ScreenA/> } />
         <Route path='/tutedudeintern/referearn' element={ <ReferEarnPage/> } />
      </Routes>
    

    </Fragment>
  );
}

export default App;
