import styles from './DropDownMenu.module.css'
import caretIcon from '../../../assets/caret.svg'
import { useEffect, useRef, useState } from 'react'
import useClickOutside from '../../../hooks/useClickOutside'

const DropDownMenu = ({ className, items, current, onChange }) => {
    const [showMenu, setShowMenu] = useState(false)
    const ref = useClickOutside(() => setShowMenu(false))
    return (
        <div ref={ref} className={styles['dropdown-menu'] + ' ' + (className || '')}>
            <button onClick={() => setShowMenu(!showMenu)} className={styles['dropdown-btn']}>
                <span>{current}</span>
                <img style={{
                    transform: showMenu ? 'rotate(180deg)' : 'none'
                }} src={caretIcon}></img>
            </button>
            <ul style={{
                display: showMenu ? 'block' : 'none'
            }} className={styles['dropdown-items']}>
                {items.map((item, i) => {
                    return <li key={i} className={styles['dropdown-item'] + (item == current ? (' ' + styles['active']) : '')}><button onClick={() => onChange(item)}>{item}</button></li>
                })}
            </ul>
        </div>
    )
}

export default DropDownMenu;