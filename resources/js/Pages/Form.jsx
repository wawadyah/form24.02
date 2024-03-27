import CreateForm from '@/Components/Form/CreateForm'
import React from 'react'


const Form = ({ uuid }) => {
  return (
    <div>
        <CreateForm uuid = { uuid }/>        
    </div>
  )
}

export default Form