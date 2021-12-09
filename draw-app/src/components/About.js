import React from 'react';
import {Button} from 'react-bootstrap'

const About = () => {
    return (
        <div className="blockText">
            <p>
                <h1>Индивидуальное задание на предмет "Методы искуственного интеллекта"</h1>
                <h1>Тема: распознавание рукописных цифр</h1>
                <h1>Выполнила: студентка группы ПИбд-32 Павлова Мария </h1>
            </p>
            <h3>О приложении</h3>
            
            <ul>
                <li>Клиентское приложение реализовано на React.js. Для отправки и получения данных от сервера используются http-запросы </li>
                <li>Серверная сторона реализована с помощью фреймворка Django</li>
            </ul>
            <h3>О реализации нейронной сети</h3>
            <ul>
                <li>Используемые библиотеки: keras.</li>
                <li>Для обучения модели использовался MNIST dataset.</li>
            </ul>
            <p></p>
            <Button href='/draw' variant='secondary'>GO</Button>
        </div>
    )
}

export default About;