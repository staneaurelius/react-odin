import { useState } from "react";
import dummyData from "./dummyData";
import PersonalDetails from "./components/personalDetails";

function App () {
    // States
    const [personalDetail, setPersonalDetail] = useState(dummyData.personalDetails),
        handlePersonalDetail = (e) => {
            setPersonalDetail({ ...personalDetail, [e.target.name] : e.target.value });
        };

    // App
    return (
        <>
            <PersonalDetails data={personalDetail} onChange={handlePersonalDetail} />
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