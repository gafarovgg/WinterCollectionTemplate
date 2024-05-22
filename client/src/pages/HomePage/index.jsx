import React, { useEffect, useState } from "react";
import "./index.scss";
import { Button } from "antd";
import { Card } from "antd";
const { Meta } = Card;
import { Col, Row } from "antd";
import { getAllData } from "../../services";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllData().then((res) => {
      setProducts(res.data.data);
    });
  }, []);
  console.log(products);

  return (
    <div id="homepage">
      <div className="home-page">
        <section id="banner">
          <div className="container">
            <div className="banner-image">
              <img
                src="https://preview.colorlib.com/theme/estore/assets/img/hero/hero_man.png"
                alt=""
              />
            </div>
            <div className="banner-texts">
              <span className="discount">
                <i>60% Discount</i>
              </span>
              <h2>Winter Collection</h2>
              <span>Best Cloth Collection By 2020</span>
              {/* <Button type="primary" shape="">
                Shop Now
              </Button> */}
              <Button type="primary">Shop Now</Button>{" "}
            </div>
          </div>
        </section>
        <div className="container">
          <section id="shopbycategory">
            <div className="container">
              <h1 className="shopbycategorytxt">Shop by Category</h1>
            </div>
            <div className="categories">
              <div className="category-1">
                <img
                  src="https://preview.colorlib.com/theme/estore/assets/img/categori/cat1.jpg"
                  alt=""
                />
              </div>
              <div className="category-2">
                <img
                  src="https://preview.colorlib.com/theme/estore/assets/img/categori/cat2.jpg"
                  alt=""
                />
              </div>
              <div className="category-3">
                <img
                  src="https://preview.colorlib.com/theme/estore/assets/img/categori/cat3.jpg"
                  alt=""
                />
              </div>
            </div>
          </section>
          <section id="latest-products">
            <div className="container">
              <h2 className="latestproducts">
                Latest Products
                <hr />
              </h2>
              <div className="cards">
                <Row gutter={16}>
                  {products &&
                    products.map((p) => {
                      return (
                        <Col
                          className="gutter-row"
                          span={6}
                          xs={24}
                          md={12}
                          lg={8}
                          key={p._id}
                        >
                          <Card
                            hoverable
                            // style={{
                            //   width: 240,
                            // }}
                            cover={<img alt="example" src={p.imageUrl} />}
                          >
                            <FaStar />
                            <FaStar />
                            <FaStar />

                            <FaRegStar />
                            <FaRegStar />

                            <Meta title={p.title} />
                            <p className="oldprice">{`$${p.oldPrice}`}</p>
                            <p className="newprice">{`$${p.newPrice}`}</p>
                          </Card>
                        </Col>
                      );
                    })}
                </Row>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
