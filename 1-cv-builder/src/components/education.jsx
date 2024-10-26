import { useState } from "react";
import InputGroup from "./inputGroup";
import { EducationSvg, ArrowSvg, EditSvg } from './icons';
import "../styles/education.css";

const EducationGroup = function({ data, onEdit, onDelete }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const [internalData, setInternalData] = useState(data),
        handleDataChange = function(e) {
            setInternalData({ ...internalData, [e.target.name] : e.target.value });
        };

    const confirmBtnHandler = function() {
        onEdit(data.id, internalData);
    },
        deleteBtnHandler = function() {
            onDelete(data.id);
    };

    return (
        <section className="education-group">
            <header>
                <h3>{data.school}</h3>
                <div className="svg-button-wrapper" onClick={ () => setIsExpanded(!isExpanded) } >
                    <EditSvg width="16px" height="16px" className="education-group-svg" />
                </div>
            </header>
            {
                isExpanded && (
                    <div className="education-detail">
                        <InputGroup type="text" label="School" name="school" value={internalData.school} onChange={handleDataChange} />
                        <InputGroup type="text" label="Degree" name="degree" value={internalData.degree} onChange={handleDataChange} />
                        <div className="date-group">
                            <InputGroup type="text" label="Start Date" name="startDate" value={internalData.startDate} onChange={handleDataChange} />
                            <InputGroup type="text" label="End Date" name="endDate" value={internalData.endDate} onChange={handleDataChange} />
                        </div>
                        <InputGroup type="text" label="Grade" name="grade" value={internalData.grade} onChange={handleDataChange} />
                        <div className="edit-buttons">
                            <button type="button" className="delete-btn" onClick={deleteBtnHandler}>Delete</button>
                            <button type="button" className="confirm-btn" onClick={confirmBtnHandler}>Confirm</button>
                        </div>
                    </div>
                )
            }
        </section>
    );
};

const Education = function({ dataList, updaterFn, deleteFn, insertFn }) {
    const [isOpen, setIsOpen] = useState(false),
        handleIsOpen = (e) => {
            e.preventDefault();
            setIsOpen(!isOpen);
        };
    
    const placeholderData = {
        id : `unique-edu-${dataList.length + 1}`,
        school : 'My University',
        degree : 'My Degree',
        grade : '4.00',
        startDate : 'Jan 2020',
        endDate : 'Jan 2024'
    };
    
    const handleInsertion = () => {
        insertFn(placeholderData);
    };

    return (
        <fieldset className="education">
            <header onClick={ handleIsOpen }>
                <EducationSvg width="24px" height="24px" className="education-svg" />
                <h2>Education</h2>
                <ArrowSvg width="24px" height="24px" className={ isOpen ? "arrow-svg" : "arrow-svg open"}/>
            </header>
            {
                isOpen && (
                    <div className="animated">
                        {
                            dataList.map(data => {
                                const uniqueKey = data.school.replace(' ', '-');
                                return <EducationGroup data={data} onEdit={updaterFn} onDelete={deleteFn} key={uniqueKey} />
                            })
                        }
                        <button type="button" onClick={handleInsertion}>+ New Entry</button>
                    </div>
                )
            }
        </fieldset>
    )
};

export default Education;