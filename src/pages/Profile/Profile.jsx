import { Radio, Space, Tabs } from 'antd'
import React, { useEffect, useState } from 'react'
import MyOrders from './MyOrders/MyOrders'

const { TabPane } = Tabs

const Profile = ({ users }) => {
  console.log(users)
  const [tabPosition, setTabPosition] = useState('left')
  const changeTabPosition = (e) => {
    setTabPosition(e.target.value)
  }

  // useEffect(() => {
  //   Axios.post(`http://localhost:3001/user/${user.AccountID}`, {
  //     ItemID: ItemID,
  //   }).then((response) => {
  //     SetProduct(response.data)
  //   })
  // }, [])
  return (
    <div className="h-[100%] flex flex-col ">
      <h1 className="text-3xl font-medium my-8">Billing Details</h1>
      <Space
        style={{
          marginBottom: 24,
        }}
      >
        Tab position:
        <Radio.Group value={tabPosition} onChange={changeTabPosition}>
          <Radio.Button className="capitalize" value="top">
            top
          </Radio.Button>
          <Radio.Button className="capitalize" value="bottom">
            bottom
          </Radio.Button>
          <Radio.Button className="capitalize" value="left">
            left
          </Radio.Button>
          <Radio.Button className="capitalize" value="right">
            right
          </Radio.Button>
        </Radio.Group>
      </Space>
      <Tabs tabPosition={tabPosition}>
        {/* First Top-level Tab: Manage My Account */}
        <TabPane tab="Manage My Account" key="1">
          <Tabs tabPosition="top" style={{ marginBottom: 24, height: '100%' }}>
            <TabPane className="" tab="My Profile" key="1-1">
              <form className="flex flex-col">
                <div className="flex gap-6">
                  <div className="mb-[32px] flex-1">
                    <label className="text-base font-semibold text-black" htmlFor="name">
                      First Name
                    </label>
                    <input type="name" id="name" name="name" placeholder="Enter your name" className="w-full p-2 border outline-none rounded mt-1 bg-[#F5F5F5]" defaultValue={users.Name} />
                  </div>
                  <div className="mb-[32px] flex-1">
                    <label className="text-base font-semibold text-black" htmlFor="Last Name">
                      Last Name
                    </label>
                    <input type="text" id="Last Name" name="Last Name" placeholder="Your Last Name" className="w-full p-2  rounded mt-1 bg-[#F5F5F5] outline-none" defaultValue={users.Name} />
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="mb-[32px] flex-1">
                    <label className="text-base font-semibold text-black" htmlFor="email">
                      Email
                    </label>
                    <input type="name" id="email" name="email" placeholder="20123456@fit.hcmus.edu.com" className="w-full p-2 border outline-none rounded mt-1 bg-[#F5F5F5]" defaultValue={users.Email} />
                  </div>
                  <div className="mb-[32px] flex-1">
                    <label className="text-base font-semibold text-black" htmlFor="address">
                      Address
                    </label>
                    <input type="text" id="address" name="address" placeholder="224 Nguyễn Văn Cừ, Quận 5, TP HCM" className="w-full p-2 border outline-none rounded mt-1 bg-[#F5F5F5]" defaultValue={users.Adress} />
                  </div>
                </div>
                <div className="mb-[32px]">
                  <label className="text-base font-semibold text-black">Current Password</label>
                  <input type="password" placeholder="Current Password" className="w-full p-2 border outline-none rounded mt-1 bg-[#F5F5F5]" defaultValue={users.Password} />
                  <input type="password" placeholder="New Password" className="w-full p-2 border outline-none rounded mt-1 bg-[#F5F5F5]" />
                  <input type="password" placeholder="Confirm New Password" className="w-full p-2 border outline-none rounded mt-1 bg-[#F5F5F5]" />
                </div>
                <div className="flex gap-2 justify-end">
                  <button className="px-8 py-3 text-black">Cancel</button>
                  <button className="px-8 py-3 bg-rose-500 text-white">Save Changes</button>
                </div>
              </form>
            </TabPane>
            <TabPane className="min-h-700" tab="Address Book" key="1-2">
              Content of Address Book
            </TabPane>
            <TabPane className="min-h-700" tab="My Payment Options" key="1-3">
              Content of My Payment Options
            </TabPane>
          </Tabs>
        </TabPane>

        {/* Second Top-level Tab: My Orders */}
        <TabPane tab="My Orders" key="2">
          <Tabs tabPosition="top" style={{ marginBottom: 24, height: '100%' }}>
            <TabPane className="min-h-700" tab="My Returns" key="2-1">
              <MyOrders />
            </TabPane>
            <TabPane className="min-h-700" tab="My Cancellations" key="2-2">
              Content of My Cancellations
            </TabPane>
          </Tabs>
        </TabPane>

        {/* Third Top-level Tab: My Wishlist */}
        <TabPane tab="My Wishlist" key="3">
          <Tabs tabPosition="top" style={{ marginBottom: 24, height: '100%' }}>
            <TabPane className="min-h-700" tab="All your wishlist here" key="3-1">
              Content of Wishlist Item 1
            </TabPane>
          </Tabs>
        </TabPane>
      </Tabs>
    </div>
  )
}

export default Profile
