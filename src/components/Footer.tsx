import React from 'react';
import { version } from '../../package.json';

const Footer = () => {
    return (
        <footer>
            <p>Gloomhaven Stamina Calculator</p>
            <p>© 2019 Ronald Martin</p>
            <p><strong>v{version}</strong> <a href="https://github.com/ronaldsmartin/gloomhaven-stamina-calculator">Source on GitHub</a></p>
            <p><a href="https://boardgamegeek.com/boardgame/174430/gloomhaven">Gloomhaven</a> and all related content belong to <a href="http://www.cephalofair.com/gloomhaven">Cephalofair Games</a>, <a href="https://boardgamegeek.com/boardgame/174430/gloomhaven/credits">et al</a>. I do not profit from this work.</p>
        </footer>
    )
}
export default Footer;