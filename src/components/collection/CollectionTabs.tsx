import { useState, type FC, type RefObject } from 'react'
import { useSearchParams } from 'react-router-dom'

export interface TabRefProps {
    supimaRef: RefObject<HTMLDivElement | null>
    heavyRef: RefObject<HTMLDivElement | null>
    breezoRef: RefObject<HTMLDivElement | null>
    silhouettesRef: RefObject<HTMLDivElement | null>
}

const CollectionTabs: FC<TabRefProps> = ({ breezoRef, heavyRef, silhouettesRef, supimaRef }) => {
    const [searchParams] = useSearchParams()
    /* REFS */

    /* ACTIVE TAB */
    const [activeTab, setActiveTab] = useState(searchParams.get('fabric') || searchParams.get('cat') || 'all')

    /* SCROLL */
    const scrollToSection = (filter: string) => {
        setActiveTab(filter)
        if (filter === 'all') {
            window.scrollTo({ top: 0, behavior: 'smooth' })
            return
        }

        if (filter === 'supima') {
            supimaRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            return
        }

        if (filter === 'heavy-duty') {
            heavyRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            return
        }

        if (filter === 'breezo') {
            breezoRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            return
        }
        silhouettesRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
        <div className="coll-tabs-bar">
            <div className="container">
                <div className="coll-tabs">
                    {/* ALL */}
                    <button className={`coll-tab ${activeTab === 'all' ? 'active' : ''}`} onClick={() => scrollToSection('all')}>All</button>
                    <span className="coll-tabs__sep">|</span>
                    <span className="coll-tabs__group-label">By Fabric</span>
                    {/* SUPIMA */}
                    <button className={`coll-tab ${activeTab === 'supima' ? 'active' : ''}`} onClick={() => scrollToSection('supima')}>Supima®</button>
                    {/* HEAVY */}
                    <button className={`coll-tab ${activeTab === 'heavy-duty' ? 'active' : ''}`} onClick={() => scrollToSection('heavy-duty')} >Heavy Duty</button>
                    {/* BREEZO */}
                    <button className={`coll-tab ${activeTab === 'breezo' ? 'active' : ''}`} onClick={() => scrollToSection('breezo')}>Breezo™</button>
                </div>
            </div>
        </div>
    )
}

export default CollectionTabs