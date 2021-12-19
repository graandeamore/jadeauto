//Data Models
const sequelize  = require('../db')  //data base
const {DataTypes} = require('sequelize')  // for data types by destructuring

//create entities
const User = sequelize.define('user', {
    id:                  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    number:              {type: DataTypes.STRING, allowNull: false },  //need to set , unique: true
    password:            {type: DataTypes.STRING, allowNull: false},
    role:                {type: DataTypes.STRING, defaultValue: 'ADMIN'}  //need to set , unique: true defaultValue: 'USER'
})
const Order = sequelize.define('order', {
    id:                  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})
const CarsInOrder = sequelize.define('cars_in_order', {
    id:                  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})
const Car = sequelize.define('car', {
    id:                  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    nameName:            {type: DataTypes.STRING,    },         //название
    manufacturerName:    {type: DataTypes.STRING,    },         //производитель
    price:               {type: DataTypes.STRING,    },         // Цена
    manufacturerId:      {type: DataTypes.INTEGER,   },         // ID Производителя  - сортировка
    carNameId:           {type: DataTypes.INTEGER,   },         // ID Названия       - сортировка
    year:                {type: DataTypes.INTEGER,   },         // Год
    motor:               {type: DataTypes.STRING,    },         // Двигатель
    drive:               {type: DataTypes.STRING,    },         // Привод
    mileage:             {type: DataTypes.INTEGER,   },          // Пробег
    city:                {type: DataTypes.STRING,    },          // Город
    date:                {type: DataTypes.STRING,    },          // Дата
    description:         {type: DataTypes.STRING,    },          // Описание
    img:                 {type: DataTypes.STRING,    },          // Картинка 1
    img1:                {type: DataTypes.STRING,    },          // Картинка 2
    img2:                {type: DataTypes.STRING,    },          // Картинка 3
    img3:                {type: DataTypes.STRING,    },          // Картинка 4
    img4:                {type: DataTypes.STRING,    },          // Картинка 5
    img5:                {type: DataTypes.STRING,    },          // Картинка 6
    img6:                {type: DataTypes.STRING,    },          // Картинка 7
    img7:                {type: DataTypes.STRING,    },          // Картинка 8
    img8:                {type: DataTypes.STRING,    },          // Картинка 9



})

const CarName = sequelize.define('car_name', {                                                         //last Bodytype
    id:                  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:                {type: DataTypes.STRING,    allowNull: false }
})
const Manufacturer = sequelize.define('manufacturer', {
    id:                  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:                {type: DataTypes.STRING,    allowNull: false}
})
const CarInfo = sequelize.define('car_info', {
    id:                  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title:               {type: DataTypes.STRING,    allowNull: false},
    description:         {type: DataTypes.STRING,    allowNull: false}
})
//for belongsToMany
const CarNameManufacturer = sequelize.define('car_name_manufacturer', {                   //last BodyTypeManufacturer
    id:                   {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

// 1.USER-ORDER hasOne
User.hasOne(Order)  // 1 user can have 1 order
Order.belongsTo(User) // order belongs to user

// 2.ORDER-ORDER_CAR hasMany
Order.hasMany(CarsInOrder) // 1 order can have many cars in order
CarsInOrder.belongsTo(Order)

// 3.ORDER_CAR-CAR hasOne
Car.hasMany(CarsInOrder)
CarsInOrder.belongsTo(Car)

//4.ORDER_CAR-CAR hasOne
Car.hasMany(CarInfo, {as: 'info'})
CarInfo.belongsTo(Car)

// 5.MANUFACTURER-CAR hasMany
Manufacturer.hasMany(Car)
Car.belongsTo(Manufacturer)

// 6.Name-CAR hasMany
CarName.hasMany(Car)
Car.belongsTo(CarName)

// 6.Name-MANUFACTURER belongsToMany
CarName.belongsToMany(Manufacturer,{through: CarNameManufacturer})            // many manufacturers can have many car-names
Manufacturer.belongsToMany(CarName,{through: CarNameManufacturer})    // many car-names can have many manufacturers

//export
module.exports = {
    User, Order, Manufacturer, CarsInOrder, Car, CarInfo, CarName, CarNameManufacturer
}