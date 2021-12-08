//Data Models
const sequelize  = require('../db')  //data base
const {DataTypes} = require('sequelize')  // for data types by destructuring

//create entities
const User = sequelize.define('user', {
    id:                  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    number:              {type: DataTypes.STRING, unique: true},
    password:            {type: DataTypes.STRING},
    email:               {type: DataTypes.STRING, unique: true},
    role:                {type: DataTypes.STRING, defaultValue: 'USER'}
})
const Order = sequelize.define('order', {
    id:                  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})
const CarsInOrder = sequelize.define('cars_in_order', {
    id:                  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})
const Car = sequelize.define('car', {
    id:                  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    price:               {type: DataTypes.INTEGER,   allowNull: false},         // Цена
    manufacturerId:      {type: DataTypes.INTEGER,   allowNull: false},         // ID Производителя  - сортировка
    nameId:              {type: DataTypes.INTEGER,   allowNull: false},         // ID Названия       - сортировка
    year:                {type: DataTypes.INTEGER,   allowNull: false},         // Год
    motor:               {type: DataTypes.STRING,    allowNull: false},         // Двигатель
    drive:               {type: DataTypes.STRING,    allowNull: false},         // Привод
    mileage:             {type: DataTypes.STRING,    allowNull: false},         // Пробег
    city:                {type: DataTypes.STRING,    allowNull: false},         // Город
    date:                {type: DataTypes.STRING,    allowNull: false},         // Дата
    img:                 {type: DataTypes.STRING,    allowNull: false}          // Картинка (должно быть 20/неогр + video)

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
const CarNameManufacturer = sequelize.define('carname_manufacturer', {                   //last BodyTypeManufacturer
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