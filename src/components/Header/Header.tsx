import { useState } from 'react'
import './Header.css'
import { DropdownMenu } from '@radix-ui/themes'
import DropdownButton from '../DropdownButton/DropdownButton'
import { Link } from 'react-router-dom'

export default function Header() {
    const [isDropdownActive, setDropdownActive] = useState(false)

    const handleClick = () => {
        setDropdownActive((v) => !v)
    }

    return (
        <div className='header'>
            <DropdownMenu.Root onOpenChange={handleClick}>
                <DropdownMenu.Trigger>
                    <DropdownButton isdropdownactive={isDropdownActive} />
                </DropdownMenu.Trigger>
                <DropdownMenu.Content>
                    <DropdownMenu.Item className='navigation__item'>
                        <Link to={'/'}>
                            <h2>О клубе</h2>
                        </Link>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className='navigation__item'>
                        <Link to={'/tariffs'}>
                            <h2>Тарифы</h2>
                        </Link>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className='navigation__item'>
                        <Link to={'/media'}>
                            <h2>Медиа</h2>
                        </Link>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className='navigation__item'>
                        <Link to={'/contacts'}>
                            <h2>Контакты</h2>
                        </Link>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className='navigation__item'>
                        <Link to={'/reviews'}>
                            <h2>Отзывы</h2>
                        </Link>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className='navigation__item'>
                        <Link to={'/news'}>
                            <h2>Новости</h2>
                        </Link>
                    </DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Root>
            <div className='header__logo'>
                <img className='logo__image' src="/src/assets/images/xfit-logo.png" alt="" />
            </div>
        </div>
    )
}