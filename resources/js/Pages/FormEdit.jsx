import React, { useState } from 'react';
import { router } from '@inertiajs/react'
import { ImParagraphJustify } from 'react-icons/im';
import { IoMdRadioButtonOn } from 'react-icons/io';
import { IoIosCheckboxOutline } from 'react-icons/io';
import { TbPhoto } from "react-icons/tb";
import Chart from '@/Components/Response/Chart2'
import format from 'date-fns/format';
import FormHeader from '@/Components/Form/FormHeader';
import ResponsesEdit from '@/Components/Admin/ResponsesEdit';
import FormTitle from '@/Components/Admin/FormTitle';

const FormEdit = (props, {uuid}) => {
    const [answers, setAnswers] = useState({});
    const [submitDate, setDate] = useState();
    const form_id = props.form.id;
    const quest = props.form.question;
    const [access, setAccess] = useState(null);

    // console.log(props.form.question)
    const handleAccessChange = (role) => {
        setAccess(role)
    }

    const [questions, setQuestions] = useState(quest || [
        {
            question: '',
            selectedType: '',
            answers: [{ option: '' }],
            required: false
        }
    ]);


    const [DropdownLinks, setDropdownLinks] = useState([
        { value: 'text', label: 'Text', icon: <ImParagraphJustify /> },
        { value: 'multiple_choice', label: 'Multiple Choice', icon: <IoMdRadioButtonOn /> },
        { value: 'checkbox', label: 'Checkbox', icon: <IoIosCheckboxOutline /> },
        { value: 'image', label: 'Image', icon: <TbPhoto /> }
    ]);
    const [title, setTitle] = useState(props.form.title);
    const [desc, setDesc] = useState(props.form.desc);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleDescChange = (e) => {
        setDesc(e.target.value);
    };

    const handleAddClick = () => {
        setQuestions([...questions, {
            question: '',
            selectedType: '',
            answers: [{option: '' }],
            required: false,
        }]);
    };

    const handleRemove = (index) => {
        const list = [...questions];
        list.splice(index, 1);
        setQuestions(list);
    };

    const handleCopyQuestion = (index) => {
        const list = [...questions];
        const copiedQuestion = JSON.parse(JSON.stringify(list[index])); 
        list.splice(index + 1, 0, copiedQuestion);
        setQuestions(list);
    };

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...questions];
        list[index][name] = value;
        setQuestions(list);
    };


    const handleTypeChange = (option, index) => {
        const list = [...questions];
        list[index].selectedType = option.value;
        setQuestions(list);
    };
    const handleAddAnswerClick = (index) => {
        const list = [...questions];
        list[index].answers.push({ option: '' });
        setQuestions(list);
    };

    const handleRemoveAnswer = (questionIndex, answerIndex) => {
        const list = [...questions];
        list[questionIndex].answers.splice(answerIndex, 1);
        setQuestions(list);
    };

    const handleOptionChange = (e, index, answerIndex) => {
        const { value } = e.target;
        const list = [...questions];
        list[index].answers[answerIndex].option = value;
        setQuestions(list);
    };
    

    const handleRequiredChange = (index) => {
        const list = [...questions];
        list[index].required = !list[index].required;
        setQuestions(list);
    };


    const [activeView, setActiveView] = useState('response');

    const switchView = (view) => {
        setActiveView(view);


        if (view === 'chart') {
            window.location.hash = '#response';
        } else {
            window.location.hash = '';
        }

    };

    const currentDate = format(new Date(), 'MM/dd/yyyy');

    const handleSubmit = (e) => {
        e.preventDefault();


        setDate(() => ({
            currentDate
        }));

        router.post('/update', {questions, form_id, title, desc});
        // console.log(questions, form_id, title, desc)
    };
  return (
    <div className='h-full bg-[#F4f4f9] pb-[30px]  '>
    <FormHeader props={props} view={ switchView } activeView={ activeView } submit={handleSubmit}  />

       <div className='mt-4  px-44'>   
       <FormTitle title={title} handleTitleChange={handleTitleChange} 
            desc={desc} handleDescChange={handleDescChange} />
            {activeView === 'response' && questions.map((question, index) => (
                <ResponsesEdit props={props} setAnswers={setAnswers} submit={handleSubmit} 
                key={index}
                questionData={question}
                index={index}
                handleInputChange={handleInputChange}
                handleOptionChange={handleOptionChange}
                handleTypeChange={handleTypeChange}
                handleAddAnswerClick={handleAddAnswerClick}
                handleRemoveAnswer={handleRemoveAnswer}
                handleAddClick={handleAddClick}
                handleRemove={handleRemove}
                handleCopyQuestion={handleCopyQuestion}
                handleRequiredChange={handleRequiredChange}
                DropdownLinks={DropdownLinks}
            />
        ))}
            {activeView === 'chart' && (
               <Chart props={props} submit={handleSubmit} accessChange={()=>handleAccessChange(role)} access={access} />
           )}
           
       </div>
           
</div>
  )
}

export default FormEdit