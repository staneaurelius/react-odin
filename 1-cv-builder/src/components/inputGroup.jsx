import "../styles/inputGroup.css";

function InputGroup({ type, label, name, value, onChange }) {
    return (
        <label>
            {label}
            { type === 'textarea'
                ? <textarea name={name} id={name} rows="6" onChange={onChange}>{value}</textarea>
                : <input type={type} name={name} value={value} onChange={onChange} />
            }
        </label>
    );
};

export default InputGroup;