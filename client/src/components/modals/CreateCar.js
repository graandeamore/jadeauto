import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../index";
import classes from "../../scss/Modal.module.scss";
import {fetchCarNames, fetchManufacturers,createCar} from "../../http/carAPI";
import {observer} from "mobx-react-lite";

const CreateCar = observer(({visible,setCarVisible})=> {

    const {car} = useContext(Context)

    const [description,setDescription] = useState('')
    const [price,setPrice ] = useState('')
    const [mileage,setMileage ] = useState(0)
    const [motor,setMotor ] = useState('')
    const [drive , setDrive] = useState('')
    const [city, setCity] = useState('')
    const [year,setYear ] = useState('')
    const [vid , setVid] = useState(null);
    const [images , setImages] = useState([]);


    const selectVid = e => {
        setVid(e.target.files[0]);
    };
    const selectImages = e =>{
        setImages(e.target.files);
    }

    useEffect(() => {
        fetchManufacturers().then(data => car.setManufacturers(data));
        fetchCarNames().then(data => car.setCarNames(data));
    }, []);

    const addCar = () => {
        const formData = new FormData()
        formData.append('nameName', car.selectedCarName.name)
        formData.append('manufacturerName', car.selectedManufacturer.name)
        formData.append('price', Number(price).toLocaleString('ru'))
        formData.append('manufacturerId', Number(car.selectedManufacturer.id))
        formData.append('carNameId', Number(car.selectedCarName.id))
        formData.append('year', `${year}`)
        formData.append('motor', motor)
        formData.append('drive', drive)
        formData.append('mileage', `${mileage}`)
        formData.append('city', city)
        formData.append('description', description)
        let date = new Date().toLocaleDateString()
        formData.append('date', date)
        formData.append('video', vid)
        // formData.append('images', images);
        Array.from(images).forEach(image => {
            formData.append('images', image);
        });
        createCar(formData).then(() => setCarVisible(false))

    }

    return (
        <div className={visible ? classes.Modal + ' '+ classes.visible : classes.Modal} onClick={() => setCarVisible(false)}>
            <div className={visible ? classes.Modal__data + ' '+ classes.visible : classes.Modal__data} onClick={e => e.stopPropagation()}>
                <form>
                    <b>{car.selectedManufacturer.name || "Выберите Производителя"}</b>
                    <div className={classes['select_container']}>
                        {car.manufacturers.map(manufacturer =>
                            <div
                                className={classes['select']}
                                key={manufacturer.id}
                                onClick={() => car.setSelectedManufacturer(manufacturer)}
                                style={manufacturer.id === car.selectedManufacturer.id ? {borderBottom:"2px solid #CD3319"}: {borderBottom:"none"}}
                            >
                                {manufacturer.name}
                            </div>
                        )}
                    </div>
                    <b>{car.selectedCarName.name || "Выберите название"}</b>

                    <div className={classes['select_container']}>
                        {car.carNames.map(CarName =>
                            <div
                                className={classes['select']}
                                key={CarName.id}
                                onClick={() => car.setSelectedCarName(CarName)}
                                style={CarName.id === car.selectedCarName.id ? {borderBottom:"2px solid #CD3319"}: {borderBottom:"none"}}
                            >
                                {CarName.name}
                            </div>
                        )}
                    </div>
                    <p>Стоимость</p>
                    <input type="text" value={price} onChange={e => setPrice(e.target.value)} />

                    <p>Пробег (число)</p>
                    <input type="text" value={mileage} onChange={e => setMileage(Number(e.target.value))}/>

                    <p>Двигатель</p>
                    <input type="text" value={motor} onChange={e => setMotor(e.target.value)}/>

                    <p>Привод</p>
                    <input type="text" value={drive} onChange={e => setDrive(e.target.value)}/>

                    <p>Город</p>
                    <input type="text" value={city} onChange={e => setCity(e.target.value)}/>

                    <p>Год (Число)</p>
                    <input type="text" value={year} onChange={e => setYear(Number(e.target.value))}/>

                    <p>Описание</p>
                    <input type="text" value={description} onChange={e => setDescription(e.target.value)}/>


                    <label className={classes['Modal__data-upload']}>
                        <input
                            type="file"
                            onChange={e => selectVid(e)}
                        />
                        { vid ? vid.name.substring(0,25) + '...': 'Добавить Видео'}
                    </label>

                    <label className={classes['Modal__data-upload']}>
                        <input
                            type="file"
                            multiple
                            onChange={e => selectImages(e)}
                        />
                        { images.length? images.length + ' файлов': 'Добавить фотографии'}
                    </label>

                    <hr/>
                    <button
                        className={classes['Modal__data-button']}
                        onClick={addCar}>Добавить</button>
                </form>
            </div>
        </div>
    );
})


export default CreateCar;