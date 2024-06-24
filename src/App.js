import { Layout, Typography, Space } from 'antd';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import {
  NavBar,
  HomePage,
  News,
  CryptoDetails,
  CryptoCurrencies
} from './components';
import './App.css';
function App() {
  return (
    <div className="app">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route
                exact
                path="/cryptocurrencies"
                element={<CryptoCurrencies />}
              />
              <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route exact path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title level={5} style={{ color: 'white' }}>
            Developed by <br />
            Akaash Vardharajan
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>

            <Link to="/news"> News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
