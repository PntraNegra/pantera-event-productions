import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function PanteraCalendar() {
    const [value, onChange] = useState(new Date());

    return (
        <div className="text-center">
            <Calendar
                onChange={onChange}
                value={value}
            />
        </div>
    );
}

export default PanteraCalendar;