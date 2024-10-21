import InputGroup from "./inputGroup";
import '../styles/personalDetails.css';

function PersonalDetails({ data, onChange }) {
    return (
        <fieldset className="personal-details">
            <h2>Personal Details</h2>
            <InputGroup type="text" label="Full Name" name="fullName" value={data.fullName} onChange={onChange} />
            <InputGroup type="email" label="Email" name="email" value={data.email} onChange={onChange} />
            <InputGroup type="tel" label="Contact" name="contact" value={data.contact} onChange={onChange} />
            <InputGroup type="text" label="Address" name="address" value={data.address} onChange={onChange} />
        </fieldset>
    );
};

export default PersonalDetails;