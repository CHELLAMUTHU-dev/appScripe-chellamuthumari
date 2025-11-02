import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import Filter from "../components/Filter";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/products"; // ✅ component to render product grid

export async function getServerSideProps() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();
    return { props: { products } };
  } catch (error) {
    return { props: { products: [] } };
  }
}

const recommendations = [
  "RECOMMENDED",
  "NEWEST FIRST",
  "POPULAR",
  "PRICE: HIGH TO LOW",
  "PRICE: LOW TO HIGH",
];

export default function Home({ products }) {
  const [isOpen, setIsOpen] = useState(false);
  const [recommended, setRecommended] = useState(false);
  const [filter, setFilter] = useState(recommendations[0]);
  const filterRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setRecommended(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        {/* === Main Section === */}
        <section>
          <div className="router">
            <h5>HOME</h5>
            <hr />
            <h5>SHOP</h5>
          </div>

          <h1 className="main-heading">DISCOVER OUR PRODUCTS</h1>
          <p className="main-description">
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
            dolor.
          </p>
          <hr />
        </section>

        {/* === Filter Section === */}
        <section className="filter-section">
          <div className="filter-header">
            <p className="count">{products?.length || 0} ITEMS</p>

            <div
              className="filter-box filter"
              onClick={() => setIsOpen(!isOpen)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={isOpen ? "/arrow-left.png" : "/arrow-right.png"}
                alt={isOpen ? "Hide Filter" : "Show Filter"}
              />
              <h5>{isOpen ? "HIDE FILTER" : "SHOW FILTER"}</h5>
            </div>
          </div>
          <div className="mobile-filter">
            <h4 onClick={() => setIsOpen(!isOpen)}>FILTER</h4>
          </div>
          <hr />
          <div
            className="filter-box"
            ref={filterRef}
            onClick={() => setRecommended(!recommended)}
          >
            <h4>{filter}</h4>
            <img src="/arrow-down.png" alt="arrow down" />
          </div>

          {recommended && (
            <ul className="filter-dropdown">
              {recommendations.map((filter, index) => (
                <li
                  key={index}
                  onClick={() => {
                    console.log("Selected Filter:", filter);
                    setFilter(filter);
                    setRecommended(false);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  {filter}
                </li>
              ))}
            </ul>
          )}
        </section>
        <hr />

        {/* === Content Section === */}
        <section className="content">
          {/* Sidebar */}
          {isOpen && (
            <aside className={isOpen ? "visible" : "hidden"}>
              <Filter />
            </aside>
          )}

          {/* Product Grid */}
          <ProductCard products={products} />
        </section>
      </main>
      <Footer />
    </>
  );
}
