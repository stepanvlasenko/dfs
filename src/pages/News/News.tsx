import BaseAlert from '../../components/BaseAlert/BaseAlert'
import './News.css'

interface INews {
    type: 'Акция' | 'Новость'
    date: string
    title: string
    heading?: string
    paragraphs: string[]
}

export default function News() {

    const news: INews[] = [
        {
            type: 'Акция',
            date: '01.11.2023',
            title: 'Фитнес по правилам выгоды! Год по цене 6 месяцев',
            heading: 'Планируйте свой фитнес-год уже сейчас!',
            paragraphs: [
                'Холода не страшны, когда настроение на высоте! Поднимаем его самым выгодным предложением осени. Приобретайте клубную карту на 9 месяцев с 3 месяцами заморозки по цене полугода. Тренируйтесь в XFIT и заряжайтесь энергией и позитивом!',
                'Предложение действует не во всех клубах XFIT, подробности акции уточняйте в отделе продаж.'
            ],
        },
        {
            type: 'Акция',
            date: '04.10.2023',
            title: 'Запишите на наш счет! Фитнес в подарок до конца года',
            paragraphs: [
                'Осень – время заряжаться энергией и позитивом!',
                'Для всех, кто предпочитает делать это с помощью физической активности, в клубах XFIT действует специальное предложение на карты от года. При оформлении абонемента вы получаете 90 бесплатных дней и скидку 15%.',
                'Подробности акции уточняйте в отделе продаж клуба.'
            ],
        },
        {
            type: 'Новость',
            date: '01.05.2023',
            title: 'Тренируйтесь на все 100!',
            heading: 'Тренируйтесь на все 100! Дарим 100 дней фитнеса!',
            paragraphs: [
                'Еще больше дней на любимые тренировки!',
                'Приобретайте в мае клубную карту сроком от года и получайте в подарок три месяца фитнеса.',
                'Подробности акции уточняйте в отделе продаж клуба. Предложение действует не во всех франчайзиноговых клубах.'
            ],
        },
    ]

    const newsMap = news.map((v, i) => (
        <BaseAlert key={i} data={{
            buttonContent: <div className='news__trigger'><p className='text--black'>{v.title}</p><p className='text--green'>{v.date} {v.type}</p></div>,
            title: v.heading ? v.heading : v.title,
            content: <div className='news__paragraphs'>{v.paragraphs.map((par, parI) => <p key={parI}>{par}</p>)}</div>,
            buttonClose: <p>Закрыть</p>,
        }}/>
    ))

    return (
        <div className='page'>
            <h1 className='text--purple'>Новости</h1>
            <div className='news--container'>
                {newsMap}
            </div>
        </div>
    )
}