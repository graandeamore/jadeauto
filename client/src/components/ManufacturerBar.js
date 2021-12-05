import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import classes from "../scss/ManufacturerBar.module.scss";
import {ListGroup} from "react-bootstrap";

const ManufacturerBar = observer (() => {
    const {car} = useContext(Context)
    return (                                            // MAKE IT WITHOUT BOOTSTRAP
        <ListGroup>
            {car.manufacturers.map(manufacturer =>
                <ListGroup.Item
                    style={{cursor:"pointer"}}
                    key={car.id}
                    active={manufacturer.id === car.selectedManufacturer.id}
                    onClick={() => car.SetSelectedManufacturer(manufacturer)}
                >
                    {manufacturer.name}
                </ListGroup.Item>
            )}
        </ListGroup>

    );
})
export default ManufacturerBar;