import {createContext, useState} from 'react'
import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
        const [feedback, setFeedback] = useState([
            {
                id: 1,
                text: 'This item is from the context',
                rating: 10
            }
        ])

        const [feedbackEdit, setFeedbackEdit] = useState({
            item: {},
            edit: false
        })
//delete feedback
        const deleteFeedback = (id) => {
            if(window.confirm('Are you sure you want to delete?')){
                setFeedback(feedback.filter((item) => item.id !== id ))
            }
        }

  // add feedback      
         const addFeedback = (newFeedback) => {
           newFeedback.id = uuidv4()
           console.log(newFeedback)
           setFeedback([newFeedback, ...feedback])
           }
//set item to be updated
        const editFeedback = (item) => {
            setFeedbackEdit({
                item,
                edit: true
            })
        }
//upodate feedback item
        const updateFeedback = (id, updItem) => {
            setFeedback(feedback.map((item) => item.id === id ? {...item, ...updItem} : item))
        }

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext