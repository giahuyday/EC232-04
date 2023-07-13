import React from 'react'
import Link from 'antd/es/typography/Link'
const HeaderAdmin = ({ children }) => {
    return (
        <div className='w-[100vw] h-[100vh]'>
            <div className='flex justify-center'>
                <div className='h-[100px] w-[1440px]'>
                </div>
            </div>
            <div className='absolute h-[2px] w-[100vw] bg-[black] left-0'></div>
            <div className='flex h-[calc(100%_-_100px)]'>
                <div className='h-[100%] w-[300px] flex justify-center'>
                    <div className='h-[600px] w-[120px] bg-[white] mt-[50px] gap-y-[10px] flex flex-col'>
                    <Link to="#">   <p className='font-[500] text-[18px]'> Quản trị</p></Link> 
                    <Link to="#">   <p className='font-[500] text-[18px]'> Quản trị</p></Link> 
                    <Link to="#">   <p className='font-[500] text-[18px]'> Quản trị</p></Link> 
                    <Link to="#">   <p className='font-[500] text-[18px]'> Quản trị</p></Link> 
                    <Link to="#">   <p className='font-[500] text-[18px]'> Quản trị</p></Link> 
                    <Link to="#">   <p className='font-[500] text-[18px]'> Quản trị</p></Link> 
                      
                    </div>
                </div>
                <div className='h-[100%] w-[2px] bg-[black]'></div>
                <div className='bg-[white] h-[100%] w-[calc(100%_-_302px)]'>
                    {/* <div className='bg-[pink] h-[80px] border-solid border-[black] border-b-[2px]'>
                        
                    </div>
                    <div className='bg-[green] h-[calc(100%_-_180px)]'>
                        
                    </div>
                    <div className='bg-[red] h-[100px] border-solid border-[black] border-t-[2px]'>
                        
                    </div> */}
                    {children}
                </div>
            </div>

            <div className></div>
        </div>
    )
}

export default HeaderAdmin
