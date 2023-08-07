
import axios from "axios";
import React, { useEffect, useState } from "react";


export default function Modal() {
   const [showModal, setShowModal] = useState(false);
   const [dataGuest, setDataGuest] = useState([]);
   const [nameGuest, setNameGuest] = useState("");
   const [reset, setReset] = useState(false);
   const getKH = async () => {

   }
   useEffect(() => {
      getKH();
   }, [reset]);
   const handleClick = (name) => {
      setNameGuest(name);
   };
   const handleClickAdd = async () => {

      setReset(!reset);
   };
   return (
      <>

         <button onClick={() => setShowModal(true)} className="flex flex-row items-start justify-start gap-[757px]">
            <div className="rounded flex flex-row py-4 px-12 items-center justify-center border-[1px] border-solid border-gray-400">
               <div className="relative leading-[24px] font-medium">
                  Discount
               </div>
            </div>
         </button>


         {showModal ? (
            <>
               <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl bg-white">
                     {/*content*/}
                     <div className="border-0 rounded-lg shadow-lg relative flex flex-col bg-white w-[700px] h-[500px]  outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                           <h3 className="text-3xl font-semibold">
                              View All Discount
                           </h3>
                           <button
                              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                              onClick={() => setShowModal(false)}
                           >
                              <span className="bg-transparent opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none text-[red] bg-[red]">
                                 <div ></div>
                              </span>
                           </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto overflow-auto">
                           <div className="grid grid-cols-2 gap-[20px]">
                              <div className=" h-[100px] p-[10px] border-[1px] border-[gray] rounded-[5px] ">
                                 <div className="  h-[100%] w-[90px] flex gap-[10px]">
                                    <img src="https://media.istockphoto.com/id/1194972593/vi/vec-to/b%C3%A1n-gi%E1%BA%A3m-gi%C3%A1-nh%C3%A3n-d%C3%A1n-icon-vector-vector-gi%E1%BA%A3m-gi%C3%A1-th%E1%BA%BB-%C4%91%E1%BB%8F-cung-c%E1%BA%A5p-nh%C3%A3n-gi%C3%A1-cho-thi%E1%BA%BFt-k%E1%BA%BF-%C4%91%E1%BB%93.jpg?s=612x612&w=0&k=20&c=xPc1R3Cem457b4KD-JNddDZL3xIg2qmLVrYt2i13VbE=" alt="" className="object-cover h-[100%] w-[90px]" />
                                    <div className="">
                                       <div>heloo</div>
                                       <div>gelo</div>
                                       <div>heool</div>
                                    </div>
                                 </div>
                              </div>
                              <div className=" h-[100px] p-[10px] border-[1px] border-[gray] rounded-[5px]">
                                 <div className=" bg-[blue] h-[100%] w-[90px]">
                                    <img src="https://media.istockphoto.com/id/1194972593/vi/vec-to/b%C3%A1n-gi%E1%BA%A3m-gi%C3%A1-nh%C3%A3n-d%C3%A1n-icon-vector-vector-gi%E1%BA%A3m-gi%C3%A1-th%E1%BA%BB-%C4%91%E1%BB%8F-cung-c%E1%BA%A5p-nh%C3%A3n-gi%C3%A1-cho-thi%E1%BA%BFt-k%E1%BA%BF-%C4%91%E1%BB%93.jpg?s=612x612&w=0&k=20&c=xPc1R3Cem457b4KD-JNddDZL3xIg2qmLVrYt2i13VbE=" alt="" className="object-cover h-[100%] w-[90px]" />
                                 </div>
                              </div>
                              <div className=" h-[100px] p-[10px] border-[1px] border-[gray] rounded-[5px]">
                                 <div className=" bg-[blue] h-[100%] w-[90px]">
                                    <img src="https://media.istockphoto.com/id/1194972593/vi/vec-to/b%C3%A1n-gi%E1%BA%A3m-gi%C3%A1-nh%C3%A3n-d%C3%A1n-icon-vector-vector-gi%E1%BA%A3m-gi%C3%A1-th%E1%BA%BB-%C4%91%E1%BB%8F-cung-c%E1%BA%A5p-nh%C3%A3n-gi%C3%A1-cho-thi%E1%BA%BFt-k%E1%BA%BF-%C4%91%E1%BB%93.jpg?s=612x612&w=0&k=20&c=xPc1R3Cem457b4KD-JNddDZL3xIg2qmLVrYt2i13VbE=" alt="" className="object-cover h-[100%] w-[90px]" />
                                 </div>
                              </div>
                              <div className=" h-[100px] p-[10px] border-[1px] border-[gray] rounded-[5px]">
                                 <div className=" bg-[blue] h-[100%] w-[90px]">
                                    <img src="https://media.istockphoto.com/id/1194972593/vi/vec-to/b%C3%A1n-gi%E1%BA%A3m-gi%C3%A1-nh%C3%A3n-d%C3%A1n-icon-vector-vector-gi%E1%BA%A3m-gi%C3%A1-th%E1%BA%BB-%C4%91%E1%BB%8F-cung-c%E1%BA%A5p-nh%C3%A3n-gi%C3%A1-cho-thi%E1%BA%BFt-k%E1%BA%BF-%C4%91%E1%BB%93.jpg?s=612x612&w=0&k=20&c=xPc1R3Cem457b4KD-JNddDZL3xIg2qmLVrYt2i13VbE=" alt="" className="object-cover h-[100%] w-[90px]" />
                                 </div>
                              </div>

                           </div>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                           <button
                              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => setShowModal(false)}
                           >
                              Close
                           </button>
                           {/* <button
                              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={handleClickAdd}
                           >
                              ADD
                           </button> */}
                        </div>
                     </div>
                  </div>
               </div>
               <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
         ) : null}
      </>
   );
}
