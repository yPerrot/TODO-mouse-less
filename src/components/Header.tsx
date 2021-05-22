import { FC } from 'react'

interface propsHeader {
    changeOrder: () => void
}

const Header:FC<propsHeader> = ({ changeOrder }) => {
    return (
        <header>
            <p>MyHeader</p>
            <div className="tools">
                <button onClick={changeOrder} tabIndex={-1}>Change order</button>
            </div>
        </header>
    )
}

export default Header