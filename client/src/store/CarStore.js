//mobx and data storage
import {makeAutoObservable} from "mobx";

export default class CarStore {
    constructor() {                     //calls with creating CarStore object
        this._bodytypes = [
            {id: 1, name: 'Седан'},
            {id: 2, name: 'Минивэн'},
            {id: 3, name: 'Джип'}
        ]
        this._manufacturers = [
            {id: 1, name: 'Toyota'},
            {id: 2, name: 'Nissan'},
            {id: 3, name: 'Jeep'}
        ]
        this._cars = [
            {id: 1, name: 'Crown Majesta',price: 6700402,year: 2012,engine: '450VSd',drive: 'Передний',mileage: 0,      img:'../../../server/static/0a9db193-851f-4216-8a94-cd5ca9777dd2.jpg'},
            {id: 2, name: '350Z',         price: 1350052,year: 2005,engine: '3.5STI',drive: 'Задний',  mileage: 653000, img:'../../../server/static/2efa1d74-e3f8-4c49-a823-8791768be03c.jpg'},
            {id: 3, name: 'Wrangler',     price: 2451230,year: 2020,engine: '123TRV',drive: 'Полный',  mileage: 4500,   img:'../../../server/static/ea1331fb-48f2-4031-aaf2-38927f1462fa.jpg'},
        ]

        makeAutoObservable(this)        //with changing _isAuth & _user components will rerender
    }

    //ACTIONS - functions that change state                                 //SETTERS
    SetBodytypes(bodytypes){
        this._bodytypes = bodytypes
    }
    SetManufacturers(manufacturers){
        this._manufacturers = manufacturers
    }
    SetCars(cars){
        this._cars = cars
    }

    //COMPUTED FUNCTIONS - only called if internal variables have changed   //GETTERS
    get bodytypes(){               //get variables from state
        return this._bodytypes
    }
    get manufacturers(){
        return this._manufacturers
    }
    get cars(){
        return this._cars
    }
}