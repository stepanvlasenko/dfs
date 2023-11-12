import React from 'react';
import './DropdownButton.css'

interface DropdownButtonProps {
    isdropdownactive: boolean
}

const DropdownButton = React.forwardRef(({isdropdownactive, ...props}: DropdownButtonProps, forwardedRef: React.ForwardedRef<HTMLButtonElement>) => {
    return (
        <button {...props} ref={forwardedRef}  className='dropdown__button'>
            <img className={`dropdown__image ${isdropdownactive ? 'dropdown__image--active' : ''}`} src='/images/dropdown.svg'/>
        </button>
        )
    }
);

export default DropdownButton