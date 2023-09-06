import React from "react";
import CardSearch from "./CardSearch/CardSearch";


const SearchByKey = () => {
    const storedResults = localStorage.getItem('search-results');
    const results = JSON.parse(storedResults);
    console.log(results)
    // window.location.reload([])
    // Kiểm tra xem trang đã được tải lại chưa
    return(
        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
            <div className="grid grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10">
                {results.map(item=>(<CardSearch props={item} key={item.ItemID} />))}
            </div>
        </div>
    )
};
export default SearchByKey