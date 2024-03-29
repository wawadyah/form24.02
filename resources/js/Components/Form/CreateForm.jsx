import React from 'react'
import FormHeader from './FormHeader'
import QuestionForm from './QuestionForm'
import Field from './Field'
import FormSection from './FormSection'

const CreateForm = (  {uuid} ) => {
 


  return (
    <div>
        <FormHeader uuid ={ uuid } />
        
        <QuestionForm uuid ={ uuid } />
    </div>
  )
}

export default CreateForm