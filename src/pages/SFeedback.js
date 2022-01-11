import { useState } from 'react'

const SFeedback = () => {
    const [feedback, setFeedback] = useState('')

    const onSubmit = async(e) => {
        e.preventDefault()
    }

    return (
        <div>
            <div className="form-box">
                <form id= "LoginForm" onSubmit={onSubmit}>
                    <textarea className="input-field" placeholder= "feedback" name="feedback" value={feedback} onChange={(e) => setFeedback(e.target.value)} />
                    <input type="submit" className="submit-btn" id="update" value= "update"/>   
                </form>
            </div>
        </div>
    )
}

export default SFeedback
