import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../index";
import classes from "../../scss/Modal.module.scss";
import {createCar, fetchCarNames, fetchManufacturers} from "../../http/carAPI";
import {observer} from "mobx-react-lite";

const CreateCar = observer(({visible,setCarVisible})=> {

    const {car} = useContext(Context)
    const [description,setDescription] = useState('')
    const [price,setPrice ] = useState('')
    const [mileage,setMileage ] = useState('')
    const [motor,setMotor ] = useState('')
    const [drive , setDrive] = useState('')
    const [city, setCity] = useState('')
    const [year,setYear ] = useState('')
    const [video , setVideo] = useState(null);
    const [images , setImages] = useState([]);


    const selectVideo = e => {
        setVideo(e.target.files[0]);
    };
    const selectImages = e =>{
        setImages(e.target.files);
    }

    useEffect(() => {
        fetchManufacturers().then(data => car.setManufacturers(data));
        fetchCarNames().then(data => car.setCarNames(data));
    }, [car]);

    const addCar = (event) => {
        event.preventDefault()
        const formData = new FormData()
        let date = new Date().toLocaleDateString()
        formData.append('nameName', car.selectedCarName.name)
        formData.append('manufacturerName', car.selectedManufacturer.name)
        formData.append('price', Number(price).toLocaleString('ru'))
        formData.append('manufacturerId', Number(car.selectedManufacturer.id))
        formData.append('carNameId', Number(car.selectedCarName.id))
        formData.append('year', year)
        formData.append('motor', motor)
        formData.append('drive', drive)
        formData.append('mileage', mileage)
        formData.append('city', city)
        formData.append('description', description)
        formData.append('date', date)
        formData.append('video', video)
        formData.append('image', images[0])
        Array.from(images).forEach(image => {
            formData.append('images', image);
        });
        createCar(formData).then(() => {
            setDescription('')
            setPrice('')
            setMileage('')
            setMotor('')
            setDrive('')
            setCity('')
            setYear('')
            setVideo(null)
            setImages([])
            setCarVisible(false)
            window.location.reload();
        })
    }

    return (
        <div
            className={visible ? classes['Modal'] + ' '+ classes['visible'] : classes['Modal']}
            onClick={() => setCarVisible(false)}
        >
            <div
                className={visible ? classes['Modal__data'] + ' '+ classes['visible'] : classes['Modal__data']}
                onClick={e => e.stopPropagation()}>
                <form>
                    <b>{car.selectedManufacturer.name || "Выберите Производителя"}</b>
                    <div className={classes['select_container']}>

                        {
                            car.manufacturers.map(manufacturer =>
                                <div
                                    className={classes['select']}
                                    key={manufacturer.id}
                                    onClick={() => car.setSelectedManufacturer(manufacturer)}
                                    style={manufacturer.id === car.selectedManufacturer.id ? {borderBottom:"2px solid #CD3319"}: {borderBottom:"none"}}
                                >
                                    {manufacturer.name}
                                </div>)
                        }

                    </div>

                    <b>{car.selectedCarName.name || "Выберите название"}</b>

                    <div className={classes['select_container']}>
                        {
                            car.carNames.map(CarName =>
                                <div
                                    className={classes['select']}
                                    key={CarName.id}
                                    onClick={() => car.setSelectedCarName(CarName)}
                                    style={CarName.id === car.selectedCarName.id ? {borderBottom:"2px solid #CD3319"}: {borderBottom:"none"}}
                                >
                                    {CarName.name}
                                </div>)
                        }
                    </div>
                    <div
                        className={classes['Modal__data-inputs']}
                    >
                        <div className={classes['Modal__data-input']}>
                            <p>Стоимость:</p>
                            <input type="text" value={price} onChange={e => setPrice(e.target.value)} />
                        </div>
                        <div className={classes['Modal__data-input']}>
                            <p>Пробег:</p>
                            <input type="text" value={mileage} onChange={e => setMileage(e.target.value)}/>
                        </div>
                        <div className={classes['Modal__data-input']}>
                            <p>Двигатель:</p>
                            <input type="text" value={motor} onChange={e => setMotor(e.target.value)}/>
                        </div>
                        <div className={classes['Modal__data-input']}>
                            <p>Привод:</p>
                            <input type="text" value={drive} onChange={e => setDrive(e.target.value)}/>
                        </div>
                        <div className={classes['Modal__data-input']}>
                            <p>Город:</p>
                            <input type="text" value={city} onChange={e => setCity(e.target.value)}/>
                        </div>
                        <div className={classes['Modal__data-input']}>
                            <p>Год:</p>
                            <input type="text" value={year} onChange={e => setYear(e.target.value)}/>
                        </div>
                        <div className={classes['Modal__data-input']}>
                            <p>Описание:</p>
                            <input type="text" value={description} onChange={e => setDescription(e.target.value)}/>
                        </div>

                    </div>


                    <label className={classes['Modal__data-upload']}>
                        <input
                            type="file"
                            onChange={e => selectVideo(e)}
                        />
                        { video ? video.name.substring(0,25) + '...': 'Добавить Видео'}
                    </label>

                    <label className={classes['Modal__data-upload']}>
                        <input
                            type="file"
                            multiple
                            onChange={e => selectImages(e)}
                        />
                        { images.length?  'Файлов: ' + images.length : 'Добавить фотографии'}
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