import React from 'react';
import ProductItem from '@components/ProductItem';
import '@styles/ProductList.scss';
import useGetProducts from '@hooks/useGetProducts';

const API = 'http://localhost:3001/api/products';

const ProductList = () => {
  const { products } = useGetProducts(API);
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
