import React, { useState } from 'react';
// Exportable Components
export const SkeletonCard = () => (
  <div className="skeleton-card">
    <div className="skeleton-image"></div>
    <div className="skeleton-text title"></div>
    <div className="skeleton-text subtitle"></div>
    <div className="skeleton-text subtitle"></div>
    <div className="skeleton-text price"></div>
    <div className="skeleton-button"></div>
  </div>
);

export const Spinner = ({ text = "Loading Products..." }) => (
  <div className="spinner-container">
    <div className="spinner"></div>
    <div className="loading-text">{text}</div>
  </div>
);

export const PulseDots = () => (
  <div className="pulse-container">
    <div className="pulse-dot"></div>
    <div className="pulse-dot"></div>
    <div className="pulse-dot"></div>
  </div>
);

export const ProgressBar = ({ text = "Loading your products..." }) => (
  <div className="progress-container">
    <div className="progress-bar">
      <div className="progress-fill"></div>
    </div>
    <div className="progress-text">{text}</div>
  </div>
);

export const BoxLoader = () => (
  <div className="box-container">
    <div className="box-loader">
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
    </div>
  </div>
);

export const CartLoader = () => (
  <div className="cart-loader-container">
    <div className="cart-loader">
      <div className="cart-icon"></div>
      <div className="cart-wheels">
        <div className="wheel"></div>
        <div className="wheel"></div>
      </div>
    </div>
  </div>
);

// Main App Component
const Productloader = () => {
  const [selectedLoader, setSelectedLoader] = useState("all");

  const loaders = [
    {
      id: "skeleton",
      name: "Skeleton Cards",
      component: () => (
        <div className="loading-grid">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      ),
      code: `import { SkeletonCard } from './LoadingComponents';

<SkeletonCard />`,
    },
    {
      id: "spinner",
      name: "Spinner",
      component: () => <Spinner />,
      code: `import { Spinner } from './LoadingComponents';

<Spinner text="Loading Products..." />`,
    },
    {
      id: "pulse",
      name: "Pulse Dots",
      component: () => <PulseDots />,
      code: `import { PulseDots } from './LoadingComponents';

<PulseDots />`,
    },
    {
      id: "progress",
      name: "Progress Bar",
      component: () => <ProgressBar />,
      code: `import { ProgressBar } from './LoadingComponents';

<ProgressBar text="Loading your products..." />`,
    },
    {
      id: "box",
      name: "Box Animation",
      component: () => <BoxLoader />,
      code: `import { BoxLoader } from './LoadingComponents';

<BoxLoader />`,
    },
    {
      id: "cart",
      name: "Shopping Cart",
      component: () => <CartLoader />,
      code: `import { CartLoader } from './LoadingComponents';

<CartLoader />`,
    },
  ];

  return (
    <div className="app-container">
      <style>{styles}</style>

      <div className="container">

        <div className="loader-selector">
          <div className="selector-title">Select Loading Animation:</div>
          <div className="button-group">
            <button
              className={`loader-button ${
                selectedLoader === "all" ? "active" : ""
              }`}
              onClick={() => setSelectedLoader("all")}
            >
              Show All
            </button>
            {loaders.map((loader) => (
              <button
                key={loader.id}
                className={`loader-button ${
                  selectedLoader === loader.id ? "active" : ""
                }`}
                onClick={() => setSelectedLoader(loader.id)}
              >
                {loader.name}
              </button>
            ))}
          </div>
        </div>

        {selectedLoader === "all" ? (
          loaders.map((loader) => (
            <div key={loader.id} className="demo-section">
              <h2 className="section-title">{loader.name}</h2>
              {loader.component()}
              <div className="code-example">
                <div className="code-title">Usage Example:</div>
                <pre>{loader.code}</pre>
              </div>
            </div>
          ))
        ) : (
          <div className="demo-section">
            <h2 className="section-title">
              {loaders.find((l) => l.id === selectedLoader)?.name}
            </h2>
            {loaders.find((l) => l.id === selectedLoader)?.component()}
            <div className="code-example">
              <div className="code-title">Usage Example:</div>
              <pre>{loaders.find((l) => l.id === selectedLoader)?.code}</pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Productloader;
