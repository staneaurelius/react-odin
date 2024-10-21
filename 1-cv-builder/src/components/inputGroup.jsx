import "../styles/inputGroup.css";

function InputGroup({ type, label, name, value, onChange }) {
    return (
        <label>
            {label}
            <input type={type} name={name} value={value} onChange={onChange} />
        </label>
    );
};

export default InputGroup;