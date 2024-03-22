import styles from './LocalisationSelector.module.css' 
import caretIcon from '../../../../../assets/caret.svg'

const LocalisationSelector = () => {
    return (
        <div className={styles['location-selector-wrapper']}>
            <button className={styles['location-selector']}>
                <span>EUR € | Spain</span>
                <img src={caretIcon}></img>
            </button>
        </div>
    )
}

export default LocalisationSelector;