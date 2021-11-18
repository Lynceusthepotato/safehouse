import PropTypes from 'prop-types'

const Button = ({ text, onClick }) => {
    return (
        <button onClick={onClick}>
            {text}
        </button>
    )
}

Button.defaultProps = {
    text: "Login",
    color: 'DarkSlateGray',
    onClick : "",
}

Button.propTypes = {
    color: PropTypes.string,
}

export default Button
