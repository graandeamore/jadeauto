import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card} from "react-bootstrap";

const NameBar = observer(() => {
    const {car} = useContext(Context)
    return (
        <div>
            {car.cars.map(name =>
            <Card
                style={{cursor:"pointer", color:'black'}}
                key={name.id}
                onClick={()=> car.SetSelectedName(name)}
                border={name.id === car.selectedName.id ? 'danger' : 'light'}
            >
                {name.name}
            </Card>
            )}
        </div>
    );
})
export default NameBar;