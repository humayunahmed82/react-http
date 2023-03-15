import React, { useRef } from "react";

const AddMovie = (props) => {
    const titleRef = useRef("");
    const openingTextRef = useRef("");
    const releaseDateRef = useRef("");

    function submitHandler(event) {
        event.preventDefault();

        // could add validation here...

        const movie = {
            title: titleRef.current.value,
            openingText: openingTextRef.current.value,
            releaseDate: releaseDateRef.current.value,
        };

        props.onAddMovie(movie);

        titleRef.current.value = "";
        openingTextRef.current.value = "";
        releaseDateRef.current.value = "";
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="my-4">
                <label
                    className="block font-bold mb-2 text-left"
                    htmlFor="title"
                >
                    Title
                </label>
                <input
                    className="block w-full py-2 px-3 rounded-md border border-solid border-[#cc] focus:outline-none focus:border-[#230052]"
                    type="text"
                    id="title"
                    ref={titleRef}
                />
            </div>
            <div className="my-4">
                <label
                    className="block font-bold mb-2 text-left"
                    htmlFor="opening-text"
                >
                    Opening Text
                </label>
                <textarea
                    className="block w-full py-2 px-3 rounded-md border border-solid border-[#cc] focus:outline-none focus:border-[#230052]"
                    rows="5"
                    id="opening-text"
                    ref={openingTextRef}
                ></textarea>
            </div>
            <div className="my-4">
                <label
                    className="block font-bold mb-2 text-left"
                    htmlFor="date"
                >
                    Release Date
                </label>
                <input
                    className="block w-full py-2 px-3 rounded-md border border-solid border-[#cc] focus:outline-none focus:border-[#230052]"
                    type="date"
                    id="date"
                    ref={releaseDateRef}
                />
            </div>
            <button className="cursor-pointer bg-[#230052] text-white py-3 px-8 rounded-lg focus:outline-none hover:bg-[#460897]">
                Add Movie
            </button>
        </form>
    );
};

export default AddMovie;
