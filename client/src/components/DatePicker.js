import React, { useState } from "react";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

function DatePicker(minimum_nights) {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [focusedInput, setFocusedInput] = useState(null);
    const handleDatesChange = ({ startDate, endDate }) => {
        setStartDate(startDate);
        setEndDate(endDate);
    };
    const [minNights] = Object.values(minimum_nights)
    return (
        <div className="d-flex justify-content-center">
            <DateRangePicker
                startDate={startDate}
                startDateId="start-date"
                endDate={endDate}
                endDateId="end-date"
                onDatesChange={handleDatesChange}
                focusedInput={focusedInput}
                onFocusChange={focusedInput => setFocusedInput(focusedInput)}
                withPortal={true}
                minimumNights={minNights}
                small={true}
                horizontalMargin={0}
            />
        </div>);
}

export default DatePicker;