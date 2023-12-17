import React, { useState, useEffect } from 'react';
import { Range } from 'react-range';
import './Filtrar.css';

function Filtrar({ onApplyFilter, onClearFilter }) {
    const [values, setValues] = useState([0, 2000]);
    const [mostrarFiltros, setMostrarFiltros] = useState(false);
    const [esMovil, setEsMovil] = useState(window.innerWidth < 768);

    useEffect(() => {
        const manejarCambioDeTamaño = () => {
            setEsMovil(window.innerWidth < 768);
        };

        window.addEventListener('resize', manejarCambioDeTamaño);
        return () => window.removeEventListener('resize', manejarCambioDeTamaño);
    }, []);

    const toggleFiltros = () => {
        setMostrarFiltros(!mostrarFiltros);
    };

    const handleApplyFilter = () => {
        onApplyFilter(values[0], values[1]);
        toggleFiltros();
    };

    const handleClearFilters = () => {
        setValues([0, 2000]);
        onClearFilter();
        toggleFiltros();
    };

    return (
        <div>
            {mostrarFiltros && <div className="overlay" onClick={toggleFiltros}></div>}
            <button onClick={toggleFiltros} className="btn btn-secondary btn-filtrar">Filtrar</button>
            {mostrarFiltros && (
                <div className={`menu-filtrar ${esMovil ? 'movil' : 'escritorio'}`}>
                    <div className="filtro-precio">
                        <h2>Selecciona un intervalo</h2>
                    <Range
                        step={1}
                        min={0}
                        max={2000}
                        values={values}
                        onChange={setValues}
                        renderTrack={({ props, children }) => (
                            <div {...props} style={{ ...props.style, height: '6px', width: '100%', backgroundColor: '#ccc' }} className="track">
                                <div
                                    className="selected"
                                    style={{
                                        left: `${(values[0] / 2000) * 100}%`,
                                        width: `${((values[1] - values[0]) / 2000) * 100}%`,
                                        backgroundColor: '#4b8eda',
                                        height: '100%',
                                        position: 'absolute'
                                    }}
                                />
                                {children}
                            </div>
                        )}
                        renderThumb={({ props, index }) => (
                            <div {...props} style={{ ...props.style, height: '20px', width: '20px', backgroundColor: '#4b8eda' }} className="thumb" />
                        )}
                    />
                        <div className="precio-valores">
                            <span>{values[0]}€ - {values[1]}€</span>
                        </div>
                    </div>
                    <button onClick={handleApplyFilter}>Aplicar Filtros</button>
                    <button onClick={handleClearFilters}>Limpiar Filtros</button>
                </div>
            )}
        </div>
    );
}

export default Filtrar;
