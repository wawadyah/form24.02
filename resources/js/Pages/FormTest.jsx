import React from 'react'

const FormTest = ({ form }) => {
    console.log(form)
    const questions = form.question;
    console.log(questions)
return(
    <>
    <div>
        <div className='questionForm bg-[#F4f4f9] h-full pb-[30px]'>
            <br></br>
        <div className='section m-auto w-1/2'>
        <form >
            <div className='title'>
                <div className='formTop mb-4 bg-white border-t-8 border-form rounded-lg py-[20px] px-[25px]'>
                    <p
                        type="text"
                        name='title'
                        className="questionTopName box-border text-[32px] font-medium leading-[40px] w-full border-none outline-none text-black h-[35px] placeholder-gray-400"
                        placeholder='Untitled Document'
                    >{form.title}</p>
                    <p
                        type="text"
                        name='desc'
                        className='questionTopdesc box-border mt-5 text-[13px] leading-[40px] w-full border-none outline-none border-b border-[#F4F4F9] h-10'
                        placeholder='Form Description'
                    >
                        {form.desc}
                    </p>
                </div>
                {questions.map((question, questionIndex) => (
                    <div className='mb-4' key={questionIndex}>
                        <div className='formTop bg-white border-t-8 border-form rounded-lg py-[20px] px-[25px]'>
                            <div className='flex gap-2'>
                                <div className="relative z-0 basis-2/3">
                                <p
                                    type="text"
                                    name='title'
                                    className="questionTopName box-border text-[32px] font-medium leading-[40px] w-full border-none outline-none text-black h-[35px] placeholder-gray-400"
                                    placeholder='Untitled Document'
                                >{question.question}</p>
                                    
                                </div>

                                <div className='basis-1/3'>
                                    <select
                                        // name={`questionType-${i}`}
                                        // value={x.selectedType}
                                        // onChange={e => handleTypeChange(e, i)}
                                        className="relative z-[9999] group cursor-pointer"
                                    >                                        
                                 </select>
                                </div>
                            </div>
                            <div>
                            </div>
    
                        </div>

                        {question.answers.map((answer, answerIndex) => (
                            <div key={answerIndex}>
                                <p>Jawaban: {answer.option}</p>
                            </div>
                        ))}
                    </div>
                ))}


            </div>
        <button type='submit' className='bg-green-400 hover:bg-blue-500'></button>
        </form>

    </div>
    </div>
    </div>
    </>
)
}
export default FormTest