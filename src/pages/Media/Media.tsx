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
            '/src/assets/images/media/mtxPcHfwJII.jpg',
            '/src/assets/images/media/IF8sull6iM0.jpg',
            '/src/assets/images/media/g4uOfb8rm2U.jpg',
        ],
    },
    {
        title: 'Персональный тренер Евгения Браташ!',
        imageSrc: [
            '/src/assets/images/media/WfoyIA4aQLk.jpg',
            '/src/assets/images/media/Xh7324rgxmY.jpg',
            '/src/assets/images/media/sApFFvcFCQw.jpg',
            '/src/assets/images/media/3AoOpxKUOZY.jpg',
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