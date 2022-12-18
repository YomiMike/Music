import React from "react";
import C from '../Catalog/Catalog.module.css';
import { Link,Route,Routes } from 'react-router-dom';
import SubMenu from "./SubMenu";
import Catalog_Item from "./CatalogItem";






function Access(props) {

    let CatalogElements = props.CatalogAccess.map( Item => <Catalog_Item name={Item.name} cena={Item.cena} /> )

    return ( 
        <div className={C.container}>
                 <SubMenu />
            <div className={C.catalog}>
            {CatalogElements}
        </div>
   </div>
    )
}

export default Access;