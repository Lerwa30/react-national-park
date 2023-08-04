import { useState } from "react";

const ParkSearch = (props) => {
    const [searchInput, setSearchInput] = useState("");

    return (
        <div>
            <input 
                type="text"
                placeholder="Search for a park!"
                searchInput={searchInput}
                onChange={(e) => {
                    setSearchInput(e.target.value);
                }}
                />
        </div>
    )
};

export default ParkSearch;