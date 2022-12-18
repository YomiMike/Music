import React from "react";
import C from '../Catalog/Catalog.module.css';
import SubMenu from "./SubMenu";
import Catalog_Item from "./CatalogItem";


function Bush(props) {

    let CatalogElements = props.CatalogBush.map( Item => <Catalog_Item name={Item.name} cena={Item.cena} /> )
    
    return (
        <div className={C.container}>
            <SubMenu />
            <div className={C.catalog}>
                {CatalogElements}
            </div>
        </div>
    )
}

export default Bush;