import React, { useEffect, useState} from 'react';
import Layout from "../utils/Layout";
import classes from "../scss/CarPage.module.scss";
import {useParams} from 'react-router-dom'
import {observer} from "mobx-react-lite";
import {fetchOneCar} from "../http/carAPI";
import notFoundPic from '../graphics/not-found.png'
import ReactPlayer from 'react-player'
import SendMessage from '../components/modals/SendMessage'

const CarPage = observer(() => {
    const {id} = useParams();
    const [SendMessageVisible, setSendMessageVisible] = useState(false)
    const [car, setCar] = useState({images: []});
    const [selectedImg,setSelectedImg] = useState(0)

    useEffect(() => {
        setSelectedImg(0);
    },[])

    useEffect( () => {
        fetchOneCar(id).then(data => setCar(data));
    },[id]);
    return (
        <Layout>
            <div className={classes.CarPage}>
                <div className={classes['CarPage__visual']}>
                    <p className={classes['CarPage__title']}>{car.manufacturerName} {car.nameName}, {car.year} год</p>
                    <div className={classes['CarPage__visual-images']}>
                        {car.images.length && selectedImg !== 'video'?
                            <div
                                className={classes['CarPage__visual-images-main']}
                                style={{
                                    backgroundImage: `url("${process.env.REACT_APP_API_URL}${car.images[selectedImg].img}")`
                                }}
                            >
                            </div>
                            :
                            <div
                                className={classes['CarPage__visual-images-main']}
                            >
                            <ReactPlayer
                                className={classes['CarPage__visual-images-main-video']}
                                controls
                                url = {process.env.REACT_APP_API_URL + car.video}
                            />
                            </div>
                        }

                        <div className={classes['CarPage__visual-images-extends']}>
                            {car.images.length ? car.images.map((image,index) =>
                                <div
                                    className={classes['CarPage__visual-images-extends-item']}
                                    style={index == selectedImg ? {border:"3px solid white", backgroundImage: `url("${process.env.REACT_APP_API_URL}${image.img}")`}
                                        : {border:"1px solid grey", backgroundImage: `url("${process.env.REACT_APP_API_URL}${image.img}")`}}
                                    key={index}
                                    onClick={() => setSelectedImg(index)}
                                />
                            ) : <span/>

                            }
                            <div
                                className={classes['CarPage__visual-images-extends-item']}
                            >
                                <ReactPlayer
                                    className={classes['CarPage__visual-images-extends-item-video']}
                                    url = {process.env.REACT_APP_API_URL + car.video}
                                    onClick={() => setSelectedImg('video')}
                                />
                            </div>

                        </div>

                    </div>
                </div>
                <div className={classes['CarPage__info']}>
                    <p className={classes['CarPage__info-price']}><b>{car.price}</b> ₽</p>

                    <div className={classes['CarPage__info-details']}>
                        <div className={classes['CarPage__info-details-item']}>
                            <p className={classes['CarItem__params-details-item-def']}>Двигатель:</p>
                            <p className={classes['CarItem__params-motor']}>{car.motor}</p>
                        </div>

                        <div className={classes['CarPage__info-details-item']}>
                            <p className={classes['CarItem__params-details-item-def']}>Привод:</p>
                            <p className={classes['CarItem__params-drive']}>{car.drive}</p>
                        </div>

                        <div className={classes['CarPage__info-details-item']}>
                            <p className={classes['CarItem__params-details-item-def']}>Пробег:</p>
                            <p className={classes['CarItem__params-mileage']}>{car.mileage !== 0 ? car.mileage + ' км' : 'без пробега'}</p>
                        </div>

                        <div className={classes['CarPage__info-details-item']}>
                            <p className={classes['CarItem__params-details-item-def']}>Город:</p>
                            <p className={classes['CarItem__params-city']}>{car.city}</p>
                        </div>

                        <div className={classes['CarPage__info-details-item']}>
                            <p className={classes['CarItem__params-details-item-def']}>Дата добавления:</p>
                            <p className={classes['CarItem__params-date']}>{car.date}</p>
                        </div>
                        <div className={classes['CarPage__info-details-item']}>
                            <p className={classes['CarItem__params-details-item-def']}>Описание:</p>

                        </div>
                        <p className={classes['CarItem__params-description']}>{car.description}</p>
                        <div
                            className={classes['CarPage__info-details-button']}
                            onClick={()=> setSendMessageVisible(true)}
                        >
                            Купить
                        </div>

                        <SendMessage
                            car={car}
                            visible={SendMessageVisible}
                            setSendMessageVisible={setSendMessageVisible}
                        />

                    </div>
                </div>
            </div>
        </Layout>
    );
})

export default CarPage;