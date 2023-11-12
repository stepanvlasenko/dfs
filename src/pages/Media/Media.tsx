import './Media.css'
import BaseMediaCard from '../../components/BaseMediaCard/BaseMediaCard'

interface MeidaCardData {
    title: string
    imageSrc: string[]
}

const data: MeidaCardData[] = [
    {
        title: 'Персональный тренер Александр Антоненко!',
        imageSrc: [
            '/images/media/mtxPcHfwJII.jpg',
            '/images/media/IF8sull6iM0.jpg',
            '/images/media/g4uOfb8rm2U.jpg',
        ],
    },
    {
        title: 'Персональный тренер Евгения Браташ!',
        imageSrc: [
            '/images/media/WfoyIA4aQLk.jpg',
            '/images/media/Xh7324rgxmY.jpg',
            '/images/media/sApFFvcFCQw.jpg',
            '/images/media/3AoOpxKUOZY.jpg',
        ]
    }
]

export default function Media() {

    const dataMap = data.map((v, i) => (
        <BaseMediaCard key={i} data={{
            title: <h2>{v.title}</h2>,
            imageSrc: v.imageSrc,
        }}/>
    ))

    return (
        <div className='page'>
            <h1 className='text--purple'>Медиа</h1>
            {dataMap}
        </div>
    )
}