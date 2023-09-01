import React, { useState, useEffect } from "react";
import Card from "../../components/Card";
import Axios from "axios"
import { useParams } from "react-router-dom";
import CardSearch from "./CardSearch/CardSearch";
const SearchByCate = () => {
//   <>
// hello ae
//     </>
  const [Prouducts, SetProducts] = useState([])
  const {CateID} = useParams()
    useEffect(() => {
      getProducts();
    },[])

  const getProducts = () => {
      Axios.get(`http://localhost:3001/cate/${CateID}`).then((response) => {
          SetProducts(response.data)
          console.log(response.data)
      })
  }
  
  return(
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="grid grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10">
            {Prouducts.map(item=>(<CardSearch props={item} key={item.ItemID} />))}
        </div>
    </div>
)
};

export default SearchByCate;
