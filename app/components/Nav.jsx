var React = require('react'),
    {Link, IndexLink}= require('react-router');

var Nav = () => {
    return (
        <div className="top-bar">
            <div className="top-bar-left">
                <ul className="menu">
                    <li className="menu-text">React Timer</li>
                    <li>
                        <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
                    </li>
                    <li>
                        <Link to="/" activeClassName="active-link">Countdown</Link>
                    </li>
                </ul>
            </div>
            <div className="top-bar-right">
                <ul className="menu">
                    <li className="menu-text">
                        Crated by <a href="http://www.github.com/mjzone" target="_blank"> Manoj Fernando </a>
                    </li>
                </ul>
            </div>
        </div>
    )
};

module.exports = Nav;
