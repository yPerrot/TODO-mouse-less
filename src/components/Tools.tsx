import { FC } from 'react'


interface propsTools {
    changeOrder: () => void
}

const Tools:FC<propsTools> = ({ changeOrder }) => {

    return (
        <div className="tools">
            <button onClick={changeOrder}>Change order</button>
        </div>
    )
}

export default Tools;