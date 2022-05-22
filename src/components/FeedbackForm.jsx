import Card from "./shared/Card"
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import {useState} from 'react';

export default function FeedbackForm({handleAdd}) {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
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

    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length > 10){
            const newFeedback = {
                text,
                rating
            }

            handleAdd(newFeedback)

            setText('')
        }
    }
  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us?</h2>
            <RatingSelect select={(rating) => setRating(rating)} />
            <div className="input-group">
                <input onChange={handleTextChange} type="text" value={text} placeholder="Write a review" />
                <Button type="submit" isDisabled={btndisabled}>Send</Button>
            </div>

            {message && <div className="message">{message}</div>}
        </form>
    </Card>
  )
}
