import React,{useState} from "react";
import './index.less'

import utils from '../../util/utils'

function BlogCard(props){
  const [blog,setBlog] = useState({
    Id:"1",
    Title:"人生中的第一次被辞退",
    ImgUrl:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/897ed2f96d5b4144bdeeab68e65c9690~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?",
    UserId:"1",
    User:{
      Id:"1",
      AvatarUrl:"https://img2.baidu.com/it/u=2015865969,3401990894&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1666630800&t=0e56d590792d305dab1d410186dab3aa",
      Nickname:"小发发发发发发"
    },
    Content:"今天给大家带来了11张我觉得不论从视觉效果还是页面布局的维度都特别nice的11个pc偏管理端的界面，希望大家可以在平时开发没有灵感时用来做参考。",
    Tags:"",
    Description:"今天给大家带来了11张我觉得不论从视觉效果还是页面布局的维度都特别nice的11个pc偏管理端的界面，希望大家可以在平时开发没有灵感时用来做参考。",
    CreateTime:"2022-1-1",
    CategoryList:[
      {
        Id:"1",
        CategoryName:"类别1"
      },
      {
        Id:"2",
        CategoryName:"类别2"
      },
      {
        Id:"3",
        CategoryName:"类别3"
      }
    ],
    Count:{
      LikeCount:9000,
      CollectCount:80,
      VisitCount:15362,
      CommentCount:50,
      ResourceId:"1",
	    ResourceType:1
    }
  })

  return (
    <React.Fragment>
      <div className="blog-card">
        <div className="blog-head">
          <div className="blog-author">
            {blog.User.Nickname}
          </div>
          <div className="blog-createtime">
            {blog.CreateTime}
          </div>
          <div className="blog-categorylist">
            {
              blog.CategoryList && blog.CategoryList.map((item,index)=>(
                <div key={index} className="category-item">
                  {item.CategoryName}
                </div>
              ))
            }
          </div>
        </div>

        <div className="content-main">
          <div>
            <div className="blog-title">
              {blog.Title}
            </div>
            <div className="blog-cont">
              {blog.Description}
            </div>
            <div className="blog-count">
              <div className="count-item">
                <i className="iconfont icon-chakan"></i>
                <span className="count">{blog.Count.VisitCount}</span>
              </div>
              <div className="count-item">
                <i className="iconfont icon-dianzan"></i>
                <span className="count">{blog.Count.LikeCount}</span>
              </div>
              <div className="count-item">
                <i className="iconfont icon-pinglun"></i>
                <span className="count">{blog.Count.CommentCount}</span>
              </div>
              <div className="count-item">
                <i className="iconfont icon-shoucang"></i>
                <span className="count">{blog.Count.CollectCount}</span>
              </div>
            </div>
          </div>
          <div>
            <img src={blog.ImgUrl} alt="" className="blog-ImgUrl"/>
          </div>
        </div>
       
      </div>
    </React.Fragment>
  )
}

export default BlogCard