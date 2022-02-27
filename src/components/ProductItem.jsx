import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from '@context/AppContext';
import { deleteProduct } from '@services/api/products';
import '@styles/ProductItem.scss';

import btAddCartIcon from '@icons/bt_add_to_cart.svg';

const ProductItem = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useContext(AppContext);

  const handleClick = (item) => {
    addToCart(item);
  };
  const handleDelete = (id) => {
    deleteProduct(id).then(() => {
      window.location.reload();
    })
  };
  const handleEdit = (id) => {
    navigate(`/editproduct/${id}`);
  };
  const handleDetail = (item) => {
    navigate(`/products/${item}`);
  };
  return (
    <div className="ProductItem" >
      <img
        src={product.thumbnail}
        alt={product.name}
        onClick={() => handleDetail(product._id)}
      />
      <div className="product-info">
        <div>
          <p>$ {product.price}</p>
          <p>{product.name}</p>
        </div>
        <figure onClick={() => handleEdit(product._id)}>
          <img src={btAddCartIcon} alt="" />
        </figure>
        <figure onClick={() => handleDelete(product._id)}>
          <img src={btAddCartIcon} alt="" />
        </figure>
        <figure onClick={() => handleClick(product)}>
          <img src={btAddCartIcon} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
