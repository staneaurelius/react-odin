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

export { ArrowSvg, EducationSvg, EditSvg };