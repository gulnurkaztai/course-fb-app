import { createContext, useState } from "react"
import {v4 as uuidv4} from "uuid"

 const FeedbackContext = createContext()

export const FeedbackProvider =({children})=>{
    const [feedback,setFeedback] = useState([
        {
            id: 1,
            text: "An amazing course if you are looking forward to become a Front End Developer. Mentors and coordinators really root for your success. Syllabus is very well-structured and the emphasis is placed on foundational knowledge. Would I recommend this course to my friends? ABSOLUTELY! Samat, Aruzhan, Aidana, and Dalida, thank you so much for everything 💚 - Gulnur, Batch 27",
            rating:10
        }
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        idet: false
    })

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete')){
          setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const editFeedback = (item) =>{
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    const updateFeedback = (id, updItem)=>{
        setFeedback(
            feedback.map((item)=>(item.id === id? {...item, ...updItem}: item))
            )
        setFeedbackEdit({
            item: {},
            edit: false,
        })
    }


    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        deleteFeedback, 
        addFeedback,
        editFeedback,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext 