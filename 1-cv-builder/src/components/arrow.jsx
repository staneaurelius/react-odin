const ArrowSvg = function({ width, height, className="open", color="currentColor" }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} width={width} height={height} viewBox="0 -960 960 960" fill={color}>
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/>
        </svg>
    );
};

export default ArrowSvg;