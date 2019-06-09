import React from 'react'
import PropTypes from 'prop-types'

import prglogo from '../images/gatsby-icon.png'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        {/*<div className="logo">
            <span className="icon fa-diamond"></span>
        </div>*/}
        <div className="content">
            <div className="inner">
                <h1>Popone Realty Group</h1>
                <p>Edilizia a scopo residenziale abitativo e direzionale.<br />Terreni edificabili in via Popone a Udine.
                </p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Terreni</a></li>
                {/*<li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Progetti</a></li>*/}
                {/*<li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>*/}
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contatti</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
