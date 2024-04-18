import FormHeader from '@/Components/Form/FormHeader'
import QuestionForm from '@/Components/Form/QuestionForm'
import { router } from '@inertiajs/react'
import React from 'react'
import { useState } from 'react'
import { ImParagraphJustify } from 'react-icons/im';
import { IoMdRadioButtonOn } from 'react-icons/io';
import { IoIosCheckboxOutline } from 'react-icons/io';
import { TbPhoto } from "react-icons/tb";


const Form = ({ uuid }) => {
  const [questions, setQuestions] = useState([
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
    const localUuid = uuid;
    const [title, setTitle]= useState('');
    const [desc, setDesc] = useState('');

    // Tambahkan pertanyaan baru
    const handleAddClick = () => {
        setQuestions([...questions, {
            question: '',
            selectedType: '',
            answers: [{option: '' }],
            required: false,
        }]);
    };
    // Hapus pertanyaan
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

    // Mengubah pertanyaan berdasarkan input pengguna
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...questions];
        list[index][name] = value;
        setQuestions(list);
    };

    // Mengubah tipe pertanyaan
    const handleTypeChange = (option, index) => {
        const list = [...questions];
        list[index].selectedType = option.value;
        setQuestions(list);
    };

    // Menambah opsi jawaban
    const handleAddAnswerClick = (index) => {
        const list = [...questions];
        list[index].answers.push({ option: '' });
        setQuestions(list);
    };

    // Menghapus opsi jawaban
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

    // Mengubah apakah pertanyaan diperlukan atau tidak
    const handleRequiredChange = (index) => {
        const list = [...questions];
        list[index].required = !list[index].required;
        setQuestions(list);
    };

    const saveData = (e) => {
      e.preventDefault();
      router.post('/save', { questions, localUuid ,title, desc }); 
    //   console.log(questions, localUuid, title, desc)
  }

  const [activeView, setActiveView] = useState('response');

  const switchView = (view) => {
      setActiveView(view);


      if (view === 'chart') {
          window.location.hash = '#response';
      } else {
          window.location.hash = '';
      }

  };

  return (
    <div>
        <FormHeader uuid ={ uuid } submit={saveData} view={ switchView } activeView={activeView}  />
        <div className='questionForm bg-[#F4f4f9] min-h-screen pb-[30px]'>
            <br></br>
        <div className='section m-auto w-1/2'>

            <div className='title mb-4'>
                <div className=' formTop bg-white border-t-8 border-form rounded-lg py-[20px] px-[25px]'>
                    <input
                        type="text"
                        name='title'
                        value={title} onChange={e=>setTitle(e.target.value)} 
                        className="block w-full ml-2 py-1 px-0 text-[32px] text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none 
                        focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder='Untitled Document'
                    />
                    <input
                        type="text"
                        name='desc'
                        value={desc} onChange={e=>setDesc(e.target.value)} 
                        className="mt-4 block w-full ml-2 py-1 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none 
                            focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder='Form Description'
                    />
                </div>
            </div>
            {questions.map((question, index) => (
                <QuestionForm
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
          </div>
        </div>

          
    </div>
  )
}

export default Form