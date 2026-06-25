import Breadcrumbs from "../common/Breadcrumbs"

const CollectionHero = () => {
  return (
    <section className="coll-hero" aria-label="Collections overview" >
      <div className="coll-hero__inner container">
        <Breadcrumbs
          items={[
            { label: "Home", path: "/home" },
            { label: "Collections", path: "/collections" },
          ]}
        />
        <div className="coll-hero__content">
          <p className="label coll-hero__label">Our Range</p>
          <h1 className="coll-hero__title">Collections</h1>
          <p className="coll-hero__desc">
            Every piece begins with fabric.
            Browse by material or by silhouette —
            the fit is your choice,
            the quality is always ours.
          </p>

        </div>

      </div>

    </section>
  )
}

export default CollectionHero