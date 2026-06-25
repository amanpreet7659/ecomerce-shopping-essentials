import type { FC } from "react"
import CollectionBlock from "./CollectionBlock"
import type { TabRefProps } from "./CollectionTabs"

const CollectionSection: FC<TabRefProps> = ({ breezoRef, heavyRef, supimaRef }) => {
    return (
        <section className="section coll-fabrics" id="coll-fabrics">
            <div className="container">
                <header className="section-header">
                    <div className="section-header__left">
                        <p className="section-header__label">Fabric Collections</p>
                        <h2 className="section-header__title">Chosen for a reason.</h2>
                    </div>
                </header>
                {/* SUPIMA */}
                <CollectionBlock ref={supimaRef} id="coll-supima" fabric="Supima®"
                    title={
                        <>
                            The Softest Tee
                            <br />
                            You'll Ever Own
                        </>
                    }
                    description="
          Supima® cotton is grown exclusively
          in the USA. Its extra-long staple fibres
          create a fabric that doesn't just feel
          soft on Day 1 — it gets softer with every wash.
          "
                    buttonText="Shop Supima — From ₹799"
                    buttonLink="/shop?fabric=supima"
                />

                <div className="divider"></div>

                {/* HEAVY */}
                <CollectionBlock ref={heavyRef}
                    reversed
                    dark
                    id="coll-heavy"
                    fabric="Heavy Duty"
                    title={
                        <>
                            Built to
                            <br />
                            Last Forever
                        </>
                    }
                    description="
          260 GSM structured cotton that
          holds its shape through 100 washes.
          "
                    buttonText="Shop Heavy Duty — From ₹699"
                    buttonLink="/shop?fabric=heavy-duty"
                />

                <div className="divider"></div>

                {/* BREEZO */}
                <CollectionBlock ref={breezoRef}
                    id="coll-breezo"
                    fabric="Breezo™"
                    title={
                        <>
                            Stay Cool.
                            <br />
                            All Day Long.
                        </>
                    }
                    description="
          Our proprietary open-weave structure
          maximises airflow without sacrificing structure.
          "
                    buttonText="Shop Breezo — From ₹599"
                    buttonLink="/shop?fabric=breezo"
                />

            </div>

        </section>
    )
}

export default CollectionSection