
function HeroHeadings({content}) {
    return (
        <>
            <span className="text-white text-4xl sm:text-5xl md:text-5xl font-bold flex flex-row justify-center md:justify-start">
                {content}
            </span>
        </>
    );
}

export default HeroHeadings;