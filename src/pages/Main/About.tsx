import BaseList from '../../components/BaseList/BaseList'
import './About.css'

export default function About() {
    return (
        <div className='page'>
            <div>
                <h1 className='text--purple'>О клубе</h1>
                <p>Xfit Studio Россошь – это современная фитнес-студия в городе Россошь. Уютное и стильное пространство, оборудованное качественными и самыми необходимыми тренажерами, обеспечивает комфортные и безопасные занятия для каждого члена клуба.</p>
            </div>
            <div>
                <h1 className='text--purple'>Преимущества</h1>
                <BaseList elements={[
                    <div>
                        <h3>Smart Fitness</h3>
                        <p>Уникальная система тренировок, развивает основные физические качества и приводит к стойким результатам.</p>
                    </div>,
                    <div>
                        <h3>Групповые программы</h3>
                        <p>Спектр тренировок включает форматы на основе системы Smart Fitness и много актуальных и интересных направлений.</p>
                    </div>
                ]} />
            </div>
            <BaseList title={<h1 className='text--purple'>Время работы</h1>} elements={[
                <p>Поненельник - Пятница: <span className='text--green'>7:00 - 22:00</span></p>,
                <p>Суббота - Воскресенье: <span className='text--green'>8:00 - 22:00</span></p>,
                <p>Праздники: <span className='text--green'>8:00 - 22:00</span></p>
            ]} />
        </div>
    )
}