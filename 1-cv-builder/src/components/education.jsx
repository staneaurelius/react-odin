import { useState } from "react";
import InputGroup from "./inputGroup";
import ArrowSvg from './arrow';
import "../styles/education.css";

const Education = function({ data, onChange }) {
    const [isOpen, setIsOpen] = useState(),
        handleIsOpen = (e) => {
            e.preventDefault();
            setIsOpen(!isOpen);
        };

    return (
        <fieldset className="education">
            <header style={ isOpen ? { marginBottom : "16px" } : { marginBottom : 0 }} onClick={ handleIsOpen }>
                <h2>Education</h2>
                <ArrowSvg width="24px" height="24px" className={ isOpen ? "open" : "" }/>
            </header>
            <div className={ isOpen ? "education-detail" : "education-detail hidden" }>
                <InputGroup type="text" label="School" name="school" value={data.school} onChange={onChange} />
                <InputGroup type="text" label="Degree" name="degree" value={data.degree} onChange={onChange} />
                <div className="date-group">
                    <InputGroup type="date" label="Start Date" name="startDate" value={data.startDate} onChange={onChange} />
                    <InputGroup type="date" label="End Date" name="endDate" value={data.endDate} onChange={onChange} />
                </div>
                <InputGroup type="text" label="Grade" name="grade" value={data.grade} onChange={onChange} />
            </div>
        </fieldset>
    )
};

export default Education;