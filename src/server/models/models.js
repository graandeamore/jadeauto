const sequelize  = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    number: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING, unique: true},
    role: {type: DataTypes.STRING, defaultValue: 'USER'}
})

const Order = sequelize.define('order', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const OrderCar = sequelize.define('OrderCar', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const Car = sequelize.define('Car', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    manufacturer: {type: DataTypes.STRING, allowNull: false},
    year: {type: DataTypes.INTEGER, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    typeId: {type: DataTypes.INTEGER, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false}
})

const Type = sequelize.define('Type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false }
})

const Manufacturer = sequelize.define('Manufacturer', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false}
})

const CarInfo = sequelize.define('CarInfo', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false}
})

const TypeManufacturer = sequelize.define('TypeManufacturer', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

User.hasOne(Order)
Order.belongsTo(User)

Order.hasMany(OrderCar)
OrderCar.belongsTo(Order)

Type.hasMany(Car)
Car.belongsTo(Type)

Manufacturer.hasMany(Car)
Car.belongsTo(Manufacturer)

Car.hasMany(OrderCar)
OrderCar.belongsTo(Car)

Car.hasMany(CarInfo)
CarInfo.belongsTo(Car)

Type.belongsToMany(Manufacturer,{through: TypeManufacturer})
Manufacturer.belongsToMany(Type,{through: TypeManufacturer})

module.exports = {
    User, Order, Manufacturer, OrderCar, Car, CarInfo, Type, TypeManufacturer
}