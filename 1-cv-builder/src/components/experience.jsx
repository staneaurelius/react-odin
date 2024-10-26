import { useState } from "react";
import InputGroup from "./inputGroup";
import { JobSvg, ArrowSvg, EditSvg } from './icons';
import "../styles/experience.css";

const ExperienceGroup = function({ data, onEdit, onDelete }) {
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
        <section className="experience-group">
            <header>
                <h3>{data.title}</h3>
                <div className="svg-button-wrapper" onClick={ () => setIsExpanded(!isExpanded) } >
                    <EditSvg width="16px" height="16px" className="experience-group-svg" />
                </div>
            </header>
            {
                isExpanded && (
                    <div className="experience-detail">
                        <InputGroup type="text" label="Job Title" name="title" value={internalData.title} onChange={handleDataChange} />
                        <InputGroup type="text" label="Company Name" name="company" value={internalData.company} onChange={handleDataChange} />
                        <div className="date-group">
                            <InputGroup type="text" label="Start Date" name="startDate" value={internalData.startDate} onChange={handleDataChange} />
                            <InputGroup type="text" label="End Date" name="endDate" value={internalData.endDate} onChange={handleDataChange} />
                        </div>
                        <InputGroup type="textarea" label="Description" name="description" value={internalData.description} onChange={handleDataChange} />
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

const Experience = function({ dataList, updaterFn, deleteFn, insertFn }) {
    const [isOpen, setIsOpen] = useState(false),
        handleIsOpen = (e) => {
            e.preventDefault();
            setIsOpen(!isOpen);
        };
    
    const placeholderData = {
        id : `unique-exp-${dataList.length + 1}`,
        title : 'Position',
        company : 'Company',
        startDate : '01 / 2020',
        endDate : '01 /2024',
        description : 'I do a lot of things in this company!'
    };
    
    const handleInsertion = () => {
        insertFn(placeholderData);
    };

    return (
        <fieldset className="experience">
            <header onClick={ handleIsOpen }>
                <JobSvg width="24px" height="24px" className="education-svg" />
                <h2>Work Experience</h2>
                <ArrowSvg width="24px" height="24px" className={ isOpen ? "arrow-svg" : "arrow-svg open"}/>
            </header>
            {
                isOpen && (
                    <div className="animated">
                        {
                            dataList.map(data => {
                                const uniqueKey = data.title.replace(' ', '-');
                                return <ExperienceGroup data={data} onEdit={updaterFn} onDelete={deleteFn} key={uniqueKey} />
                            })
                        }
                        <button type="button" onClick={handleInsertion}>+ New Entry</button>
                    </div>
                )
            }
        </fieldset>
    )
};

export default Experience;