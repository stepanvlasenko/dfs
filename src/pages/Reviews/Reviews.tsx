import BaseAccordion from '../../components/BaseAccordion/BaseAccordion'
import './Reviews.css'

interface IReview {
    name: string
    surname: string
    content: string
}

export default function Reviews() {

    const reviews: IReview[] = [
        {
            name: 'Александра',
            surname: 'Соколова',
            content: 'Вежливый персонал, чисто, удобный график работы',
        },
        {
            name: 'Олег',
            surname: 'Шипулин',
            content: 'Современный, просторный зал. Приветливый персонал. Нормальные цены.',
        },
    ]
    
    const reviewsMap = reviews.map((v) => {
        return {
            title: <h2 className='text--black'>{`${v.name} ${v.surname}`}</h2>,
            content: <p className='text--black'>{v.content}</p>
        }
    })

    return (
        <div className='page'>
            <h1 className='text--purple'>Отзывы</h1>
            <BaseAccordion elements={reviewsMap}/>
        </div>
    )
}