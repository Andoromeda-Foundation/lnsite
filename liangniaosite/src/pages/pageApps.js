import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import img1 from "../res/home1.png";
import { Button } from 'reactstrap';

class pageApps extends Component {
  render() {
    return (
      <div>
        <div className="titleNav">
          <p className="title">椋鸟酒馆产品陈列</p>
        </div>
        <div className="appscontainer">
          <div className="appobj">
            <img alt="" src={img1}/>
            <br/>
            <a>app名称</a>
            <br/>
            <a>app介绍app介绍app介绍app介绍app介绍app介绍app介绍app介绍app介绍app介绍app介绍</a>
            <br/>
            <Button outline size="sm" color="secondary">前往app页</Button>
          </div>
          <div className="appobj">
            <img alt="" src={img1}/>
            <br/>
            <a>app名称</a>
            <br/>
            <a>app介绍app介绍app介绍app介绍app介绍app介绍app介绍app介绍app介绍app介绍app介绍</a>
            <br/>
            <Button outline size="sm" color="secondary">前往app页</Button>
          </div>
          <div className="appobj">
            <img alt="" src={img1}/>
            <br/>
            <a>app名称</a>
            <br/>
            <a>app介绍app介绍app介绍app介绍app介绍app介绍app介绍app介绍app介绍app介绍app介绍</a>
            <br/>
            <Button outline size="sm" color="secondary">前往app页</Button>
          </div>
          <div className="appobj">
            <img alt="" src={img1}/>
            <br/>
            <a>app名称</a>
            <br/>
            <a>app介绍app介绍app介绍app介绍app介绍app介绍app介绍app介绍app介绍app介绍app介绍</a>
            <br/>
            <Button outline size="sm" color="secondary">前往app页</Button>
          </div>
          <div className="appobj">
            <img alt="" src={img1}/>
            <br/>
            <a>app名称</a>
            <br/>
            <a>app介绍app介绍app介绍app介绍app介绍app介绍app介绍app介绍app介绍app介绍app介绍</a>
            <br/>
            <Button outline size="sm" color="secondary">前往app页</Button>
          </div>
          <div className="appobj">
            <img alt="" src={img1}/>
            <br/>
            <a>app名称</a>
            <br/>
            <a>app介绍app介绍app介绍app介绍app介绍app介绍app介绍app介绍app介绍app介绍app介绍</a>
            <br/>
            <Button outline size="sm" color="secondary">前往app页</Button>
          </div>
        </div>
        <div className="lineAppH"> </div>
        <div className="section2Container">
            <p className="section2text">2018年新年的第一天深夜，在全国人民都在欢庆新年的时候，以太水浒就在最初的团队工程师手中诞生了。
            <br/><br/><br/>
            以太水浒的诞生是一个重要的历史性时刻！它的诞生标志着椋鸟联盟的最初的形态的形成。
            </p>
        </div>
      </div>
    );
  }
}

export default pageApps;
