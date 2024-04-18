import React, { useState, useEffect, useRef } from 'react';
import { DateRange } from 'react-date-range';
import format from 'date-fns/format';
import { addDays } from 'date-fns';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const FormTimer = () => {
    const [range, setRange] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection'
        }
    ]);

    const [open, setOpen] = useState(false);
    const refOne = useRef(null);

    useEffect(() => {
        // Event listeners untuk menyembunyikan DateRange picker
        const hideOnEscape = (e) => {
            if (e.key === 'Escape') {
                setOpen(false);
            }
        };

        const hideOnClickOutside = (e) => {
            if (refOne.current && !refOne.current.contains(e.target)) {
                setOpen(false);
            }
        };

        document.addEventListener('keydown', hideOnEscape, true);
        document.addEventListener('click', hideOnClickOutside, true);

        return () => {
            document.removeEventListener('keydown', hideOnEscape, true);
            document.removeEventListener('click', hideOnClickOutside, true);
        };
    }, []);

    return (
        <div className='formTop mb-4 bg-white border-t-8 border-form rounded-lg py-[20px] px-[25px] '>
            
           <div className='relative grid grid-cols-2'>
                <div className=''>
                    <input
                        value={`${format(range[0].startDate, 'MM/dd/yyyy')} to ${format(range[0].endDate, 'MM/dd/yyyy')}`}
                        readOnly
                        className='text-[20px]  py-2 rounded-lg border-2 border-gray-400 leading-none text-center w-3/4  
                        bg-gray-50 
                        '
                        onClick={() => setOpen(!open)}
                    />

                    <div ref={refOne}>
                        {open && (
                            <DateRange
                                date={new Date()}
                                onChange={(item) => setRange([item.selection])}
                                ranges={range}
                                editableDateInputs={true}
                                moveRangeOnFirstSelection={false}
                                months={1}
                                direction='horizontal'
                                className='absolute left-0 top-15 border border-white z-[999]'
                            />
                        )}
                    </div>
                </div>
                <div className='grid-cols-2 grid gap-2'>
                    <button className='bg-gray-100 rounded-lg font-semibold'>Anonymous</button>
                    <button className='bg-gray-100 rounded-lg font-semibold '>Client</button>
                </div>
           </div>
        </div>
    );
};

export default FormTimer;
