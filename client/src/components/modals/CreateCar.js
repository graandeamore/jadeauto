import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../index";
import classes from "../../scss/CreateCar.module.scss";
import {fetchCarNames, fetchManufacturers,createCar} from "../../http/carAPI";
import {observer} from "mobx-react-lite";

const CreateCar = observer(({visible,setCarVisible})=> {

    const {car} = useContext(Context)

    const [nameName,setNameName] = useState('')
    const [manufacturerName,setManufacturerName ]  = useState('')
    const [price,setPrice ] = useState('')
    const [mileage,setMileage ] = useState(0)
    const [motor,setMotor ] = useState('')
    const [drive , setDrive] = useState('')
    const [city, setCity] = useState('')
    const [year,setYear ] = useState('')
    const [file , setFile] = useState(null)
    const [date ,setDate ] = useState('')
    const [manufacturer , setManufacturer] = useState(null)
    const [carName ,setCarName ] = useState(null)
    const selectFile = e => {
        setFile(e.target.files[0]);
    };

    useEffect(() => {
        fetchManufacturers().then(data => car.setManufacturers(data));
        fetchCarNames().then(data => car.setCarNames(data));
    }, []);

    const addCar = () => {
        const formData = new FormData()
        formData.append('nameName', car.selectedCarName.name)
        formData.append('manufacturerName', car.selectedManufacturer.name)
        formData.append('price', price)
        formData.append('manufacturerId', Number(car.selectedManufacturer.id))
        formData.append('carNameId', Number(car.selectedCarName.id))
        formData.append('year', `${year}`)
        formData.append('motor', motor)
        formData.append('drive', drive)
        formData.append('mileage', `${mileage}`)
        formData.append('city', city)
        formData.append('date', date)
        formData.append('img', file) //formData.append('img', JSON.stringify(file)) for many
        createCar(formData).then(() => setCarVisible(false))

    }

    return (
        <div className={visible ? classes.CreateCar + ' '+ classes.visible : classes.CreateCar} onClick={() => setCarVisible(false)}>
            <div className={visible ? classes.CreateCar__data + ' '+ classes.visible : classes.CreateCar__data} onClick={e => e.stopPropagation()}>
                <form>
                    <b>{car.selectedManufacturer.name || "Выберите Производителя"}</b>
                    <div>
                        {car.manufacturers.map(manufacturer =>
                            <div
                                className={classes['select']}
                                key={manufacturer.id}
                                onClick={() => car.setSelectedManufacturer(manufacturer)}
                            >
                                {manufacturer.name}
                            </div>
                        )}
                    </div>
                    <b>{car.selectedCarName.name || "Выберите название"}</b>
                    <div>
                        {car.carNames.map(CarName =>
                            <div
                                className={classes['select']}
                                key={CarName.id}
                                onClick={() => car.setSelectedCarName(CarName)}
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

                    <p>Фото</p>
                    <input type="file" onChange={selectFile}/>

                    <p>Дата</p>
                    <input type="text" value={date} onChange={e => setDate(e.target.value)}/>

                    <hr/>
                    <button onClick={addCar}>Добавить</button>
                </form>
            </div>
        </div>
    );
})


export default CreateCar;