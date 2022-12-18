import './App.css';
import MainMenu from './MainMenu/MainMenu';
import { Link,Routes,Route,NavLink } from 'react-router-dom';
import A from './App.module.css'
import Catalog from './Catalog/Catalog';
import Content from './Content/Content';
import About from './About/About';
import Contacts from './Contacts/Contacts';
import Bush from './Catalog/Bush';
import Access from './Catalog/Access';
import Oborudov from './Catalog/Oborudov';
import Footer from './Footer/Footer';




function App (props) {
  return (
    <div className="App">
        <div className={A.Content}>
            <MainMenu />
        <Routes>
            <Route exact path='/' element={<Content/>}/>
            <Route exact path='/Catalog' element={<Catalog catalogGutar={props.state.CatalogItemsGutar} />}/>
            <Route exact path='/About' element={<About/>}/>
            <Route exact path='/Contacts' element={<Contacts/>}/>
            <Route exact path='/Bush' element={<Bush CatalogBush={props.state.CatalogItemsBush}/>}/>
            <Route exact path='/Access' element={<Access CatalogAccess={props.state.CatalogItemsAccess}/>}/>
            <Route exact path='/Oborudov' element={<Oborudov CatalogOborudov={props.state.CatalogItemsOborudov}/>}/>
        </Routes>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
