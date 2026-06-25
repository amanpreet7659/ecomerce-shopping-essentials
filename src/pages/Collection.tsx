// import Breadcrumbs from "../components/common/Breadcrumbs"
// import MainLayout from "../layouts/MainLayout"

// const Collection = () => {
//   return (
//     <MainLayout>
//       <main>
//         {/* COLLECTION HERO */}
//         <section className="coll-hero" aria-label="Collections overview">
//           <div className="coll-hero__inner container">
//             <Breadcrumbs items={[{ label: "Home", path: "/home" }, { label: "Collections", path: "/collections" }]} />
//             <div className="coll-hero__content">
//               <p className="label coll-hero__label">Our Range</p>
//               <h1 className="coll-hero__title">Collections</h1>
//               <p className="coll-hero__desc">
//                 Every piece begins with fabric. Browse by material or by silhouette —
//                 the fit is your choice, the quality is always ours.
//               </p>
//             </div>

//           </div>
//         </section>

//         {/* COLLECTION TABS */}
//         <div className="coll-tabs-bar">
//           <div className="container">

//             <div className="coll-tabs">
//               <button className="coll-tab active" data-filter="all">
//                 All
//               </button>

//               <span className="coll-tabs__sep">|</span>

//               <span className="coll-tabs__group-label">
//                 By Fabric
//               </span>

//               <button className="coll-tab" data-filter="supima">
//                 Supima®
//               </button>

//               <button className="coll-tab" data-filter="heavy-duty">
//                 Heavy Duty
//               </button>

//               <button className="coll-tab" data-filter="breezo">
//                 Breezo™
//               </button>

//               <span className="coll-tabs__sep">|</span>

//               <span className="coll-tabs__group-label">
//                 By Style
//               </span>

//               <button className="coll-tab" data-filter="tees">
//                 Regular Tees
//               </button>

//               <button className="coll-tab" data-filter="oversized">
//                 Oversized
//               </button>

//               <button className="coll-tab" data-filter="polos">
//                 Polos
//               </button>
//             </div>

//           </div>
//         </div>

//         {/* FABRIC COLLECTIONS */}
//         <section className="section coll-fabrics" id="coll-fabrics">
//           <div className="container">

//             <header className="section-header">

//               <div className="section-header__left">
//                 <p className="section-header__label">
//                   Fabric Collections
//                 </p>

//                 <h2 className="section-header__title">
//                   Chosen for a reason.
//                 </h2>
//               </div>

//             </header>

//             {/* SUPIMA */}
//             <div
//               className="coll-block"
//               id="coll-supima"
//               data-coll="supima"
//             >

//               <div className="coll-block__intro">

//                 <div className="coll-block__intro-left">

//                   <div className="coll-block__fabric-tag">
//                     Supima®
//                   </div>

//                   <h3 className="coll-block__title">
//                     The Softest Tee
//                     <br />
//                     You'll Ever Own
//                   </h3>

//                   <p className="coll-block__desc">
//                     Supima® cotton is grown exclusively in the USA.
//                     Its extra-long staple fibres create a fabric
//                     that doesn't just feel soft on Day 1 —
//                     it gets softer with every wash.
//                   </p>

//                   <div className="coll-block__attrs">

//                     <div className="coll-block__attr">
//                       <span className="coll-block__attr-val">
//                         180 GSM
//                       </span>

//                       <span className="coll-block__attr-label">
//                         Weight
//                       </span>
//                     </div>

//                     <div className="coll-block__attr">
//                       <span className="coll-block__attr-val">
//                         2×
//                       </span>

//                       <span className="coll-block__attr-label">
//                         Softer
//                       </span>
//                     </div>

//                     <div className="coll-block__attr">
//                       <span className="coll-block__attr-val">
//                         50%
//                       </span>

//                       <span className="coll-block__attr-label">
//                         Better colour
//                       </span>
//                     </div>

//                   </div>

//                   <a
//                     href="shop.html?fabric=supima"
//                     className="btn btn--primary"
//                   >
//                     Shop Supima — From ₹799
//                   </a>

//                 </div>

//                 <div className="coll-block__visual coll-block__visual--supima">

//                   <div className="coll-block__image-placeholder">

//                     <svg
//                       width="72"
//                       height="72"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="0.7"
//                     >
//                       <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z" />
//                     </svg>

//                     <span>Supima Collection</span>

//                   </div>

//                 </div>

//               </div>

//             </div>

//             <div className="divider"></div>

//             {/* HEAVY DUTY */}
//             <div
//               className="coll-block"
//               id="coll-heavy"
//               data-coll="heavy-duty"
//             >

