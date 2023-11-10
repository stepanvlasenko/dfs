import './BaseMediaCard.css'

interface IBaseMediaCardData {
    title: React.ReactNode
    imageSrc: string[]
}

interface BaseMediaCardProps {
    data: IBaseMediaCardData
}

export default function BaseMediaCard({data, ...props}: BaseMediaCardProps) {

    const imagesMap = data.imageSrc.map((v, i) => (
        <img className='BaseMediaCard__image' src={v} key={i}/>
    ))
    
    return (
        <div {...props} className='BaseMediaCard'>
            {data.title}
            <div className='BaseMediaCard__images'>
                {imagesMap}
            </div>
        </div>
    )
}