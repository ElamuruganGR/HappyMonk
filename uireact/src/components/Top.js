import react from 'react';
import '../scss/top.scss'
export const Top = () => {
    return(
        <div className="top">
            <div className="main-heading">
                <p className="greeting">Hello Dave, Welecome back</p>
                <p className="heading">Your Dashboard is updated</p>
            </div>
            <div className="top-right">
                <img src="/images/top/Bell.svg" alt="Bell" />
                <img src="/images/top/Setting.svg" alt="Setting" />
                <img src="/images/top/Avatar.svg" alt="Avatar" />
            </div>
        </div>
    )
}