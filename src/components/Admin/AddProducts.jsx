import { useParams} from "react-router-dom"
import { useEffect, useState } from "react"
import Axios from 'axios'
function AddProduct() {
    const [ItemID, setItemID ] = useState("")
    const [Name, setName] = useState("")
    const [Price, setPrice] = useState("")
    const [Description, setDes] = useState("")
    const [Color, setColor] = useState("")
    const [Status, setStatus] = useState("")
    const [CateID, setCate] = useState("")
    const [ProDucerID, setProducer] = useState("")
    // const [PictureID, setPicID] = useState("")
    const [Content, setContent] = useState("")
    const [Product, SetProduct] = useState([])

    const AddProduct = (e) => {
        Axios.post("http://localhost:3001/manage/products/add", {
            Name: Name,
            Price: Price,
            Description: Description,
            Color: Color,
            Status: Status,
            CateID: CateID,
            ProDucerID: ProDucerID,
            Content: Content
        }).then((response) => {
            console.log(response)
            // setItemID(response.data)
        })
    }

    // const AddImg = (e) => {
    //     console.log(ItemID)
    //     ItemID = 9
    //     Axios.post(`http://localhost:3001/manage/products/addImg`, {
    //         ItemID: ItemID,
    //         Content: Content
    //     }).then((response) => {
    //         console.log(response)
            
    //     }).catch(e)
    // }
    // const AddItemImg = () => {
    //     Axios.post("http://localhost:3001/manage/products/addImg", {
    //         Content: Content
    //     }).then((response) => {
    //         console.log(response)
    //     })
    // }
    return (
        // <HeaderAdmin/>
        // <h1>hello</h1>
        // <h1>Hi Babe</h1>
        <>
            <div className="flex flex-wrap w-full -mx-3 mb-6 p-20 items-center">
                <form className="w-full md:w-1/3 max-w-lg pt-4">
                    <div className="flex flex-wrap">
                        <img className="w-full rounded-10px overflow-hidden  border border-gray-700 " src={Content} alt="Product-Img" />
                        {/* <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div> */}
                        <div class="w-full px-3 py-3">
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-img" type="text" placeholder="Thêm link ảnh" value={Content} onChange={(e) => setContent(e.target.value)}/>
                        </div>
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-1 px-6 py-3">
                            <button type="submit" class=" appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                Xóa ảnh
                            </button>                        
                        </div>
                        <div class="w-full md:w-1/2 px-6 py-3">
                            <button type="submit" class="w-full py-3 px-4 mb-3 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-red-500" >
                                Thêm ảnh
                            </button>
                        </div>
                    </div>


                </form>
                <form class="w-full md:w-2/3 max-w-lg pl-10">
                    <div class="flex flex-wrap ">
                        <div class="w-full px-3">
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-name" type="name" placeholder="Tên" value={Name} onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-1">
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-stock" type="text" placeholder="Tình trạng" value={Status} onChange={(e) => setStatus(e.target.value)}/>
                        </div>
                        <div class="w-full md:w-1/2 px-3">
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-prices" type="number" placeholder="Giá" value={Price} onChange={(e) => setPrice(e.target.value)} />
                        </div>
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-stock" type="text" placeholder="Phân loại" value={CateID} onChange={(e) => setCate(e.target.value)}/>
                        </div>
                        <div class="w-full md:w-1/2 px-3">
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-stock" type="text" placeholder="Màu" value={Color} onChange={(e) => setColor(e.target.value)}/>
                        </div>
                        <div class="w-full px-3">
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-700 rounded py-10 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-left" id="grid-describe" type="text" placeholder="Chi tiết" value={Description} onChange={(e) => setDes(e.target.value)}/>
                        </div>
                        <div class="w-full px-3">
                            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-left" id="grid-describe" type="text" placeholder="Producer ID" value={ProDucerID} onChange={(e) => setProducer(e.target.value)}/>
                        </div>
                        <div class="w-full px-3">
                            <button type="submit" class="w-full content-center py-3 px-4 mb-3 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-red-500" onClick={AddProduct}>
                                Thêm sản phẩm
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddProduct