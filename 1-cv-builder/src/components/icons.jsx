const EducationSvg = function({ width, height, className, color="currentColor" }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} width={width} height={height} viewBox="0 -960 960 960" fill={color}>
            <path d="M320-160q-33 0-56.5-23.5T240-240v-120h120v-90q-35-2-66.5-15.5T236-506v-44h-46L60-680q36-46 89-65t107-19q27 0 52.5 4t51.5 15v-55h480v520q0 50-35 85t-85 35H320Zm120-200h240v80q0 17 11.5 28.5T720-240q17 0 28.5-11.5T760-280v-440H440v24l240 240v56h-56L510-514l-8 8q-14 14-29.5 25T440-464v104ZM224-630h92v86q12 8 25 11t27 3q23 0 41.5-7t36.5-25l8-8-56-56q-29-29-65-43.5T256-684q-20 0-38 3t-36 9l42 42Zm376 350H320v40h286q-3-9-4.5-19t-1.5-21Zm-280 40v-40 40Z"/>
        </svg>
    );
};

const ArrowSvg = function({ width, height, className, color="currentColor" }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} width={width} height={height} viewBox="0 -960 960 960" fill={color}>
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/>
        </svg>
    );
};

const EditSvg = function({ width, height, className, color="currentColor" }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} height={height} viewBox="0 -960 960 960" width={width} fill={color}>
            <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z"/>
        </svg>
    );
};

const MailSvg = function({ width, height, className, color="currentColor" }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} height={height} viewBox="-220 -1180 1400 1400" width={width} fill={color}>
            <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/>
        </svg>
    );
};

const PhoneSvg = function({ width, height, className, color="currentColor" }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} height={height} viewBox="-220 -1180 1400 1400" width={width} fill={color}>
            <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/>
        </svg>
    );
};

const AddressSvg = function({ width, height, className, color="currentColor" }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} height={height} viewBox="-220 -1180 1400 1400" width={width} fill={color}>
            <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/>
        </svg>
    );
};

const JobSvg = function({ width, height, className, color="currentColor" }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} height={height} viewBox="0 -960 960 960" width={width} fill={color}>
            <path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z"/>
        </svg>
    );
};

export { 
    ArrowSvg,
    EducationSvg,
    EditSvg,
    MailSvg,
    PhoneSvg,
    AddressSvg,
    JobSvg
};