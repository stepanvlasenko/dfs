import './BaseList.css'

interface BaseListProps {
    elements: React.ReactNode[],
    title?: React.ReactNode, 
}

export default function BaseList(props: BaseListProps) {
    const listElements = props.elements.map((v, i) => {
        return <li key={i} className='baselist__item'>{v}</li>
    })
    
    return (
        <div>
            {props?.title}
            <ul className='baselist'>
                {listElements}
            </ul>
        </div>
    )
}