import React from 'react'

const TabelChart = ({ auth, answers, type, quest  }) => {

    console.log('table', answers)
    return (
    <div className='grid grid-rows-13 '>
        <p className='row-span-1 mb-4'>{quest.question}</p>
        <div class="relative row-span-12 overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead class="text-sm text-gray-700 bg-gray-50 dark:bg-gray-700 ">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        No.
                    </th>
                    <th scope="col" class="px-6 py-3">
                        User
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Answer
                    </th>
                </tr>
            </thead>
            <tbody>
            {answers && answers.map((answer, index) => {
              const parsedAnswer = JSON.parse(answer.answer);
              const filteredAnswer = parsedAnswer.filter(a => a.type === type);

              return (
                <tr
                  key={index}
                  className={`odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700`}
                >
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{index + 1}</td>
                  <td className="px-6 py-4">User {index + 1}</td>
                  <td className="px-6 py-4">
                    {/* Tampilkan jawaban yang difilter */}
                    {filteredAnswer.map((ans, idx) => (
                      <p key={idx}>{JSON.stringify(ans.answer)}</p>
                    ))}
                  </td>
                </tr>
              );
            })}
          </tbody>

            </table>
        </div>

        
    </div>
  )
}

export default TabelChart