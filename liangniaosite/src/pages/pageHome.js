import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import img1 from "../res/home1.png";

class pageHome extends Component {
  render() {
    return (
      <div>
        <section className="section1">
          <div className="section1Container">
              <div className="titleNav">
                  <div>
                      <p className="title">欢迎来到椋鸟酒馆</p>
                      <br/><br/><br/>
                      <p className="subtitle">这里是中国最大的区块链开发者联盟，这里汇集了中国最先进的思想和建设。</p>
                  </div>
                  <br/>
                  <Button outline color="secondary">了解更多...</Button>
              </div>
          </div>
        </section>

        <section className="section3">
          <div className="section2Container">
            <Row>
              <Col>
                <Row>
                  <Col>
                    <img alt="" src={img1}/>
                  </Col>
                  <Col>
                    <div className="apptextcontainer">
                      <a className="sec3subtitle">英雄卡</a>
                      <br/>
                      <a className="sec3subcontent">玩家可使用幸运币抽取独一无二的三国英雄卡。</a>
                    </div>
                  </Col>
                </Row>
              </Col>
              <div className="lineV"> </div>
              <Col>
                <Row>
                  <Col>
                    <div className="apptextcontainer">
                      <a className="sec3subtitle">英雄卡</a>
                      <br/>
                      <a className="sec3subcontent">玩家可使用幸运币抽取独一无二的三国英雄卡。</a>
                    </div>
                  </Col>
                  <Col>
                    <img alt="" src={img1}/>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  <Col>
                    <div className="apptextcontainer">
                      <a className="sec3subtitle">英雄卡</a>
                      <br/>
                      <a className="sec3subcontent">玩家可使用幸运币抽取独一无二的三国英雄卡。</a>
                    </div>
                  </Col>
                  <Col>
                    <img alt="" src={img1}/>
                  </Col>
                </Row>
              </Col>
              <div className="lineV"> </div>
              <Col>
                <Row>
                  <Col>
                    <img alt="" src={img1}/>
                  </Col>
                  <Col>
                    <div className="apptextcontainer">
                      <a className="sec3subtitle">英雄卡</a>
                      <br/>
                      <a className="sec3subcontent">玩家可使用幸运币抽取独一无二的三国英雄卡。</a>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </section>

        <section className="section2">
          <div className="section2Container">
              <p className="section2text">在椋鸟酒馆，你甚至可以谈论哲学问题。你可以在酒馆中尽情发挥自己的创意！<br/><br/><br/>
              椋鸟酒馆是采用了去中心化思想建立而成，是一个区块链爱好者们进行合作和交流的场所。<br/><br/><br/>
              椋鸟是自然界中最常见的采用了去中心化模式的生物，它们可以在遇到问题的时候，瞬间自发性的集结起来，而不需要有中心化的组织去操控这一行为。
              </p>
          </div>
        </section>

      </div>
    );
  }
}

export default pageHome;
