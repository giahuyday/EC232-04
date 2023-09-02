import { formatNumber, calBeDiscount, formatNum } from "../../helper/dataHelper";
import LoadingEffect from "../../components/Loading";
import Modal from "../../components/Modal";
import { useState, useEffect } from "react";
import axios from 'axios'
import CheckOutCard from "./CheckOutCard";
import { useUserStore } from "../../store";
import Axios from 'axios'
import { useNavigate } from "react-router-dom";


const CheckOut = () => {
  const navigate = useNavigate()
  const Account = useUserStore((state) => state.Account)
  const setAccount = useUserStore((state) => state.setAccount)
  const [state, _setState] = useState({
    AccountID: Account?.AccountID,
    Name: Account?.Name,
    Email: Account?.Email || '',
    Adress: Account?.Adress || '',
    Phone: Account?.Phone,
    Note: '',
  })
  const setState = (obj) => {
    _setState({ ...state, ...obj })
  }

  const [dataCart, setDataCart] = useState([])
  const [resetData, setResetData] = useState(false)
  const [InfoGuest, setInfoGuest] = useState()
  
  const totalPrice = sessionStorage.getItem('totalPrice')
  const endPrice = sessionStorage.getItem('endPrice')
  const ship = sessionStorage.getItem('ship')
  const usedCoin = sessionStorage.getItem('usedCoin')

  const reset = () => {
    setResetData(!resetData)
}
  const [paymentMethod, setPaymentMethod] = useState('bank');
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [isValidCreditCard, setIsValidCreditCard] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState("Pending")

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
    setPaymentStatus("Success")
    setCreditCardNumber('');
    setIsValidCreditCard(false);
  }
  
  const handleCreditCardNumberChange = (event) => {
    const newNumber = event.target.value.replace(/\s/g, ''); // Remove spaces
    setCreditCardNumber(newNumber);
    Luhn_Algorthm(newNumber); // Validate on input change
  };


  const Luhn_Algorthm = () => {
    let sum = 0;
    let alternate = false;

    for (let i = creditCardNumber.length - 1; i >= 0; i--) {
      let num = parseInt(creditCardNumber.charAt(i), 10);

      if (alternate) {
        num *= 2;
        if (num > 9) {
          num -= 9;
        }
      }

      sum += num;
      alternate = !alternate;
    }

    setIsValidCreditCard(sum % 10 === 0);
  };  
  
  const handlePlaceOrder = () => {
      Axios.post('http://localhost:3001/auth/order', {
        // Order_table: [[dataCart.ItemID, dataCart.Quantity]],
        data_Cart: dataCart,
        GuessName: state.Name,
        Delivery_Address: state.Adress,
        Total_Price: endPrice,
        Email: state.Email,
        Phone: state.Phone,
        Note: state.Note,
        Status: paymentStatus,
        AccountID: state.AccountID, 
        ShipFee: ship,
        Point_Used: coin,
      }).then((response) => {
        if(response.data === "Success"){
            console.log("Place Order Success")
            navigate("/")
        }
        else{
          console.log("Order Failed")
        }
      })
  }

  useEffect(() => {
      axios.get(`http://localhost:3001/cart/loading/` + state.AccountID).then((result) => {
          setDataCart(() => result.data)
          // console.log(result.data)  
      })
      axios.get(`http://localhost:3001/admin/points/getInfo/${state.AccountID}`).then((result) => setInfoGuest(result.data[0][0]))
  }, [resetData])
  const UseCoin = () => {
      setCheckBox(!checkBox)
      if (checkBox == true) {
          if (InfoGuest?.Money === 0) {
              setCoin(0)
          }
          else if (endPrice < InfoGuest?.Money) {
              setCoin(endPrice)
          }
          else {
              setCoin(InfoGuest?.Money)
          }
      }
      else {
          setCoin(0)
      }
  }
  return (
    <>
      <h1 className="text-3xl font-medium my-8">Billing Details</h1>
      <div className="flex justify-between">
        <form className="flex-[50%] max-w-[600px]">
          <div className="mb-[32px]">
            <label className="opacity-40" htmlFor="name">
              First Name
            </label>
            <input type="name" id="name" name="name" placeholder="Enter your name" required className="w-full p-2 border border-gray-400 rounded mt-1 bg-[#F5F5F5]" value={state.Name} onChange={(e) => setState({ ...state, Name: e.target.value })}/>
          </div>
          <div className="mb-[32px]">
            <label className="opacity-40" htmlFor="street-address">
              Address
            </label>
            <input type="text" id="street-address" name="street-address" required className="w-full p-2 border border-gray-400 rounded mt-1 bg-[#F5F5F5]" value={state.Adress} onChange={(e) => setState({ ...state, Adress: e.target.value })}/>
          </div>
          <div className="mb-[32px]">
            <label className="opacity-40" htmlFor="phone">
              Phone Number
            </label>
            <input type="tel" id="phone" name="phone" placeholder="Enter your phone" required className="w-full p-2 border border-gray-400 rounded mt-1 bg-[#F5F5F5]" value={state.Phone} onChange={(e) => setState({ ...state, Phone: e.target.value })}/>
          </div>
          <div className="mb-[32px]">
            <label className="opacity-40" htmlFor="name">
              Email Address
            </label>
            <input type="email" id="name" name="name" placeholder="Enter your name" className="w-full p-2 border border-gray-400 rounded mt-1 bg-[#F5F5F5]" value={state.Email} onChange={(e) => setState({ ...state, Email: e.target.value })}/>
          </div>
          <div className="mb-[32px]">
            <label className="opacity-40" htmlFor="note">
              Note
            </label>
            <input type="note" id="note" name="note" placeholder="Write your notes" className="w-full p-2 border border-gray-400 rounded mt-1 bg-[#F5F5F5]" value={state.Note} onChange={(e) => setState({ ...state, Note: e.target.value })}/>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="save-info" name="save-info" className="w-6 h-6 accent-[#DB4444]" />
            <label className="text-lg select-none" htmlFor="save-info">
              Save this information for faster check-out next time
            </label>
          </div>
        </form>
        <div className="flex-[50%] max-w-[600px]">
          
        {dataCart.length > 0 ? (
                                dataCart.map((item) => (
                                    <CheckOutCard props={item} key={item.ItemID}/>
                                ))
                            ) : (
                                <LoadingEffect />
                            )}

          <div className="border-b border-gray-300 my-2"></div>
          <div className="flex items-center justify-between mb-10">
            <div className="">Subtotal: </div>
            <span>{formatNumber(totalPrice)}</span>
          </div>
          <div className="border-b border-gray-300 my-2"></div>
          <div className="flex items-center justify-between mb-10">
            <div className="">Shipping: </div>
            <span>{formatNumber(ship)}</span>
          </div>
          <div className="border-b border-gray-300 my-2"></div>
          <div className="flex items-center justify-between mb-10">
            <div className="">Total: </div>
            <span>{formatNumber(endPrice)}</span>
          </div>
          <div className="flex items-center justify-between">
          <div className="flex items-center mb-10 gap-4 ">
            <input type="radio" name="type" id="bank" value="bank" className="w-6 h-6 accent-rose-400 cursor-pointer" checked={paymentMethod === 'bank'} onChange={handlePaymentMethodChange}/>
            <label htmlFor="bank" className="cursor-pointer">
              Bank
            </label>
          </div>
            <div className="flex gap-2"><img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6879be09-4afc-4425-8c60-a9fc98511f80/df36fd1-42e05408-ded1-4e8d-b68b-1ad25876b379.jpg/v1/fill/w_899,h_561,q_75,strp/vissa_by_lukkijurpo_df36fd1-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTYxIiwicGF0aCI6IlwvZlwvNjg3OWJlMDktNGFmYy00NDI1LThjNjAtYTlmYzk4NTExZjgwXC9kZjM2ZmQxLTQyZTA1NDA4LWRlZDEtNGU4ZC1iNjhiLTFhZDI1ODc2YjM3OS5qcGciLCJ3aWR0aCI6Ijw9ODk5In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.fIFFLgVSITb-yZ2tnozresy6NHu3YDbZI9H0zhINYT4" alt="" className="w-12 h-12 object-contain" />
            </div>
          </div>    
          {paymentMethod === 'bank' && (
            <form className="flex flex-wrap gap- w-full p-5" id="BankCard">
            <label className="relative w-full flex flex-col" htmlFor="creditCardNumber">
              <span className="font-bold mb-3">Card number</span>
              <input className="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300" type="text" name="card_number" placeholder="0000 0000 0000" value={creditCardNumber} onChange={handleCreditCardNumberChange}/>
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </label>
            <label className="relative flex-1 flex flex-col">
              <span className="font-bold mb-3">Expire date</span>
              <input className="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300" type="date" name="expire_date" placeholder="MM/YY" />
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </label>
            <label className="relative flex-1 flex flex-col">
              <span className="font-bold flex items-center gap-3 mb-3">
                CVC/CVV
                <span className="relative group">
                  <span className="hidden group-hover:flex justify-center items-center px-2 py-1 text-xs absolute -right-2 transform translate-x-full -translate-y-1/2 w-max top-1/2 bg-black text-white"> Hey ceci est une infobulle !</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
              </span>
              <input className="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300" type="text" name="card_cvc" placeholder="&bull;&bull;&bull;" />
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </label>
            <div>
            {isValidCreditCard && (
                  <div className="mt-2 text-green-500">Valid Visa Card</div>
              )}
              {!isValidCreditCard && creditCardNumber.length > 0 && (
                  <div className="mt-2 text-red-500">Invalid Visa Card</div>
              )}</div>
            </form>
          )}
          <div className="flex items-center mb-10 gap-4 ">
            <input type="radio" name="type" id="cash" value="cash" className="w-6 h-6 accent-rose-400 cursor-pointer" checked={paymentMethod === 'cash'} onChange={handlePaymentMethodChange}/>
            <label htmlFor="cash" className="cursor-pointer">
              Cash on delivery
            </label>
          </div>
          <div className="flex gap-4 mb-10">
            <input type="text" name="" id="" className="flex-1 outline-none border border-blue-200 px-4 py-2" placeholder="Coupon code" />
            <button className="flex-1 px-4 py-2 bg-rose-500 text-white">Apply coupon</button>
          </div>
          <button className="px-8 py-3 bg-rose-500 w-full text-white" onClick={handlePlaceOrder}>Place Order</button>
        </div>
      </div>
    </>
  )
}

export default CheckOut