//               <div className="coll-block__intro coll-block__intro--reversed">

//                 <div className="coll-block__visual coll-block__visual--heavy">

//                   <div className="coll-block__image-placeholder coll-block__image-placeholder--dark">

//                     <svg
//                       width="72"
//                       height="72"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="0.7"
//                     >
//                       <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z" />
//                     </svg>

//                     <span>Heavy Duty Collection</span>

//                   </div>

//                 </div>

//                 <div className="coll-block__intro-left">

//                   <div className="coll-block__fabric-tag coll-block__fabric-tag--heavy">
//                     Heavy Duty
//                   </div>

//                   <h3 className="coll-block__title">
//                     Built to
//                     <br />
//                     Last Forever
//                   </h3>

//                   <p className="coll-block__desc">
//                     260 GSM structured cotton that holds
//                     its shape through 100 washes.
//                   </p>

//                   <div className="coll-block__attrs">

//                     <div className="coll-block__attr">
//                       <span className="coll-block__attr-val">
//                         260 GSM
//                       </span>

//                       <span className="coll-block__attr-label">
//                         Weight
//                       </span>
//                     </div>

//                     <div className="coll-block__attr">
//                       <span className="coll-block__attr-val">
//                         100+
//                       </span>

//                       <span className="coll-block__attr-label">
//                         Wash cycles
//                       </span>
//                     </div>

//                     <div className="coll-block__attr">
//                       <span className="coll-block__attr-val">
//                         0%
//                       </span>

//                       <span className="coll-block__attr-label">
//                         Shrink
//                       </span>
//                     </div>

//                   </div>

//                   <a
//                     href="shop.html?fabric=heavy-duty"
//                     className="btn btn--primary"
//                   >
//                     Shop Heavy Duty — From ₹699
//                   </a>

//                 </div>

//               </div>

//             </div>

//             <div className="divider"></div>

//             {/* BREEZO */}
//             <div
//               className="coll-block"
//               id="coll-breezo"
//               data-coll="breezo"
//             >

//               <div className="coll-block__intro">

//                 <div className="coll-block__intro-left">

//                   <div className="coll-block__fabric-tag coll-block__fabric-tag--breezo">
//                     Breezo™
//                   </div>

//                   <h3 className="coll-block__title">
//                     Stay Cool.
//                     <br />
//                     All Day Long.
//                   </h3>

//                   <p className="coll-block__desc">
//                     Our proprietary open-weave structure
//                     maximises airflow without sacrificing structure.
//                   </p>

//                   <div className="coll-block__attrs">

//                     <div className="coll-block__attr">
//                       <span className="coll-block__attr-val">
//                         140 GSM
//                       </span>

//                       <span className="coll-block__attr-label">
//                         Weight
//                       </span>
//                     </div>

//                     <div className="coll-block__attr">
//                       <span className="coll-block__attr-val">
//                         3×
//                       </span>

//                       <span className="coll-block__attr-label">
//                         More airflow
//                       </span>
//                     </div>

//                     <div className="coll-block__attr">
//                       <span className="coll-block__attr-val">
//                         Quick
//                       </span>

//                       <span className="coll-block__attr-label">
//                         Dry tech
//                       </span>
//                     </div>

//                   </div>

//                   <a
//                     href="shop.html?fabric=breezo"
//                     className="btn btn--primary"
//                   >
//                     Shop Breezo — From ₹599
//                   </a>

//                 </div>

//               </div>

//             </div>

//           </div>
//         </section>

//       </main>
//     </MainLayout>
//   )
// }

// export default Collection

import MainLayout from "../layouts/MainLayout"

/* COMPONENTS */
import CollectionHero from "../components/collection/CollectionHero"
import CollectionTabs from "../components/collection/CollectionTabs"
import CollectionSection from "../components/collection/CollectionSection"
import { useRef } from "react"

const Collection = () => {
  const supimaRef = useRef<HTMLDivElement | null>(null)
  const heavyRef = useRef<HTMLDivElement | null>(null)
  const breezoRef = useRef<HTMLDivElement | null>(null)
  const silhouettesRef = useRef<HTMLDivElement | null>(null)
  return (
    <MainLayout>
      <main>
        <CollectionHero />
        <CollectionTabs breezoRef={breezoRef} heavyRef={heavyRef} silhouettesRef={silhouettesRef} supimaRef={supimaRef} />
        <CollectionSection breezoRef={breezoRef} heavyRef={heavyRef} silhouettesRef={silhouettesRef} supimaRef={supimaRef} />
      </main>
    </MainLayout>
  )
}

export default Collection