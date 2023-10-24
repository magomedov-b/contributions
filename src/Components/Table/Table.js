import React, {useEffect, useState} from 'react';

const Table = () => {
    const [dates, setDates] = useState([]);
    const [contributions, setContributions] = useState([]);
    useEffect(() => {
        const formatDate = (date) => {
            const year = date.getFullYear();
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const day = date.getDate().toString().padStart(2, '0');
            return `${year}-${month}-${day}`;
        }

        const getDatesInRange = (startDate, endDate) => {
            const date = new Date(startDate.getTime());
            date.setDate(date.getDate() + 1);
            const dates = [];

            while (date < endDate) {
                dates.push(formatDate(date));
                date.setDate(date.getDate() + 1);
            }

            return dates;
        }

        const d1 = new Date('2022-05-30');
        const d2 = new Date('2023-05-18');

        setDates(getDatesInRange(d1, d2));
    }, []);
    return (
        <div>
            {dates.map(date => (
                <h1>{date}</h1>
            ))}
        </div>
    );
};

export default Table;
