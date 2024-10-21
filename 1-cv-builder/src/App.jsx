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
        handleEducation = (e) => {
            console.log(e.target.value === '');
            setEducation({ ...education, [e.target.name] : e.target.value });
        };

    // App
    return (
        <>
            <form action="" method="post">
                <PersonalDetails data={personalDetail} onChange={handlePersonalDetail} />
                <Education data={education} onChange={handleEducation} />
            </form>
            <div>
                <p>Name: {personalDetail.fullName}</p>
                <p>Email: {personalDetail.email}</p>
                <p>Contact: {personalDetail.contact}</p>
                <p>Address: {personalDetail.address}</p>
            </div>
        </>
    )
};

export default App;