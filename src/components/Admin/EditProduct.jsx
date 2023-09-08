import { useState, useEffect } from 'react'
import Axios from 'axios'
import { useParams } from 'react-router-dom'

export default function EditProduct() {
    const { ItemID } = useParams()
    const [Product, SetProduct] = useState({
        ItemID: ItemID,
        Name: '',
        Price: '',
        Description: '',
        Color: '',
        Status: '',
        CateID: '',
        ProDucerID: '',
        PictureID: '',
        Content: '',
    })

    useEffect(() => {
        Axios.get(`https://website-8ld0.onrender.com/detail/${ItemID}`, {
            ItemID: ItemID,
        }).then((response) => {
            console.log(response)
            SetProduct({ ...Product, Name: response.data[0]?.Name, Price: response.data[0]?.Price, Description: response.data[0]?.Description, 
                                    Color: response.data[0]?.Color, Status: response.data[0]?.Status, CateID: response.data[0]?.CateID, ProDucerID: response.data[0]?.ProDucerID, 
                                    PictureID: response.data[0]?.PictureID, Content: response.data[0]?.Content })
        })
    }, [])

    const handleAddImg = () => {
        Axios.post(`https://website-8ld0.onrender.com/manage/products/edit/addimg/${ItemID}`, {
            ItemID: ItemID,
            Content: Product.Content
        }).then((response) => {
            console.log(response)
        })
    }

    const updateProduct = () => {
        Axios.post(`https://website-8ld0.onrender.com/admin/products/edit/${ItemID}`, {
            ItemID: ItemID,
            Name: Product.Name,
            Price: Product.Price,
            Description: Product.Description,
            Color: Product.Color,
            Status: Product.Status,
            CateID: Product.CateID,
            ProDucerID: Product.ProDucerID,
        }).then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <>
            <div className="flex flex-wrap w-full -mx-3 mb-6 p-20 items-center">
                <form className="w-full md:w-1/3 max-w-lg pt-4">
                    <div className="flex flex-wrap">
                        <img className="w-full rounded-10px overflow-hidden  border border-gray-700 " src={Product.Content} alt="Product-Img" />
                        <div className="w-full px-3 py-5">
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-700 rounded py-10 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-left" id="grid-describe" type="text" placeholder={Product.Content || 'Description'} value={Product.Content} onChange={(e) => SetProduct({ ...Product, Content: e.target.value })} />
                        </div>
                        <div className="w-full md:w-full px-6 py-3">
                            <button type="submit" onClick={handleAddImg} className="w-full py-3 px-4 mb-3 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-red-500">
                                Thêm ảnh cho sản phẩm
                            </button>
                        </div>
                    </div>
                </form>
                <form className="w-full md:w-2/3 max-w-lg pl-10">
                    <div className="flex flex-wrap ">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-1">
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-id" type="id" placeholder={Product.ItemID} value={Product.ItemID} readOnly />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-prices" type="text" placeholder={Product.Color || 'Color'} value={Product.Color} onChange={(e) => SetProduct({ ...Product, Color: e.target.value })} />
                        </div>
                        <div className="w-full px-3">
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-name" type="name" placeholder={Product.Name || 'Name'} value={Product.Name} onChange={(e) => SetProduct({ ...Product, Name: e.target.value })} />
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-1">
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-stock" type="text" placeholder={Product.Status || 'Status'} value={Product.Status} onChange={(e) => SetProduct({ ...Product, Status: e.target.value })} />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-prices" type="number" placeholder={Product.Price || 'Price'} value={Product.Price} onChange={(e) => SetProduct({ ...Product, Price: e.target.value })} />
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-stock" type="text" placeholder={Product.CateID || 'CateID'} value={Product.CateID} onChange={(e) => SetProduct({ ...Product, CateID: e.target.value })} />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-left" id="grid-describe" type="text" placeholder="Producer ID" value={Product.ProDucerID} onChange={(e) => SetProduct({ ...Product, ProDucerID: e.target.value })} />
                        </div>
                        <div className="w-full px-3">
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-700 rounded py-10 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-left" id="grid-describe" type="text" placeholder={Product.Description || 'Description'} value={Product.Description} onChange={(e) => SetProduct({ ...Product, Description: e.target.value })} />
                        </div>
                        <div className="w-full px-3">
                            <button type="submit" className="w-full content-center py-3 px-4 mb-3 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-red-500" onClick={updateProduct}>
                                Cập nhật
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
