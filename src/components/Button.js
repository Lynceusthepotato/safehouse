import PropTypes from 'prop-types'

const Button = ({ text }) => {
    return (
        <button>
            {text}
        </button>
    )
}

Button.defaultProps = {
    text: "Login",
    color: 'DarkSlateGray',
}

Button.propTypes = {
    color: PropTypes.string,
}

export default Button
