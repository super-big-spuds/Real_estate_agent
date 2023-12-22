import Menu from './Menu'
import { Outlet } from 'react-router-dom'
export default function Layout(){
    return(
 
        <div className='flex h-full min-h-screen bg-gray-300 '>
            <Menu/>
            <Outlet/>
        </div>
   
    )
}