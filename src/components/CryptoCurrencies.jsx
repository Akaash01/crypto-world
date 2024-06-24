import React, { useState } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { useEffect } from 'react';
import { Row, Col, Card, Input } from 'antd';
const CryptoCurrencies = ({ simplified }) => {
  const count = simplified ? 8 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  console.log(cryptosList?.data?.coins);
  const [cryptos, setcryptos] = useState([]);
  const [searchItem, setSearchItem] = useState('');
  useEffect(() => {
    setcryptos(cryptosList?.data?.coins);
    console.log(cryptos);
  }, [cryptosList]);
  console.log(cryptos);
  useEffect(() => {
    const filteredItem = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchItem.toLowerCase())
    );
    setcryptos(filteredItem);
  }, [searchItem]);
  if (isFetching) return <div>Loading...</div>;
  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="search cryptocurrency"
            onChange={(e) => setSearchItem(e.target.value)}
            value={searchItem}
          />
        </div>
      )}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={currency.uuid}
          >
            <Link to={`/crypto/${currency.uuid}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className="crypto-image" src={currency.iconUrl} />}
                hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {millify(currency.change)}%</p>
                <p>Daily Change: {millify(currency.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default CryptoCurrencies;
