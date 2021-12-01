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
    name:                {type: DataTypes.STRING,    allowNull: false},
    price:               {type: DataTypes.INTEGER,   allowNull: false},
    carManufacturerId:   {type: DataTypes.INTEGER,   allowNull: false},
    bodyTypeId:          {type: DataTypes.INTEGER,   allowNull: false},
    year:                {type: DataTypes.INTEGER,   allowNull: false},
    engine:              {type: DataTypes.STRING,    allowNull: false},
    drive:               {type: DataTypes.STRING,    allowNull: false},
    img:                 {type: DataTypes.STRING,    allowNull: false}
})

const BodyType = sequelize.define('body_type', {
    id:                  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:                {type: DataTypes.STRING,    allowNull: false }
})
const CarManufacturer = sequelize.define('car_manufacturer', {
    id:                  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:                {type: DataTypes.STRING,    allowNull: false}
})
const CarInfo = sequelize.define('car_info', {
    id:                  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title:               {type: DataTypes.STRING,    allowNull: false},
    description:         {type: DataTypes.STRING,    allowNull: false}
})
//for belongsToMany
const BodyTypeManufacturer = sequelize.define('body_type_manufacturer', {
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
Car.hasMany(CarInfo)
CarInfo.belongsTo(Car)

// 5.MANUFACTURER-CAR hasMany
CarManufacturer.hasMany(Car)
Car.belongsTo(CarManufacturer)

// 6.TYPE-CAR hasMany
BodyType.hasMany(Car)
Car.belongsTo(BodyType)

// 6.TYPE-MANUFACTURER belongsToMany
BodyType.belongsToMany(CarManufacturer,{through: BodyTypeManufacturer}) // many manufacturers can have many body types
CarManufacturer.belongsToMany(BodyType,{through: BodyTypeManufacturer})    // many body types can have many manufacturers

//export
module.exports = {
    User, Order, CarManufacturer, CarsInOrder, Car, CarInfo, BodyType, BodyTypeManufacturer
}