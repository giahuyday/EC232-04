const Profile = () => {
  return (
    <>
      <h1 className="text-3xl font-medium my-8">Billing Details</h1>
      <div className="flex justify-between gap-6">
        <div className="flex-[50%] max-w-[400px] ">
          <div className="text-lg font-semibold capitalize mb-4 cursor-pointer">Manage my account</div>
          <div className="ml-8 cursor-pointer my-2">My Profile</div>
          <div className="ml-8 cursor-pointer my-2">Address Book</div>
          <div className="ml-8 cursor-pointer my-2">My Payment options</div>
          <div className="text-lg font-semibold capitalize my-4 cursor-pointer">My Orders</div>
          <div className="ml-8 cursor-pointer my-2">My returns</div>
          <div className="ml-8 cursor-pointer my-2">My Cancellations</div>
          <div className="text-lg font-semibold capitalize my-4 cursor-pointer">My WishList</div>
        </div>
        <div className="flex-[50%] max-w-[870px]">
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

export default Profile
