import Header from '@/Components/Form/Header'
import MainBody from '@/Components/Form/MainBody'
import React from 'react'


const Dash = (props) => {
    console.log(props.uuid);
    console.log(props.forms)
  return (
    <div>
        <Header />
        <MainBody uuid = {props.uuid} forms={ props.forms } />
    </div>
  )
}

export default Dash