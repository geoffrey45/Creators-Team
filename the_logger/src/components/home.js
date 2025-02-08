import img1 from  "../images/dot-bg.png"
import img2 from "../images/choose6.jpeg"
function Home()
{
    return (
        <div>

        <section class="section__container choose__container" id="about">
        <img class="choose__bg" src={img1} alt="bg" />
        <div class="choose__content">

            <h2 class="section__header">Why Choose Us</h2>
            <p class="section__subheader">
            Experience Unmatched  Expertise in getting the best gadget and accessories to suit your needs.
            Discover Why We're the Right Choice for Your Dream tech gadget
            </p>
            <div class="choose__grid">
                <div class="choose__card">
                    <span><i class="ri-truck-line"></i></span>
                    <h4>Fast & Free Shipping</h4>
                    <p>
                    Get your preferred gadget with our Fast & Free Shipping service
                    without delay
                    </p>
                </div>
                <div class="choose__card">
                    <span><i class="ri-shopping-bag-3-line"></i></span>
                    <h4>Easy to Shop</h4>
                    <p>
                    Discover Effortless Elegance and interractive page: Explore Our Easy-to-Shop
                    </p>
                </div>
                <div class="choose__card">
                    <span><i class="ri-customer-service-2-line"></i></span>
                    <h4>24/7 Support</h4>
                    <p>
                    Experience peace of mind knowing that our dedicated team is
                    available round the clock
                    </p>
                </div>
                <div class="choose__card">
                    <span><i class="ri-loop-right-line"></i></span>
                    <h4>Hassle Free Returns</h4>
                    <p>
                    We believe in the perfect match, and if it doesn't quite fit, we
                    make returning items a breeze
                    </p>
                </div>
            </div>
        </div>
        <div class="choose__image">
            <img src={img2} alt="choose" />
        </div>
        </section>

        <section class="offer__container" id="offer">
        <div class="offer__grid__top">
            <img src="assets/offer-1.jpeg" alt="offer" />
            <img src="assets/offer-2.jpeg" alt="offer" />
            <img src="assets/offer-3.jpeg" alt="offer" />
            <div class="offer__content">
            <h2 class="section__header">Smart Offers</h2>
            <p class="section__subheader">
                Explore exclusive deals that can elevate and rock your tech world with style
            </p>
            <button class="btn">Explore Now</button>
            </div>
        </div>
        <div class="offer__grid__bottom">
            <img src="assets/offer-4.jpeg" alt="offer" />
            <img src="assets/offer-5.jpeg" alt="offer" />
            <img src="assets/offer-6.jpeg" alt="offer" />
            <img src="assets/offer-7.jpeg" alt="offer" />
        </div>
        </section>

        <section class="section__container craft__container" id="product">
        <div class="craft__content">
            <h2 class="section__header">Featured Products</h2>
            <p class="section__subheader">
            Elevate Your gadget with Quality and Style
            </p>
            <button class="btn">Explore</button>
        </div>
        <div class="craft__image">
            <div class="craft__image__content">
            <img src="assets/craft-1.jpeg" alt="craft" />
            <p>Lenovo ThinkPad X270</p>
            <h4>Ksh.20,999.00</h4>
            </div>
            <a href="#"><i class="ri-add-line"></i></a>
        </div>
        <div class="craft__image">
            <div class="craft__image__content">
            <img src="assets/craft-2.jpeg" alt="craft" />
            <p>Seagate OneTouch Hub 8TB external HDD</p>
            <h4>Ksh.39,999.00</h4>
            </div>
            <a href="#"><i class="ri-add-line"></i></a>
        </div>
        <div class="craft__image">
            <div class="craft__image__content">
            <img src="assets/craft-3.jpeg" alt="craft" />
            <p>BYNITEK Love U4 Smart Mini Home Projector</p>
            <h4>Ksh.33,999.00</h4>
            </div>
            <a href="#"><i class="ri-add-line"></i></a>
        </div>
        </section>

        <section class="section__container modern__container" id="modern">
        <div class="modern__image">
            <img src="assets/dot-bg.png" alt="bg" class="modern__bg" />
            <img src="assets/modern-1.jpeg" alt="modern" class="modern__img-1" />
            <img src="assets/modern-2.jpeg" alt="modern" class="modern__img-2" />
            <img src="assets/modern-3.jpeg" alt="modern" class="modern__img-3" />
        </div>
        <div class="modern__content">
            <h2 class="section__header">
            We help you get the right product fit and worthy of your taste and style.
            </h2>
            <p class="section__subheader">
            At TechieFinds Our Expertise is to get our client the right product for their needs:
            Let us guide you to find  in our sleek and stylish products that reflect
            your unique taste and lifestyle
            </p>
            <div class="modern__grid">
            <div class="modern__card">
                <span><i class="ri-checkbox-blank-circle-line"></i></span>
                <p>
                Our team specializes in communicating and building 
                a rapport with our clients to make sure their wants
                are met.
                </p>
            </div>
            <div class="modern__card">
                <span><i class="ri-checkbox-blank-circle-line"></i></span>
                <p>
                We stay at the forefront of design trends, ensuring you what you
                get stylish and innovative.
                </p>
            </div>
            <div class="modern__card">
                <span><i class="ri-checkbox-blank-circle-line"></i></span>
                <p>
                Modern tech and accessories design isn't just about aesthetics; it's about
                functionality and comfort too.
                </p>
            </div>
            <div class="modern__card">
                <span><i class="ri-checkbox-blank-circle-line"></i></span>
                <p>
                We take care of all aspects of the design process, from concept and installation.
                </p>
            </div>
            </div>
            <button class="btn">Explore</button>
        </div>
        </section>

        <section class="section__container blog_container" id="blog">
        <h2 class="section__header">Featured Blogs</h2>
        <div class="blog__grid">
            <div class="blog__card">
            <img src="assets/blog1.png" alt="blog" />
            <h4>Mastering Modern Minimalism</h4>
            <p><span>by</span> DesignSavvySoul <span>on</span> Apr 18th, 2022</p>
            </div>
            <div class="blog__card">
            <img src="assets/blog2.jpeg" alt="blog" />
            <h4>The Fusion of Tech and Design</h4>
            <p>
                <span>by</span> ChicNestDEsigns <span>on</span> Nov 10th, 2022
            </p>
            </div>
            <div class="blog__card">
            <img src="assets/blog3.webp" alt="blog" />
            <h4>Eco-Friendly Modern Gadgets</h4>
            <p><span>by</span> HomeStyleHarmony <span>on</span> Feb 25th, 2023</p>
            </div>
        </div>
        </section>
    </div>
    )
}
export default Home;