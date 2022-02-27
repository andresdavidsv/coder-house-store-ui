import React from 'react';
import ProductItem from '@components/ProductItem';
import '@styles/ProductList.scss';
import useGetProducts from '@hooks/useGetProducts';

const ProductList = () => {
  const { products } = useGetProducts();
  return (
    <section className="main-container">
      <div className="ProductList">
        {products.map((product, i) => (
          <ProductItem
            product={product}
            key={`ProductItem-${product.id}-${i}`}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
