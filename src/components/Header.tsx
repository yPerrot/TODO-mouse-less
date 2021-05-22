import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortAmountDownAlt, faSortAmountUp } from '@fortawesome/free-solid-svg-icons'

interface propsHeader {
    isAscendingOrder: boolean
    changeOrder: () => void
}

const Header:FC<propsHeader> = ({ isAscendingOrder, changeOrder }) => {
    return (
        <header>
            <p>Today's tasks</p>
            <div className="tools">
                <button onClick={changeOrder} tabIndex={-1}>
                    <FontAwesomeIcon className="order-icon" icon={isAscendingOrder ? faSortAmountUp : faSortAmountDownAlt} />
                </button>
            </div>
        </header>
    )
}

export default Header