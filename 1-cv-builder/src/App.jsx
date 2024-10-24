import { useState } from "react";
import dummyData from "./dummyData";
import PersonalDetails from "./components/personalDetails";
import Education from "./components/education";

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
            <div>
                <h2>Personal Info</h2>
                <p>Name: {personalDetail.fullName}</p>
                <p>Email: {personalDetail.email}</p>
                <p>Contact: {personalDetail.contact}</p>
                <p>Address: {personalDetail.address}</p>

                <h2>Education</h2>
                <p>School: {education[0].school}</p>
                <p>Degree: {education[0].degree}</p>
                <p>Grade: {education[0].grade}</p>
            </div>
        </>
    )
};

export default App;