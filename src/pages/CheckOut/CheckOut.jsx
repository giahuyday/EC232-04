const CheckOut = () => {
  return (
    <>
      <h1 className="text-3xl font-medium my-8">Billing Details</h1>
      <div className="flex justify-between gap-6">
        <form className="flex-[50%] max-w-[470px]">
          <div className="mb-[32px]">
            <label className="opacity-40" htmlFor="name">
              First Name
            </label>
            <input type="name" id="name" name="name" placeholder="Enter your name" className="w-full p-2 border border-gray-400 rounded mt-1 bg-[#F5F5F5]" />
          </div>
          <div className="mb-[32px]">
            <label className="opacity-40" htmlFor="company-name">
              Company company-name
            </label>
            <input type="text" id="company-name" name="company-name" placeholder="Your company name" className="w-full p-2 border border-gray-400 rounded mt-1 bg-[#F5F5F5]" />
          </div>
          <div className="mb-[32px]">
            <label className="opacity-40" htmlFor="street-address">
              Street Address
            </label>
            <input type="text" id="street-address" name="street-address" className="w-full p-2 border border-gray-400 rounded mt-1 bg-[#F5F5F5]" />
          </div>
          <div className="mb-[32px]">
            <label className="opacity-40" htmlFor="name">
              Apartment, floor, etc. (Opiontal)
            </label>
            <input type="text" id="name" name="name" placeholder="Enter your Apartment floor" className="w-full p-2 border border-gray-400 rounded mt-1 bg-[#F5F5F5]" />
          </div>
          <div className="mb-[32px]">
            <label className="opacity-40" htmlFor="city">
              Town/City
            </label>
            <input type="text" id="city" name="city" placeholder="Enter your city" className="w-full p-2 border border-gray-400 rounded mt-1 bg-[#F5F5F5]" />
          </div>
          <div className="mb-[32px]">
            <label className="opacity-40" htmlFor="phone">
              Phone Number
            </label>
            <input type="tel" id="phone" name="phone" placeholder="Enter your phone" className="w-full p-2 border border-gray-400 rounded mt-1 bg-[#F5F5F5]" />
          </div>
          <div className="mb-[32px]">
            <label className="opacity-40" htmlFor="name">
              Email Address
            </label>
            <input type="email" id="name" name="name" placeholder="Enter your name" className="w-full p-2 border border-gray-400 rounded mt-1 bg-[#F5F5F5]" />
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="save-info" name="save-info" className="w-6 h-6 accent-[#DB4444]" />
            <label className="text-lg select-none" htmlFor="save-info">
              Save this information for faster check-out next time
            </label>
          </div>
        </form>
        <div className="flex-[50%] max-w-[527px]">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-6">
              <img src="https://smartnew.vn/wp-content/uploads/2019/11/CVC.png" alt="" className="w-12 h-12" />
              <div className="">LCD Monitor 24inch</div>
            </div>
            <span>$650</span>
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-6">
              <img src="https://smartnew.vn/wp-content/uploads/2019/11/CVC.png" alt="" className="w-12 h-12" />
              <div className="">LCD Monitor 24inch</div>
            </div>
            <span>$650</span>
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-6">
              <img src="https://smartnew.vn/wp-content/uploads/2019/11/CVC.png" alt="" className="w-12 h-12" />
              <div className="">LCD Monitor 24inch</div>
            </div>
            <span>$650</span>
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-6">
              <img src="https://smartnew.vn/wp-content/uploads/2019/11/CVC.png" alt="" className="w-12 h-12" />
              <div className="">LCD Monitor 24inch</div>
            </div>
            <span>$650</span>
          </div>
          <div className="border-b border-gray-300 my-2"></div>
          <div className="flex items-center justify-between mb-10">
            <div className="">Subtotal: </div>
            <span>$650</span>
          </div>
          <div className="border-b border-gray-300 my-2"></div>
          <div className="flex items-center justify-between mb-10">
            <div className="">Shipping: </div>
            <span>$650</span>
          </div>
          <div className="border-b border-gray-300 my-2"></div>
          <div className="flex items-center justify-between mb-10">
            <div className="">Total: </div>
            <span>$650</span>
          </div>
          <div className="flex items-center justify-between mb-10">
            <div className="flex item-center gap-4 cursor-pointer">
              <input type="radio" name="type" id="bank" className="w-6 h-6 accent-rose-400 cursor-pointer" />
              <label htmlFor="bank" className="cursor-pointer">
                Bank
              </label>
            </div>
            <div className="flex gap-2">
              <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6879be09-4afc-4425-8c60-a9fc98511f80/df36fd1-42e05408-ded1-4e8d-b68b-1ad25876b379.jpg/v1/fill/w_899,h_561,q_75,strp/vissa_by_lukkijurpo_df36fd1-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTYxIiwicGF0aCI6IlwvZlwvNjg3OWJlMDktNGFmYy00NDI1LThjNjAtYTlmYzk4NTExZjgwXC9kZjM2ZmQxLTQyZTA1NDA4LWRlZDEtNGU4ZC1iNjhiLTFhZDI1ODc2YjM3OS5qcGciLCJ3aWR0aCI6Ijw9ODk5In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.fIFFLgVSITb-yZ2tnozresy6NHu3YDbZI9H0zhINYT4" alt="" className="w-12 h-12 object-contain" />
              <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6879be09-4afc-4425-8c60-a9fc98511f80/df36fd1-42e05408-ded1-4e8d-b68b-1ad25876b379.jpg/v1/fill/w_899,h_561,q_75,strp/vissa_by_lukkijurpo_df36fd1-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTYxIiwicGF0aCI6IlwvZlwvNjg3OWJlMDktNGFmYy00NDI1LThjNjAtYTlmYzk4NTExZjgwXC9kZjM2ZmQxLTQyZTA1NDA4LWRlZDEtNGU4ZC1iNjhiLTFhZDI1ODc2YjM3OS5qcGciLCJ3aWR0aCI6Ijw9ODk5In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.fIFFLgVSITb-yZ2tnozresy6NHu3YDbZI9H0zhINYT4" alt="" className="w-12 h-12 object-contain" />
              <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6879be09-4afc-4425-8c60-a9fc98511f80/df36fd1-42e05408-ded1-4e8d-b68b-1ad25876b379.jpg/v1/fill/w_899,h_561,q_75,strp/vissa_by_lukkijurpo_df36fd1-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTYxIiwicGF0aCI6IlwvZlwvNjg3OWJlMDktNGFmYy00NDI1LThjNjAtYTlmYzk4NTExZjgwXC9kZjM2ZmQxLTQyZTA1NDA4LWRlZDEtNGU4ZC1iNjhiLTFhZDI1ODc2YjM3OS5qcGciLCJ3aWR0aCI6Ijw9ODk5In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.fIFFLgVSITb-yZ2tnozresy6NHu3YDbZI9H0zhINYT4" alt="" className="w-12 h-12 object-contain" />
              <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6879be09-4afc-4425-8c60-a9fc98511f80/df36fd1-42e05408-ded1-4e8d-b68b-1ad25876b379.jpg/v1/fill/w_899,h_561,q_75,strp/vissa_by_lukkijurpo_df36fd1-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTYxIiwicGF0aCI6IlwvZlwvNjg3OWJlMDktNGFmYy00NDI1LThjNjAtYTlmYzk4NTExZjgwXC9kZjM2ZmQxLTQyZTA1NDA4LWRlZDEtNGU4ZC1iNjhiLTFhZDI1ODc2YjM3OS5qcGciLCJ3aWR0aCI6Ijw9ODk5In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.fIFFLgVSITb-yZ2tnozresy6NHu3YDbZI9H0zhINYT4" alt="" className="w-12 h-12 object-contain" />
            </div>
          </div>
          <div className="flex items-center mb-10 gap-4 ">
            <input type="radio" name="type" id="cash" className="w-6 h-6 accent-rose-400 cursor-pointer" />
            <label htmlFor="cash" className="cursor-pointer">
              Cash on delivery
            </label>
          </div>
          <div className="flex gap-4 mb-10">
            <input type="text" name="" id="" className="flex-1 outline-none border border-blue-200 px-4 py-2" placeholder="Coupon code" />
            <button className="flex-1 px-4 py-2 bg-rose-500 text-white">Apply coupon</button>
          </div>
          <button className="px-8 py-3 bg-rose-500 text-white">Place Order</button>
        </div>
      </div>
    </>
  )
}

export default CheckOut
