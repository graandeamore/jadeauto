//mobx and data storage
import {makeAutoObservable} from "mobx";

export default class CarStore {
    constructor() {                     //calls with creating CarStore object
        this._names = [
            {id: 1, name: 'Crown Majesta'},
            {id: 2, name: 'Corolla'},
            {id: 3, name: 'Wrangler'}
        ]
        this._manufacturers = [
            {id: 1, name: 'Toyota'},
            {id: 2, name: 'Nissan'},
            {id: 3, name: 'Jeep'},
        ]
        this._cars = [
            {id: 1,price: 6700402,year: 2012,motor: '450VSd',drive: 'Передний',mileage: 0, city:'Владивосток', date:'12-10-2001', img: '../../../server/static/0a9db193-851f-4216-8a94-cd5ca9777dd2.jpg'},
            {id: 2,price: 1350052,year: 2005,motor: '3.5STI',drive: 'Задний',  mileage: 653000, city:'Владивосток', date:'12-10-2001',img: '../../../server/static/2efa1d74-e3f8-4c49-a823-8791768be03c.jpg'},
            {id: 3,price: 2451230,year: 2020,motor: '123TRV',drive: 'Полный',  mileage: 4500, city:'Владивосток', date:'12-10-2001', img: '../../../server/static/ea1331fb-48f2-4031-aaf2-38927f1462fa.jpg'}
        ]

        this._selectedManufacturer = {}
        this._selectedName = {}
        makeAutoObservable(this)        //with changing _isAuth & _user components will rerender
    }

    //ACTIONS - functions that change state                                 //SETTERS
    setNames(names){
        this._names = names
    }
    setManufacturers(manufacturers){
        this._manufacturers = manufacturers
    }
    setCars(cars){
        this._cars = cars
    }
    setSelectedManufacturer(manufacturer){
        this._selectedManufacturer = manufacturer
    }
    setSelectedName(name){
        this._selectedName = name
        console.log(name)
    }

    //COMPUTED FUNCTIONS - only called if internal variables have changed   //GETTERS
    get names (){               //get variables from state
        return this._names
    }
    get manufacturers(){
        return this._manufacturers
    }
    get cars(){
        return this._cars
    }
    get selectedManufacturer(){
        return this._selectedManufacturer
    }
    get selectedName(){
        return this._selectedName
    }
}