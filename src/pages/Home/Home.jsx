import React,{ Fragment,useState } from "react";
import './index.less'

import TopBar from '../../components/TopBar/TopBar'
import FloorBar from '../../components/FloorBar/FloorBar'
import UserInfo from '../../components/UserInfo/UserInfo'

function Home() {
  const [navigationMenuItems,setNavigationMenuItems] =useState( [
    {
      title: "在线视频",
      icon: "iconfont icon-icon-video",
      path: "/LessonList",
      color: "#4493f7"
    },
    {
      title: "博客中心",
      icon: "iconfont icon-bokeblogger3",
      path: "/BlogList",
      color: "#fd7a49"
    },
    {
      title: "创作中心",
      icon: "iconfont icon-chuangzuo",
      path: "/Creative",
      color: "#6f68df"
    }
  ]);

  const [toolItems,setToolItems] = useState([
    {
      title: "JS文档",
      url: "https://www.w3school.com.cn/js/index.asp",
      studyUrl: "https://www.bilibili.com/video/BV1Sy4y1C7ha",
      studyTitle: "B站在线教学视频"
    },
    {
      title: "react官网",
      url: "https://react.docschina.org/",
      studyUrl: "https://www.bilibili.com/video/BV1wy4y1D7JT",
      studyTitle: "B站在线教学视频"
    },
    {
      title: "vue官网",
      url: "https://cn.vuejs.org/",
      studyUrl: "https://www.bilibili.com/video/BV1Zy4y1K7SH",
      studyTitle: "B站在线教学视频"
    }
  ]);

  const [descItems,setDescItems] = useState([
    {
      title: "方便",
      icon: "iconfont icon-bianjie_fangbian",
      color: "rgb(254, 80, 0)",
      desc: "网站采用响应式布局，电脑、平板、手机等多种终端完美支持，随时随地学习"
    },
    {
      title: "时间",
      icon: "iconfont icon-shijianzhouqi",
      color: "rgb(253, 194, 81)",
      desc: "最大化的节约学习时间，最大化收益每一分钟"
    },
    {
      title: "效率",
      icon: "iconfont icon-agora_xiaoshuai",
      color: "rgb(111, 104, 223)",
      desc: "让学过的知识不再忘记，大大提高学习效率"
    }
  ]);

  const User = {
    Id: "1",
    Nickname: "范征远",
    AvatarUrl: "https://img2.baidu.com/it/u=2015865969,3401990894&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1666630800&t=0e56d590792d305dab1d410186dab3aa",
    PhoneNumber: "13142211138",
    Email: "1954418428@qq.com",
    Sex: 1,
    Birthday: '2000-11-10',
    Description: `怀化学院本科毕业，23届应届生，专业成绩优，参加各种比赛。
        喜欢挑战，酷爱难的东西。热爱前端技术，对各种前端后端、算法等知识技术都比较熟悉。
        后续会在本网站上依次推出这些课程。`
  };
  return (
    <Fragment >
      <TopBar activeIndex={0} ></TopBar>
      
      <div className="home">
        <div className="tagline-wrap">
          <div className="word-container">
              <h2 className="word1">
                得乐教育 - 让学过的东西不再忘记！
              </h2>
              <h2 className="word2">
                最短的学习时间，最高效的学习方法。
              </h2>
          </div>
        </div>

        <div className="navigation-wrap">
          <div className="navigation-container">
            {
              navigationMenuItems && navigationMenuItems.map((item,index) => 
                (<div className="navigation-item" key={index}>
                  <span style={{color:item.color}}>
                    <i className={item.icon} ></i>
                    <span>{item.title}</span>
                  </span>
                </div>)
              )
            }
          </div>
      
        </div>

        <div className="webinfo-wrap">
            <div className="webinfo-container">
            <h2 className="webinfo-title">网站介绍</h2>
              <div className="webinfo-content">
                得乐教育是一个 <span style={{color: '#ff0000'}}>让学过的东西不再忘记</span> 的
                <span style={{color: '#ff0000'}}>视频及博客学习网站 </span>。
                博主可以发布课程以及博客，并将课程知识进行总结，以此来最大化的提高学习效率、节约时间、降低学习难度，最终达到让学过的知识不再忘记的效果。
                <br />

                <div className="desc-content">
                  以下是站主推荐学习的前端知识及其教学视频，力推！必看！
                </div>
              </div>

              <div className="tool-container">
                {
                  toolItems && toolItems.map((item,index) => 
                    (<div className="tool-item" key={index}>
                      <div className={`tool-img${index+1} img`}>
                      </div>
                      <span style={{fontSize:'1rem',display:'block'}}> { item.title } </span>
                      <span style={{fontSize:'1rem',display:'block'}}> { item.studyTitle } </span>
                    </div>)
                  )
                }

                {
                  descItems && descItems.map((item,index) => 
                    (<div className="desc-item" key={index}>
                      <i className={item.icon} style={{color:item.color}}></i>
                      <span style={{color:item.color,fontSize:'1.5625rem'}}>{ item.title }</span>
                      <span style={{fontSize:'1rem'}}>{ item.desc }</span>
                    </div>)
                  )
                }
    
              </div>
            </div>
        </div>

        <div className="userinfo-wrap">
          <UserInfo user={User} title="站长介绍"></UserInfo>
        </div>
      </div>

      <FloorBar></FloorBar>        
    </Fragment>
    
  )
}

export default Home;