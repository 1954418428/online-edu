import React,{useState} from "react";
import './index.less'

import utils from '../../util/utils'

function TopBar(props){
  const [menuList,setMenuList] = useState([
    { title: "主页", path: "/" },
    { title: "课程", path: "/LessonList"},
    { title: "博客", path: "/BlogList" },
    { title: "创作", path: "/Creative" },
    { title: "个人", path: "/UserMain" },
  ])

  const UserBaseInfo = utils.getGD("UserBaseInfo");
  const [activeIndex,setActiveIndex] = useState(props.activeIndex);

  return (
    <React.Fragment>
      <div className="top-bar flex justify-content-center">
        <div className="menu-list flex">
          <h1 className="website-title menu-item">
            得乐教育
          </h1>

          <ul className="mid-box flex">
            { menuList && menuList.map((item,index) => (
              <li className={activeIndex === index ? 'menu-item active' : 'menu-item'} 
              key={index}>
                {item.title}
              </li>
            ))}
          </ul>

          <div className="right-box">
              {
                UserBaseInfo.UserId && (<React.Fragment>
                  <div className="user-info">
                    
                    <img className="user-img" src="https://fc1tn.baidu.com/it/u=641351265,1408231518&fm=202&mola=new&crop=v1"  alt="头像" />
                    <span className="user-nickname">张三</span>
                    
                    <div className="user-menu-item">
                      <div>个人中心</div>
                      <div>注销</div>
                    </div>
                  </div>
                </React.Fragment>)
              }
              {
                !UserBaseInfo.UserId && (<React.Fragment>
                   <div>
                    <span>登录</span>
                    <span> | </span>
                    <span>注册</span>
                  </div>
                </React.Fragment>)
              }
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default TopBar