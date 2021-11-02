import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { favoriyeEkle } from "../redux/actions";
import { ToastContainer } from "react-toastify";

const Products = (props) => {
  return (
    <div className="container">
      <Link to="/favorilistesi">Favorilerim</Link>
      <div className="row">
        {props.bookList.map((book) => (
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card mb-3 ">
              <img className="card-img-top img-thumbnail" src={book.img} alt={book.Title} style={{maxHeight:473 , minHeight:473}}/>
              <div className="card-body">
                <h5 className="card-title">{book.Title}</h5>
                <p className="card-text">{book.Author}</p>

                <button className="btn btn-success" onClick={() => props.favoriyeEkle(book)}>
                  Favorilere Ekle
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
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
