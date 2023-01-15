// Imports
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import Swiper from "swiper";
import 'swiper/css';
import Coupons from "../components/Coupon/Coupon";


const Product = () => {
    const swiper = new Swiper(".mySwiper", {
        effect: "cards",
        grabCursor: true,
      });
    return (
        <>
            <Header product authorized/>
            <section className="grid grid-cols-7 border-b mx-auto">
                <aside className="border-r col-span-2 text-center p-5">
                    <h3 className="text-4xl font-bold mb-2 text-secondary font-rubik">Promo for you</h3>
                    <p className="font-poppins">Coupons will be updated every weeks. Check them out!</p>
                    {/* <div className="swiper mySwiper my-4">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="px-3 py-10 bg-primary w-3/4 mx-auto rounded-3xl text-black font-poppins">
                                    <div className="rounded-full w-20 h-20 mx-auto bg-cover bg-no-repeat bg-center bg-[url(../images/spaghetti.webp)]"></div>
                                    <h5 class="font-bold mt-1">Beef Spaghetti</h5>
                                    <h5 class="font-bold">20% OFF</h5>
                                    <p class="text-xs mt-2 mb-4">
                                        Buy 1 Choco Oreo and get 20% off for Beef Spaghetti
                                    </p>
                                    <hr className="border-t-2 border-black border-dashed" />
                                    <p class="mt-4">COUPON CODE</p>
                                    <h3 class="font-bold">FNPR15RG</h3>
                                    <p class="text-xs mt-10">
                                        *Valid untill January 20th 2023
                                    </p>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="px-3 py-10 bg-primary w-3/4 mx-auto rounded-3xl text-black font-poppins">
                                    <div className="rounded-full w-20 h-20 mx-auto bg-cover bg-no-repeat bg-center bg-[url(../images/spaghetti.webp)]"></div>
                                    <h5 class="font-bold mt-1">Beef Spaghetti</h5>
                                    <h5 class="font-bold">20% OFF</h5>
                                    <p class="text-xs mt-2 mb-4">
                                        Buy 1 Choco Oreo and get 20% off for Beef Spaghetti
                                    </p>
                                    <hr className="border-t-2 border-black border-dashed" />
                                    <p class="mt-4">COUPON CODE</p>
                                    <h3 class="font-bold">FNPR15RG</h3>
                                    <p class="text-xs mt-10">
                                        *Valid untill January 20th 2023
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <Coupons />
                </aside>
                <main className="col-span-5 p-10">
                    <Link to='product/add-product'><a href="product/add-product" className="btn-primary font-medium">Add products +</a></Link>
                </main>
            </section>
        </>
    )
}


export default Product