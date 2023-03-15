import React from "react";

const Movie = (props) => {
    return (
        <li className="m-4 p-4 bg-[#230052] shadow-md text-white rounded-xl text-center">
            <h2 className="text-[2rem] text-[#f7e702] font-bold">
                {props.title}
            </h2>
            <h3 className="text-base text-[#eccf77] mt-2 font-semibold">
                {props.releaseDate}
            </h3>
            <p className="mt-3">{props.openingText}</p>
        </li>
    );
};

export default Movie;
