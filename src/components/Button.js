import PropTypes from 'prop-types'

const Button = ({ text, onClick, style }) => {
    return (
        <button onClick={onClick} style={style}>
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
