import React from 'react'
import FieldInput from '../Question/FieldInput'
import Field from './Field'
import QuestionAdd from './QuestionAdd'

const QuestionForm = () => {

    const [orderPopup, setOrderPopup] = React.useState(false);

    const handleOrderPopup = () => {
      setOrderPopup(!orderPopup);
    };

  return (
    <div>
        <div className='questionForm bg-[#F4f4f9] h-full pb-[30px]'>
            <br></br>
            <div className='section m-auto w-1/2'>
                <div className='title'>
                    <div className='formTop bg-white border-t-8 border-form rounded-lg py-[20px] px-[25px]'>
                        <input
                            type="text"
                            className="questionTopName box-border text-[32px] font-medium leading-[40px] w-full border-none outline-none text-black h-[35px] placeholder-gray-400"
                            placeholder='Untitled Document'
                        />
                        <input
                            type="text"
                            className='questionTopdesc box-border mt-5 text-[13px] leading-[40px] w-full border-none outline-none border-b border-[#F4F4F9] h-10'
                            placeholder='Form Description'
                        />
                    </div>
                </div>
                <FieldInput />
                {/* <Field  /> */}
                <QuestionAdd />
            </div>
        </div>
    </div>
  )
}

export default QuestionForm