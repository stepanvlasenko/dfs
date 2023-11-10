import './Tariffs.css'
import BaseAccordion from '../../components/BaseAccordion/BaseAccordion';
import BaseList from '../../components/BaseList/BaseList';

export default function Tariffs() {
    return (
        <div className='page'>
            <h1 className='text--purple'>Клубные карты</h1>
            <BaseAccordion elements={[
                {
                    title: <h2 className='text--black'>Индивидуальная</h2>,
                    content: <BaseList elements={[
                        <p className='text--black'>Срок действия 365 дней</p>,
                        <p className='text--black'>Заморозка 45 дней</p>,
                        <p className='text--black'>Доступ во все зоны клуба</p>,
                        <p className='text--black'>Наличие стартового пакета</p>
                    ]}/>
                },
                {
                    title: <h2 className='text--black'>Индивидуальная+</h2>,
                    content: <BaseList elements={[
                        <p className='text--black'>Срок действия 730 дней</p>,
                        <p className='text--black'>Заморозка 90 дней</p>,
                        <p className='text--black'>Доступ во все зоны клуба</p>,
                        <p className='text--black'>Наличие стартового пакета</p>
                    ]}/>
                },
                {
                title: <h2 className='text--black'>Корпоративная</h2>,
                content: <BaseList elements={[
                    <p className='text--black'>Срок действия 365 дней</p>,
                    <p className='text--black'>Заморозка 45 дней</p>,
                    <p className='text--black'>Доступ во все зоны клуба</p>,
                    <p className='text--black'>Наличие стартового пакета</p>
                ]}/>
                },
                {
                    title: <h2 className='text--black'>Корпоративная+</h2>,
                    content: <BaseList elements={[
                        <p className='text--black'>Срок действия 730 дней</p>,
                        <p className='text--black'>Заморозка 60 дней</p>,
                        <p className='text--black'>Доступ во все зоны клуба</p>,
                        <p className='text--black'>Наличие стартового пакета</p>
                    ]}/>
                },
                {
                    title: <h2 className='text--black'>Дневная</h2>,
                    content: <BaseList elements={[
                        <p className='text--black'>Срок действия 365 дней</p>,
                        <p className='text--black'>Заморозка 30 дней</p>,
                        <p className='text--black'>Доступ во все зоны клуба</p>,
                        <p className='text--black'>Наличие стартового пакета</p>,
                        <p className='text--black'>Только с 7 до 17 часов</p>
                    ]}/>
                },{
                    title: <h2 className='text--black'>Детская</h2>,
                    content: <BaseList elements={[
                        <p className='text--black'>Срок действия 365 дней</p>,
                        <p className='text--black'>Заморозка 45 дней</p>,
                        <p className='text--black'>Доступ во все зоны клуба</p>,
                        <p className='text--black'>Наличие стартового пакета</p>,
                        <p className='text--black'>Только для возраста 3 - 14 лет</p>
                    ]}/>
                },
            ]} />   
            <p>Стартовый пакет включает в себя фитнес-тестирование, вводное занятие в тренажерном зале, зоне групповых программ и бассейне, комплимент от бара, spa-услугу в подарок, а так же один гостевой визит.</p>

        </div>
    )
}