import React, { Component } from 'react';
import { Button, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import img1 from "../res/home1.png";

class pageAbout extends Component {
  render() {
    return (
      <div className="aboutpage">
        <div className="titleNav">
          <p className="title">加入椋鸟酒馆联盟吧</p>
          <p className="subtitle">仙女座科技公司成立于2018年1月，是一家专注于做区块链应用开发的研发型公司。作为国内最具实力的区块链游戏开发商之一，我们践行中本聪之道，我们身怀改变时代的使命而来！</p>
          <Button outline color="secondary">前往查看公司结构</Button>
        </div>
        <div className="lineAppH"> </div>
        <div className="appscontainer">
          <div className="appobj">
            <img alt="" src={img1}/>
            <br/>
            <a>成员A</a>
            <br/>
            <a>成员介绍成员介绍成员介绍成员介绍成员介绍成员介绍成员介绍成员介绍成员介绍成员介绍成员介绍成员介绍成员介绍</a>
          </div>
          <div className="appobj">
            <img alt="" src={img1}/>
            <br/>
            <a>成员B</a>
            <br/>
            <a>成员介绍成员介绍成员介绍成员介绍成员介绍成员介绍成员介绍</a>
          </div>
        </div>
        <div className="lineAppH"> </div>

        <div>
          <div className="titleNav">
            <p className="title">招聘职位</p>
          </div>
            <div className="joblist">
            <ListGroup>
              <ListGroupItem>
                <ListGroupItemHeading>UI网页设计师</ListGroupItemHeading>
                <ListGroupItemText>
                Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                </ListGroupItemText>
                <Button className="jobbtn" outline color="secondary">查看该职位</Button>
              </ListGroupItem>
              <ListGroupItem>
                <ListGroupItemHeading>H5游戏开发</ListGroupItemHeading>
                <ListGroupItemText>
                Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                </ListGroupItemText>
              </ListGroupItem>
              <ListGroupItem>
                <ListGroupItemHeading>微信公众号资深主编</ListGroupItemHeading>
                <ListGroupItemText>
                Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                </ListGroupItemText>
              </ListGroupItem>
            </ListGroup>
          </div>
        </div>

        <div className="lineAppH"> </div>

        <div className="abouttexts">
          <div className="abouttext">
            <h3>颠覆时代：</h3>
            <br/>
            <h6>在区块链游戏热潮中，我们站在了浪潮的最前方，连续开发出了两款成功的作品：

            《以太水浒》：以太水浒在24小时的交易量一度冲上榜首，对外强势输出中国文化！

            《以太萌王》：以太萌王与萌王IP强势合作，强强联手撼动业界！

            良好的游戏品质不仅带来了优异的收益，更吸引了资本的青睐。强大的后盾让聚集在一起的强大团队可以不受任何拘束，天马行空地创造极致最牛逼的区块链应用！
            </h6>
          </div>
          <div className="abouttext">
            <h3>鸿鹄之志：</h3>
            <br/>
            <h6>
            仙女座研发团队是由来自世界各大顶级互联网公司的科技大佬组成，所有成员都是怀抱着对区块链技术的激情走到一起的：我们坚持信仰加密世界的美好未来！我们希望同样对区块链怀揣激情的你能够加入我们，让我们一起改变世界！一起为梦想窒息！
            </h6>
          </div>
        </div>
      </div>
    );
  }
}

export default pageAbout;
