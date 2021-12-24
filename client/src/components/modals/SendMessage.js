import React, {useState} from 'react';
import classes from "../../scss/Modal.module.scss";
import {useLocation} from 'react-router-dom'
import InputMask from "react-input-mask";

const SendMessage = ({visible,setSendMessageVisible,car}) => {
    const [value, setValue] = useState('');
    console.log()
    const location = useLocation()
    const sendMessage = async () => {
        await fetch(`${process.env.REACT_APP_API_URL}send-text?textmessage=${location.pathname}&buyer=${value}&car=${car.manufacturerName} ${car.nameName}, ${car.date}`)
            .catch(err => console.error(err))
    }

    return (
        <div className={visible ? classes.Modal + ' '+ classes.visible : classes.Modal} onClick={() => setSendMessageVisible(false)}>
            <div className={visible ? classes.Modal__data + ' '+ classes.visible : classes.Modal__data} onClick={e => e.stopPropagation()}>
                <form action="">
                    <p>Отправить заявку</p>
                    <InputMask
                        value={value}
                        type="text"
                        placeholder={'Номер телефона'}
                        onChange={e => setValue(e.target.value)}
                        mask="+7\(999) 999-9999"
                        maskChar=" "
                    />
                   <hr/>
                    <button
                        className={classes['Modal__data-button']}
                        onClick={sendMessage}
                    >Отправить</button>
                </form>
            </div>
        </div>
    );
}

export default SendMessage;