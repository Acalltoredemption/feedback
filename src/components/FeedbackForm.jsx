import Card from "./shared/Card"
import Button from "./shared/Button";
import {useState} from 'react';

export default function FeedbackForm() {
    const [text, setText] = useState('')
    const [btndisabled, setBtndisabled] = useState(true)
    const [message, setMessage] = useState('')

    const handleTextChange = (e) => {
        if(text === ''){
            setBtndisabled(true)
            setMessage(null)
        } else if (text !== '' && text.trim().length <= 10){
            setBtndisabled(true)
            setMessage('Review must have a length of 10 characters.')
        } else {
            setBtndisabled(false)
            setMessage(null)
        }
        setText(e.target.value)
    }
  return (
    <Card>
        <form>
            <h2>How would you rate your service with us?</h2>
            <div className="input-group">
                <input onChange={handleTextChange} type="text" value={text} placeholder="Write a review" />
                <Button type="submit" isDisabled={btndisabled}>Send</Button>
            </div>

            {message && <div className="message">{message}</div>}
        </form>
    </Card>
  )
}
