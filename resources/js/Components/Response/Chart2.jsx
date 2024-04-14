import React from 'react';
import PieChart from '../ChartType/PieChart';
import BarChart from '../ChartType/BarChart';
import TabelChart from '../ChartType/TabelChart';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart2 = ({ props }) => {
    const questions = props.form.question;

    return (
        <>
            {questions.map((question, index) => {

                const filteredAnswers = props.answers.filter(answerObj => {
                    const parsedAnswers = JSON.parse(answerObj.answer);
                    return parsedAnswers.some(ans => ans.type === question.selectedType);
                });

                let pickedAnswer;

                if (question.selectedType === 'text') {
                    pickedAnswer = filteredAnswers.filter(answerObj => {
                        const parsedAnswers = JSON.parse(answerObj.answer);
                        return parsedAnswers.some(ans => ans.type === 'text');
                    });
                } else {
                    pickedAnswer = question.answers.map(answer => {
                        return filteredAnswers.reduce((count, answerObj) => {
                            const parsedAnswers = JSON.parse(answerObj.answer);
                            const choiceAnswer = parsedAnswers.find(a => a.type === question.selectedType);

                            if (question.selectedType === 'checkbox') {
                                if (choiceAnswer && Array.isArray(choiceAnswer.answer) && choiceAnswer.answer.includes(answer.option)) {
                                    return count + 1;
                                }
                            } else if (question.selectedType === 'multiple_choice') {
                                if (choiceAnswer && choiceAnswer.answer === answer.option) {
                                    return count + 1;
                                }
                            }
                            return count;
                        }, 0);
                    });
                }
                const ChartComponent = (() => {
                    switch (question.selectedType) { 
                        case 'multiple_choice':
                            return (
                                <PieChart question={question} answers={pickedAnswer} type={question.selectedType} />
                            );
                        case 'checkbox':
                            return (
                                <BarChart question={question} answers={pickedAnswer} type={question.selectedType} />
                            );
                        case 'text':
                            return (
                                <TabelChart quest={question} answers={pickedAnswer} type={question.selectedType} />
                            );
                        default:
                            return null;
                    }
                })();

                return (
                    <div className="mb-4" key={index}>
                        <div className="formTop bg-white border-t-8 border-form rounded-lg  p-6">
                            {ChartComponent}
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default Chart2;
