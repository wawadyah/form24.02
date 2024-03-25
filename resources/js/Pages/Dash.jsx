import Header from '@/Components/Form/Header'
import MainBody from '@/Components/Form/MainBody'
import React from 'react'


const Dash = (props) => {
    console.log(props.uuid);
  return (
    <div>
        <Header />
        <MainBody uuid = {props.uuid}/>
    </div>
  )
}

export default Dash