import React, { useEffect, useState } from 'react';
import classes from './DateTimePicker.module.css';

import { connect } from 'react-redux';

function DateTimePicker (props) { 
    
    const [date, setDate] = useState({ years: [], month: [], days: [], hours: [], minutes: [] });

    useEffect(() => {
        const years = [];
        const month = [];
        const days = [];
        const hours = [];
        const minutes = [];

        for (let index = 1993; index < 2050; index++) {
            years.push(index);
        }
    
        for (let index = 1; index <= 12; index++) {
            month.push(index);
        }
    
        for (let index = 1; index <= 31; index++) {
            days.push(index);
        }
    
        for (let index = 0; index <= 12; index++) {
            hours.push(index);
        }
    
        for (let index = 0; index <= 59; index++) {
            minutes.push(index);
        }

        setDate({
            years: years,
            month,
            days,
            hours,
            minutes
        })

    }, [])
   

    

    return(
        <div className={classes.DateTimePicker}>
            <section>
                <span>Date:</span>
                <select id="downtime">
                    <option value="yeas">Year</option>
                    {date.years.map((year) => 
                        <option value="years">{year}</option>
                    )}
                </select>
                <select id="downtime">
                    <option value="month">Month</option>
                    {date.month.map((m) => 
                          <option value="yeas">{m}</option>
                    )}
                </select>
                <select id="downtime">
                    <option value="day">Day</option>
                    {date.days.map((d) => 
                          <option value="yeas">{d}</option>
                    )}
                </select>
            </section>
            <section>
                <span>Time:</span>
                <select id="downtime">
                    <option value="hours">Hours</option>
                    {date.hours.map((h) => 
                          <option value="yeas">{h}</option>
                    )}
                </select>
                <select id="downtime">
                    <option value="minutes">Minutes</option>
                    {date.minutes.map((m) => 
                          <option value="yeas">{m}</option>
                    )}
                </select>
                <select id="downtime">
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                </select>
            </section>
        </div>
    )
}

export default DateTimePicker;