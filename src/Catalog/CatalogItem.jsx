import React from "react";
import C from '../Catalog/Catalog.module.css';


const Catalog_Item = (props) => {

    return <div className={C.item}>
        <div className={C.item_img}>
            {props.img}
        </div>
        <div className={C.item_name}>
            {props.name}
        </div>
        <div>
            {props.cena}
        </div>
        <div className={C.item_cors}>
            В корзину
        </div>
    </div>
}

export default Catalog_Item;