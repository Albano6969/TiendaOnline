import React, { useState, useEffect, useRef } from 'react';
import Filtrar from './Filtrar';
import Footer from './Footer';
import Nav from './Nav';
import Modal from './Modal';

function App() {
  const [products, setProducts] = useState([]); // Lista completa de productos
  const [filteredProducts, setFilteredProducts] = useState([]); // Productos después de aplicar filtro o búsqueda
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showNoResultsModal, setShowNoResultsModal] = useState(false);
  const footerRef = useRef(null);

  const applyFilter = (minPrice, maxPrice) => {
    fetch(`http://localhost:8888/api/products?minPrice=${minPrice}&maxPrice=${maxPrice}`) 
      .then(response => response.json())
      .then(data => {
        setFilteredProducts(data.products);
      })
      .catch(error => console.error('Error:', error));
  };

  const handleClearFilters = () => {
    setFilteredProducts(products); // Restablece los productos filtrados a la lista completa
  };

  const handleSearch = (query) => {
    if (!query) {
      setFilteredProducts(products);
      return;
    }
    const lowerCaseQuery = query.toLowerCase();
    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(lowerCaseQuery) ||
      product.description.toLowerCase().includes(lowerCaseQuery)
    );

    if (filtered.length === 0) {
      setShowNoResultsModal(true);
    } else {
      setFilteredProducts(filtered);
    }
  };

  useEffect(() => {
    fetch('http://localhost:8888/api/products') 
      .then(response => response.json())
      .then(data => {
        setProducts(data.products);
        setFilteredProducts(data.products); // Inicializa los productos filtrados con la lista completa
      })
      .catch(error => console.error('Error:', error));
  }, []);

  const openModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  const handleCloseNoResultsModal = () => {
    setShowNoResultsModal(false);
    setFilteredProducts(products); // Muestra todos los productos
  };

  return (
    <div className="App">
      <Nav onSearch={handleSearch} />

      <div className="container mt-3">
        <div className="row">
          {filteredProducts.map(product => (
            <div key={product.id} className="col-12 col-md-6 col-lg-3 mb-4">
              <div className="card card-clickable" onClick={() => openModal(product)}>
                <img className="card-img-top" src={product.thumbnail} alt={product.title} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text card-price">Precio: {product.price}€</p>
                  <a href="#" className="btn btn-primary">Agregar al Carrito</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Filtrar onApplyFilter={applyFilter} onClearFilter={handleClearFilters} />
      <Footer ref={footerRef} />

      {showModal && (
        <Modal show={showModal} onClose={closeModal}>
          <h2>{selectedProduct?.title}</h2>
          <img src={selectedProduct?.thumbnail} alt={selectedProduct?.title} />
          <p>{selectedProduct?.description}</p>
        </Modal>
      )}

      {showNoResultsModal && (
        <Modal show={showNoResultsModal} onClose={handleCloseNoResultsModal}>
          <h2>OOOPPSSSSS!!!</h2>
          <p>No hemos obtenido resultados para esta búsqueda.</p>
        </Modal>
      )}
    </div>
  );
}

export default App;
