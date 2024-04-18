import { IoMenu, IoSearch } from "react-icons/io5";
import profile from '../../../../public/images/killua.png'

const Header = ({ sidebar, setSidebar }) => {
return(
    <div className="bg-text2 pt-4 px-2 pb-8 shadow-md flex flex-wrap gap-4">
        <div className="rightSection bg-red-100 basis-1/5 flex items-center" onClick={()=>(setSidebar(!sidebar))}>
            <IoMenu className="text-[35px] mr-4 hover:bg-gray-100" />
            <span className="text-gray-500 font-semi text-[20px]">Formulir</span>
        </div>

        <div className="middleSection basis-7/12 relative text-gray-500 shrink min-w-54 ">
            <input type="text" className="bg-gray-100 border-none rounded-md w-full p-2 pl-10 focus:border-none focus:outline-none" placeholder="Telusuri" />
            < IoSearch className="absolute top-1/2 left-2 transform -translate-y-1/2 text-[20px]"/>
        </div>

        <div className="rightSection basis-1/6 bg-red-100 relative shrink min-w-18 ">
            <div className=" absolute 
            top-1/2 -translate-y-1/2 right-0">
                <img src={profile} alt="" className="w-[35px] h-[35px] object-center object-cover rounded-full" />
            </div>
        </div>
    </div>
)
}

export default Header