import React from 'react'
import cl from './MyModal.module.css'
const MyModal = ({ children, visable, setVisible }) => {

    const rootClasses = [cl.myModal]

    if (visable) {
        rootClasses.push(cl.active)
    }

    return (
        <div onClick={() => setVisible(false)} className={rootClasses.join(' ')}>
            <div className={cl.myModalContent} onClick={e => e.stopPropagation()}>
                {children}

            </div>
        </div>
    )
}

export default MyModal