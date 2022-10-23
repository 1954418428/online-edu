import React,{useState} from "react";
import './index.less'

import utils from '../../util/utils'

function UserInfo(props){
 

  return (
    <React.Fragment>
      <div className="user-info">
        <h2 className="title">
          { props.title }
        </h2>
        <div className="user-info-container">
          { props.user.AvatarUrl && <img
                className="user-img"
                src={ props.user.AvatarUrl}
                alt="头像"
              />}
          <div className="user-base-info">
            <div className="user-name">
              { props.user.Nickname }
              <i
                className={props.user.Sex ? 'iconfont icon-nan' : 'iconfont icon-nv'}
                title="userInfo.sex ? '男' : '女'"
              ></i>
              <span title="生日">
                {props.user.Birthday}
              </span>
            </div>
            <div className="user-desc">
              { props.user.Description }
            </div>

            <span className="user-contact">手机：{ props.user.PhoneNumber }</span>
            <span className="user-contact">邮箱：{ props.user.Email }</span>

          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default UserInfo