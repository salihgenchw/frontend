import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { favoriyeEkle } from "../redux/actions";
import { ToastContainer } from "react-toastify";

const Products = (props) => {
  console.log(props);

  return (
    <div>
      <h2>
        <span>Kitap Listesi</span>
        <Link to="/fav">Favorilerim</Link>
      </h2>
      {props.bookList.map((book) => (
        <div className="book" key={book.id}>
          <img src={book.img} alt="props.Title" />

          <div>
            <h4>{book.Title}</h4>
            <p>Yazar : {book.Author}</p>
            <p>Fiyat : {book.Price}</p>
            <button onClick={() => props.favoriyeEkle(book)}>
              Favorilere Ekle
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
    bookList: state.bookList,
    fav: state.fav,
  };
};
const mapActionsToProps = { favoriyeEkle };
export default connect(mapStateToProps, mapActionsToProps)(Products);
