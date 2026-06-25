import { Link } from "react-router-dom"
import CollectionVisual from "./CollectionVisual"
import type { RefObject } from "react"

type Props = {
  id: string
  fabric: string
  title: React.ReactNode
  description: string
  buttonText: string
  buttonLink: string
  reversed?: boolean
  dark?: boolean
  ref:RefObject<HTMLDivElement | null>
}

const CollectionBlock = ({ id, fabric, title, description, buttonText, buttonLink, reversed, dark, ref }: Props) => {

  return (
    <div className="coll-block" id={id} ref={ref}>
      <div className={`coll-block__intro ${reversed ? "coll-block__intro--reversed" : "" }`}>
        {/* VISUAL */}
        <CollectionVisual dark={dark} />
        {/* CONTENT */}
        <div className="coll-block__intro-left">
          <div className={`coll-block__fabric-tag ${dark ? "coll-block__fabric-tag--heavy" : "" }`}>{fabric}</div>
          <h3 className="coll-block__title">{title}</h3>
          <p className="coll-block__desc">{description}</p>
          <Link to={buttonLink} className="btn btn--primary">{buttonText}</Link>
        </div>
      </div>
    </div>
  )
}

export default CollectionBlock