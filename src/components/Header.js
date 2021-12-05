import PropTypes from "prop-types"

const Header = ({ title, className }) => {
    return (
        <header className = {className}>
            <h1> { title } </h1>
        </header>
    )
}

Header.defaultProps = {
    title: "Safe House"
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header
