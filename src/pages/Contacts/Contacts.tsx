import React from 'react'
import ReactDOM from "react-dom"
import BaseList from '../../components/BaseList/BaseList'
import './Contacts.css'

const ymaps3Reactify = await ymaps3.import('@yandex/ymaps3-reactify')
const reactify = ymaps3Reactify.reactify.bindTo(React, ReactDOM)
const {YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } = reactify.module(ymaps3)

export default function Contacts() {
    return (
        <div className='page'>
            <h1 className='text--purple'>Контакты</h1>
            <BaseList elements={[
                <p>Телефон: <a className='text--green' href='tel:+74732120704'>+7 (473) 212-07-04</a></p>,
                <p>Электронная почта: <a className='text--green' href="mailto:rossosh.xfit@mail.ru">rossosh.xfit@mail.ru</a></p>,
                <p>Адрес: <span className='text--green'>г. Россошь, ул. Пл. Октябрьская, д. 18а</span></p>
            ]}/>
            <div className='contacts__map'>
                <YMap location={{center: [39.540543, 50.200203], zoom: 17}} mode="vector" behaviors={['drag']}>
                    <YMapDefaultSchemeLayer />
                    <YMapDefaultFeaturesLayer />
                    <YMapMarker coordinates={[39.540543, 50.200203]} >
                        <img className='map__marker' src="/src/assets/images/map-baloon.svg" />
                    </YMapMarker>
                </YMap>
            </div>
        </div>
    )
}