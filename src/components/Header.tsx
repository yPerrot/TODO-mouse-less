import { FC } from 'react'

interface propsHeader {
    changeOrder: () => void
}

const Header:FC<propsHeader> = ({ changeOrder }) => {
    return (
        <header>
            <div>
                MyHeader
            </div>
            <div className="tools">
                <button onClick={changeOrder}>Change order</button>
            </div>
        </header>
    )
}

export default Header