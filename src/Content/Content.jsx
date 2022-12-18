import React from "react";
import C from '../Content/Content.module.css'


function Content() {
    return (
        <div>
            <div className={C.container2}>
                <div className={C.row2}>
                    <div className={C.text_row1}>
                        <h1 className={C.text_row_h1}>Собственная студия звукозаписи!!!</h1>
                        <p className={C.text_row_p}>Именно у нас ты можешь сделать профессиональную
                            запись своих песен, а опытная команда музыкантов поможет тебе
                            записать кристально чистый звук. В стоимость входит все оборудование, что
                            ты найдешь в нашем магазине </p>

                        <div className={C.input_row1}>
                            <input type='button' value='Записать свой хит' />
                        </div>
                    </div>
                    <div className={C.img_row1}>
                        <img src="/img/ph_1.jpg" alt='Изображение 1' />
                    </div>
                </div>
            </div>


            <div className={C.container1}>
                <div className={C.row1}>
                    <div className={C.img_row1}>
                        <img src="#" alt='Изображение 1' />
                    </div>
                    <div className={C.text_row1}>
                        <h1 className={C.text_row_h1}>Приветстуем тебя, именно тебя в нашей школе музыки!!!</h1>
                        <p className={C.text_row_p}>У нас ты можешь записаться на первый урок совершенно бесплатно.
                            Тебе подробно расскажут про все инструменты и помогут выбрать свой.
                            А так же ты сможешь подтянуть уже имеющиеся знания о музыке, так что дерзай скорее,
                            количество мест ограничено! </p>

                        <div className={C.input_row1}>
                            <input type='button' value='Записаться на пробный урок' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;