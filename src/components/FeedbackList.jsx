import FeedbackItem from "./FeedbackItem"
import Spinner from "./shared/Spinner"
import {motion, AnimatePresence} from 'framer-motion'
import {useContext} from 'react'
import FeedbackContext from "../context/FeedbackContext"

function FeedbackList() {
  const {feedback, isLoading} = useContext(FeedbackContext)

    if(!isLoading && (!feedback || feedback.length === 0)){
        return <p>No Feedback Yet</p>
    }

    return isLoading ? <Spinner /> : (
      <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div initial={{opacity: 0}}
           key={item.id}
           animate={{opacity: 1}}
           exit={{opacity: 0}}>
            <FeedbackItem key={item.id} item={item} />
            </motion.div>
))}
      </AnimatePresence>
    </div>
    )
}


export default FeedbackList