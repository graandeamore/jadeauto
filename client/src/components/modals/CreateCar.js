import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../index";
import classes from "../../scss/CreateCar.module.scss";
import {fetchCarNames, fetchManufacturers,createCar} from "../../http/carAPI";
import {observer} from "mobx-react-lite";

const CreateCar = observer(({visible,setCarVisible})=> {

    const {car} = useContext(Context)


    const [nameName, setNameName] = useState('');
    const [manufacturerName, setManufacturerName] = useState('');
    const [price, setPrice] = useState(0);
    const [year, setYear] = useState(0);
    const [motor, setMotor] = useState('');
    const [drive, setDrive] = useState('');
    const [mileage, setMileage] = useState(0);
    const [city, setCity] = useState('');
    const [date, setDate] = useState('');
    const [file, setFile] = useState(null);

    useEffect(() => {
        fetchManufacturers().then(data => car.setManufacturers(data));
        fetchCarNames().then(data => car.setCarNames(data));
    }, []);

    const selectFile = e => {
        setFile(e.target.files[0]);
    };

    const addCar = () => {
        const formData = new FormData();
        formData.append('price', `${price}`);
        formData.append('img', file );
        formData.append('manufacturerId', car.selectedManufacturer.id);
        formData.append('carNameId', car.selectedCarName.id);
        formData.append('manufacturerName', car.selectedManufacturer.name);
        formData.append('nameName', car.selectedCarName);
        formData.append('year', `${year}`);
        formData.append('motor', `${motor}`);
        formData.append('drive', `${drive}`);
        formData.append('mileage', `${mileage}`);
        formData.append('city', `${city}`);
        formData.append('date', `${date}`);
        createCar(formData).then(data => alert(data))
    }

    return (
        <div className={visible ? classes.CreateCar + ' '+ classes.visible : classes.CreateCar} onClick={() => setCarVisible(false)}>
            <div className={visible ? classes.CreateCar__data + ' '+ classes.visible : classes.CreateCar__data} onClick={e => e.stopPropagation()}>
                <form>
                    <p>{car.selectedManufacturer.name || "Выберите Производителя"}</p>
                    <div>
                        {car.manufacturers.map(manufacturer =>
                            <p value={manufacturer.id} key={manufacturer.id}  onClick={() => car.setSelectedManufacturer(manufacturer)} >{manufacturer.name}</p>
                        )}
                    </div>

                    <p>{car.selectedCarName.name || "Выберите Название машины"}</p>
                    <div>
                        {car.carNames.map(carName =>
                            <p value={carName.id} key={carName.id} onClick={() => car.setSelectedCarName(carName)}>{carName.name}</p>
                        )}
                    </div>
                    <p>Производитель</p>
                   <input type="text" value={car.selectedManufacturer.name} />
                    <p>Название</p>
                    <input type="text" value={car.selectedCarName.name} />
                    <p>Стоимость (число)</p>
                    <input type="text" onChange={e => setPrice(e.target.value)} />
                    <p>Пробег (число)</p>
                    <input type="text" onChange={e => setMileage(e.target.value)}/>
                    <p>Двигатель</p>
                    <input type="text" onChange={e => setMotor(e.target.value)}/>
                    <p>Привод</p>
                    <input type="text" onChange={e => setDrive(e.target.value)}/>
                    <p>Город</p>
                    <input type="text" onChange={e => setCity(e.target.value)}/>
                    <p>Год</p>
                    <input type="text" onChange={e => setYear(e.target.value)}/>
                    <p>Фото</p>
                    <input type="file" onChange={selectFile}/>
                    <p>Дата</p>
                    <input type="text" onChange={e => setDate(e.target.value)}/>
                    <hr/>
                    <button onClick={addCar}>Добавить</button>
                </form>
            </div>
        </div>
    );
})


export default CreateCar;