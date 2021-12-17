//admin panel
import React, {useState} from 'react';
import Layout from "../utils/Layout";
import CreateName from "../components/modals/CreateName";
import CreateManufacturer from "../components/modals/CreateManufacturer";
import CreateCar from "../components/modals/CreateCar";

const Admin = () => {
    const [ManufacturerVisible, setManufacturerVisible] = useState(false)
    const [CarNameVisible, setCarNameVisible] = useState(false)
    const [CarVisible, setCarVisible] = useState(false)


    return (
        <Layout>
            <div>
            <div>
                <button onClick={()=> setManufacturerVisible(true)}>Добавить производителя</button>
                <button onClick={()=> setCarNameVisible(true)}>Добавить наименование</button>
                <button onClick={()=> setCarVisible(true)}>Добавить машину</button>
            </div>
            <CreateManufacturer
                visible={ManufacturerVisible}
                setManufacturerVisible={setManufacturerVisible}
            />
            <CreateName
                visible={CarNameVisible}
                setNameVisible={setCarNameVisible}
            />
            <CreateCar
                visible={CarVisible}
                setCarVisible={setCarVisible}
            />
        </div>
        </Layout>


    );
};

export default Admin;