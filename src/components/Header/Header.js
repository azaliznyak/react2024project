import React from 'react';
import css from './Header.module.css'



const Header = ({toggleTheme, theme}) => {


    return (
        <div className={`${css.Header} ${css[theme]}`}>
            <div className={css.MovieIcon}>
                <h2 >MoviePulse</h2>
                <div className={css.icon}></div>
                {/*<div className={css.icon2}></div>*/}


            </div>

            <div className={css.UserIcon}>
            <div className={css.icon2}></div>

            </div>
            <button className={`${css.toggle} ${css[theme]}`} onClick={toggleTheme}></button>







            
        </div>
    );
};

export {Header};