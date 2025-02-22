import React from "react";
import Book1 from "../../assets/books/book1.jpg";
import Book2 from "../../assets/books/book2.jpg";
import Book3 from "../../assets/books/book3.jpg";
import { FaStar } from "react-icons/fa6";
import "./Books.css"; // Importing external CSS

const booksData = [
  {
    id: 1,
    img: Book1,
    title: "Sands of Eppla",
    rating: 5.0,
    author: "Janeal Falor",
  },
  {
    id: 2,
    img: Book2,
    title: "Artificial Intelligence & Generative AI for Beginners",
    rating: 4.5,
    author: "John",
  },
  {
    id: 3,
    img: Book3,
    title: "It Ends With Us",
    rating: 4.7,
    author: "Lost Girl",
  },
  {
    id: 4,
    img: Book2,
    title: "Artificial Intelligence & Generative AI for Beginners",
    rating: 4.4,
    author: "Someone",
  },
  {
    id: 1,
    img: Book1,
    title: "Sands of Eppla",
    rating: 5.0,
    author: "Janeal Falor",
  },
];

const Books = () => {
  return (
    <>
      <div className="books-container">
        <div className="container">

          {/* Body section */}
          <div>
            <div className="books-grid">
              {/* Card */}
              {booksData.map(({ id, img, title, rating, author }) => (
                <div key={id} className="book-card">
                  <img src={img} alt="" className="book-image" />
                  <div>
                    <h3 className="book-title">{title}</h3>
                    <div className="book-rating">
                      <FaStar className="star-icon" />
                      <span>{rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="button-container">
              <button className="view-all-button">View All Books</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Books;
