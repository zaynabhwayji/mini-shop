// product list component that displays all products and allows adding to cart
import ProductCard from "./ProductCard";
function ProductList({ products }) {
    return (
        <div className="product-list">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}
export default ProductList;