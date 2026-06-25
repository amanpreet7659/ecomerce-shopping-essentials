import { Link } from 'react-router-dom'

/* TYPES */
import type { Product } from '../../types/product'

type Props = {
  product: Product
}

const ProductCard = ({ product }: Props) => {
  return (
    <article className="product-card">

      {/* IMAGE */}
      <Link
        to={`/product/${product.id}`}
        className="product-card__image-wrap"
      >

        <img
          src={product.image}
          alt={product.name}
          className="product-card__image"
        />

        {product.badge && (
          <span className="product-card__badge">
            {product.badge}
          </span>
        )}

      </Link>

      {/* INFO */}
      <div className="product-card__info">

        <p className="product-card__category">
          {product.category} · {product.fabric}
        </p>

        <h3 className="product-card__name">
          {product.name}
        </h3>

        <p className="product-card__fabric">
          {product.gsm} · {product.description}
        </p>

        {/* PRICE */}
        <div className="product-card__price-row">

          <span className="product-card__price">
            ₹{product.price}
          </span>

          {product.originalPrice && (
            <span className="product-card__price--original">
              ₹{product.originalPrice}
            </span>
          )}

        </div>

        {/* COLORS */}
        <div className="product-card__colors">

          {product.colors.map((color) => (
            <span
              key={color}
              className="color-dot"
              style={{ background: color }}
            />
          ))}

        </div>

      </div>

    </article>
  )
}

export default ProductCard