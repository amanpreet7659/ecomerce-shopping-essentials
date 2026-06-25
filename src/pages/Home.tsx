// import { Link } from 'react-router-dom'

/* COMPONENTS */
import BestSellers from '../components/home/BestSellers'
import BrandStory from '../components/home/BrandStory'
import Categories from '../components/home/Categories'
import Fabrics from '../components/home/Fabrics'
// import BestSellers from '../components/home/BestSellers'
// import BrandStory from '../components/home/BrandStory'
// import Newsletter from '../components/home/Newsletter'

/* LAYOUT */
import Hero from '../components/home/Hero'
import Newsletter from '../components/home/Newsletter'
import MainLayout from '../layouts/MainLayout'
// import AnnouncementBar from '../components/layout/AnnouncementBar'
// import Navbar from '../components/layout/Navbar'

const Home = () => {
  return (
    <MainLayout>
      <main>
        {/* <!-- ══════════════════════════════ HERO SECTION ══════════════════════════════ --> */}
        <Hero/>
        {/* <!-- ══════════════════════════════ CATEGORIES SECTION ══════════════════════════════ --> */}
        <Categories/>
        {/* <!-- ══════════════════════════════ FABRIC COLLECTIONS ══════════════════════════════ --> */}
        <Fabrics/>
        {/* <!-- ══════════════════════════════ BEST SELLERS ══════════════════════════════ --> */}
        <BestSellers/>
        {/* <!-- ══════════════════════════════ BRAND STORY ══════════════════════════════ --> */}
        <BrandStory/>
        {/* <!-- ══════════════════════════════ NEWSLETTER ══════════════════════════════ --> */}
        <Newsletter/>
      </main >
    </MainLayout >
  )
}

// <main>
//   {/* HERO */}
//   <section
//     className="hero"
//     id="hero"
//     aria-label="Hero"
//   >
//     <div className="container">
//       <div className="hero__inner">
//         {/* LEFT CONTENT */}
//         <div className="hero__content">
//           <span className="label hero__label">
//             New Season — SS '25
//           </span>
//           <h1 className="hero__headline">
//             Built for
//             <br />
//             <em>Everyday</em>
//             <br />
//             Greatness.
//           </h1>
//           <p className="hero__subtext">
//             Premium essentials engineered
//             from the world's finest fabrics.
//             <br />
//             Nothing more. Nothing less.
//           </p>
//           <div className="hero__actions">
//             <Link
//               to="/shop"
//               className="btn btn--primary"
//             >
//               Shop All
//             </Link>
//             <Link
//               to="/collections"
//               className="btn btn--outline"
//             >
//               View Collections
//             </Link>
//           </div>
//         </div>
//         {/* RIGHT VISUAL */}
//         <div className="hero__visual">
//           {/* MAIN IMAGE */}
//           <div className="hero__image-block hero__image-block--main">
//             <img
//               src="/images/hero/hero-main.png"
//               alt="Supima Tee"
//               className="hero__image"
//             />
//             <span className="hero__image-tag">
//               Supima Cotton
//             </span>
//           </div>
//           {/* SIDE IMAGE */}
//           <div className="hero__image-block hero__image-block--secondary">
//             <img
//               src="/images/hero/hero-side.png"
//               alt="Oversized Tee"
//               className="hero__image"
//             />
//           </div>
//         </div>
//       </div>
//       {/* SCROLL */}
//       <div
//         className="hero__scroll-hint"
//         aria-hidden="true"
//       >
//         <span>Scroll</span>
//         <svg
//           width="12"
//           height="20"
//           viewBox="0 0 12 20"
//           fill="none"
//         >
//           <rect
//             x="1"
//             y="1"
//             width="10"
//             height="18"
//             rx="5"
//             stroke="currentColor"
//             strokeWidth="1.2"
//           />

//           <circle
//             cx="6"
//             cy="5"
//             r="1.5"
//             fill="currentColor"
//           />
//         </svg>
//       </div>
//     </div>
//   </section>
//   {/* SECTIONS */}
//   <Categories />
//   <Fabrics />
//   <BestSellers />
//   <BrandStory />
//   <Newsletter />

// </main>
export default Home