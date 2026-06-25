type Props = { dark?: boolean }

const CollectionVisual = ({ dark }: Props) => {
  return (
    <div className={`coll-block__visual ${ dark ? "coll-block__visual--heavy" : "coll-block__visual--supima" }`}>
      <div className={`coll-block__image-placeholder ${dark ? "coll-block__image-placeholder--dark" : "" }`}>
        <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.7">
          <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z" />
        </svg>
        <span>Collection</span>
      </div>
    </div>
  )
}

export default CollectionVisual