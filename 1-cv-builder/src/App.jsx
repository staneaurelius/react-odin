import { useState } from "react";
import dummyData from "./dummyData";
import PersonalDetails from "./components/personalDetails";
import Education from "./components/education";
import Resume from "./components/resume";

function App () {
    // States
    const [personalDetail, setPersonalDetail] = useState(dummyData.personalDetails),
        handlePersonalDetail = (e) => {
            setPersonalDetail({ ...personalDetail, [e.target.name] : e.target.value });
        };

    const [education, setEducation] = useState(dummyData.education),
        editEducation = (arrayId, updatedData) => {
            const modifiedIndex = education.findIndex((detail) => detail.id === arrayId),
                updatedArray = [...education];
            
            updatedArray[modifiedIndex] = updatedData;
            console.log(updatedArray);
            setEducation(updatedArray);
        };

    // App
    return (
        <>
            <form action="" method="post">
                <PersonalDetails data={personalDetail} onChange={handlePersonalDetail} />
                <Education dataList={education} updaterFn={editEducation} />
            </form>
            <Resume personal={personalDetail} education={education} />
        </>
    )
};

export default App;