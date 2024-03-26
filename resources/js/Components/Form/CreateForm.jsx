import React from 'react'
import FormHeader from './FormHeader'
import QuestionForm from './QuestionForm'
import Field from './Field'

const CreateForm = (  {uuid} ) => {
 


  return (
    <div>
        <FormHeader />
        
        <QuestionForm uuid ={ uuid } />
    </div>
  )
}

export default CreateForm