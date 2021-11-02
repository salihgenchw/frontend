import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notifyEkle = () =>
  toast("Favorilere Eklendi !", {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
const notifyCikart = () =>
  toast("Favorilere Cikarma Basarili !", {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

export const favoriyeEkle = (book) => {
  notifyEkle();
  return {
    type: "FAVORIYE_EKLE",
    payload: book,
  };
};

export const favoridenCikart = book => {
  notifyCikart();
  return {
    type: "FAVORIDEN_CIKART",
    payload: book,
  };
};
