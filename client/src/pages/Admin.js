//admin panel
import React, {useState} from 'react';
import Layout from "../utils/Layout";
// import classes from "*.module.scss";
import CreateName from "../components/modals/CreateName";
import CreateManufacturer from "../components/modals/CreateManufacturer";
import CreateCar from "../components/modals/CreateCar";
const Admin = () => {
    const [ManufacturerVisible, setManufacturerVisible] = useState(false)
    const [NameVisible, setNameVisible] = useState(false)
    const [CarVisible, setCarVisible] = useState(false)
    return (
        <Layout>
            <div>
                <button onClick={()=> setManufacturerVisible(true)}>Добавить производителя</button>
                <button onClick={()=> setNameVisible(true)}>Добавить наименование</button>
                <button onClick={()=> setCarVisible(true)}>Добавить машину</button>
            </div>
            <CreateManufacturer
                visible={ManufacturerVisible}
                setManufacturerVisible={setManufacturerVisible}
            />
            <CreateName
                visible={NameVisible}
                setNameVisible={setNameVisible}
            />
            <CreateCar
                visible={CarVisible}
                setCarVisible={setCarVisible}
            />

        </Layout>
    );
};

export default Admin;