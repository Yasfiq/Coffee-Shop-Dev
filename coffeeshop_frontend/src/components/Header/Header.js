// Imports
import NavbarBrand from "../Navbar-Brand/Navbar-Brand";
import Navlink from "../Navlink/Navlink";
import { Link } from "react-router-dom";


const Header = (props) => {
    if (props.authorized) {
        return (
            <>
                <header className='shadow-lg'>
                    <nav className="flex justify-between container mx-auto px-16 py-7">
                        <NavbarBrand />
                        <ul className="flex justify-center items-center">
                            <Navlink linkto='/' title='Home' active={(props.home) && true}/>
                            <Navlink linkto='product' title='Product' active={(props.product) && true}/>
                            <Navlink linkto='cart' title='Cart' active={(props.cart) && true}/>
                            <Navlink linkto='history' title='History' active={(props.history) && true}/>
                        </ul>
                        <div className="flex space-x-4 items-center ">
                            <img src={require('../../assets/images/icon/search-icon.webp')} alt="icon search" width='30' height='30' />
                            <div class="mx-4 relative space-x-2">
                                <p class="bg-secondary w-auto h-auto p-1 text-xs absolute flex justify-center items-center rounded-full -top-2.5 -left-3 text-white">99+</p>
                                <img src={require('../../assets/images/icon/chat-icon.webp')} alt="chat-icon" width='30' height='30' />
                            </div>
                            <img src={require('../../assets/images/defaultprofil.webp')} alt="Default" width='50' height='50' className="rounded-full" />
                        </div>
                    </nav>
                </header>
            </>
        )
    } else {
        return (
            <>
                <header className='shadow-lg'>
                    <nav className="flex justify-between container mx-auto px-16 py-7">
                        <NavbarBrand />
                        <ul className="flex justify-center items-center">
                            <Navlink linkto='/' title='Home' active={(props.home) && true}/>
                            <Navlink linkto='product' title='Product' active={(props.product) && true}/>
                            <Navlink linkto='cart' title='Cart' active={(props.cart) && true}/>
                            <Navlink linkto='history' title='History' active={(props.history) && true}/>
                        </ul>
                        <div className="space-x-10">
                            <Link to='login'>
                                <button type="button" className="text-secondary">Login</button>
                            </Link>
                            <Link>
                                <button type="button" className="btn-primary rounded-full">Sign Up</button>
                            </Link>
                        </div>
                    </nav>
                </header>
            </>
        )
    }
}


export default Header