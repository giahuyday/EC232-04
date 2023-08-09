import Axios from 'axios'
import React from 'react'
import { useState} from 'react'
const SearchBar = ({setResults}) => {
    const [search, setSearch] = useState("")
    const fetchData = (value) => {
        Axios.get(`http://localhost:3001/product`)
        // .then((response)) 
            // console.log(products.filter(response.data))
        .then((response) => {
            // console.log(response)
            const result = response.data?.filter((Items) => {
            return (Items.Name && Items.Name.toLowerCase().includes(value.toLowerCase()));
            })
            console.log(result)
            setResults(result)
        })
    }
        // setImgMain(Product[0]?.Content)
    const handleSearch = (value) => {
        setSearch(value)
        fetchData(value)
        setResults(value)
    }
    return(
        <><div className="flex gap-2 items-center justify-between">
            <div className="flex gap-1 items-center relative">
                <input type="text" className="outline-none border border-[#E5E5E5] rounded-[4px] w-[400px] h-[40px] px-[16px] text-[14px] leading-[24px] tracking-[3%] focus:border-[#2F80ED] transition-all duration-200 ease-in-out peer select-none"
                    placeholder="What are you looking for ?" value={search} onChange={(e) => handleSearch(e.target.value)} />
            </div>
        </div></>
    )
}

export default SearchBar