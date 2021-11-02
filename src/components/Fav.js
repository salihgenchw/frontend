import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { favoridenCikart } from "../redux/actions";
import { ToastContainer } from "react-toastify";

const Fav = (props) => {
  const totalPrice = props.fav.reduce(
    (total, item) => (total += item.Price),
    0
  );
  return (
    <div>
      <h2>
        <Link to="/">Favori Listesi</Link>
      </h2>

      <h3>
        Toplam Tutar : &#8378;
        {totalPrice.toFixed(2)}
      </h3>
      <h1>Favoriler</h1>
      {props.fav.map((fav) => (
        <div className="book" key={fav.id}>
          <img src={fav.img} alt="props.Title" />

          <div>
            <h4>{fav.Title}</h4>
            <p>Yazar : {fav.Author}</p>
            <p>Fiyat : {fav.Price}</p>
            <button onClick={() => props.favoridenCikart(fav)}>
              Favoriden Çıkart
            </button>
          </div>
        </div>
      ))}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    fav: state.fav,
  };
};
export default connect(mapStateToProps, { favoridenCikart })(Fav);
