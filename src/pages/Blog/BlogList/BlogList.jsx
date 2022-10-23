/* eslint-disable react-hooks/exhaustive-deps */
import React,{ Fragment,useState ,useEffect} from "react";
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import './index.less'

import TopBar from '../../../components/TopBar/TopBar'
import FloorBar from '../../../components/FloorBar/FloorBar'

import utils from '../../../util/utils'
import http from '../../../util/http'

function BlogList() {
  const navigate = useNavigate ();
  const location = useLocation();
  console.log(location)
  
  const [orderFilterParam,setOrderFilterParam] = useState([
    {
      Id: 1,
      Name: "综合排序"
    },
    {
      Id: 2,
      Name: "最新发布"
    },
    {
      Id: 3,
      Name: "最多浏览"
    },
    {
      Id: 4,
      Name: "最多收藏"
    }
  ])
  const [categoryFilterParam,setCategoryFilterParam] = useState([
    {
      Id: 0,
      CategoryName : "全部分类"
    },
    {
      Id: 1,
      CategoryName : "类别类别"
    },
    {
      Id: 2,
      CategoryName : "类别2"
    },
    {
      Id: 3,
      CategoryName : "类别类别"
    },
    {
      Id: 4,
      CategoryName : "类别4"
    },
    {
      Id: 5,
      CategoryName : "类别类别"
    },
  ])
  const [pageFilterData,setPageFilterData] = useState({
    activeOrderId : location.state?.activeOrderId || 1,
    activeCategoryId :location.state?.activeCategoryId || 0,
    pageIndex:1,
    pageSize:12
  })

  const filterItemClicked = (key,item)=>{
    setPageFilterData(preData =>{
      let newData = {...preData};
      newData[key] = item.Id
      return newData;
    })
    navigate(location.pathname,{replace:true,state:{
      ...location.state,[key]:item.Id
    }})
  };
  useEffect(() => {
    console.log("pageFilterData",pageFilterData)
  }, [pageFilterData]); 

  
  return (
    <Fragment >
      <TopBar activeIndex={2} ></TopBar>
      
      <div className="blog-list root-cont">
        <div className="blog-list-wrap">
          <div className="filter-wrap">
            <div className="filter order-filter">
              {
                orderFilterParam && orderFilterParam.map((item,index)=>(
                  <div className={pageFilterData.activeOrderId === item.Id ? "filter-item active" : "filter-item"} key={item.Id}
                    onClick = { filterItemClicked.bind(this,'activeOrderId',item)}
                  >
                    {item.Name}
                  </div>
                ))
              }
            </div>
            <div className="filter category-filter">
              {
                  categoryFilterParam && categoryFilterParam.map((item,index)=>(
                    <div className={pageFilterData.activeCategoryId === item.Id ? "filter-item active" : "filter-item"} key={item.Id}
                      onClick = { filterItemClicked.bind(this,'activeCategoryId',item)}
                    >
                      {item.CategoryName}
                    </div>
                  ))
              }
            </div>
          </div>
        </div>
      </div>

      <FloorBar></FloorBar>        
    </Fragment>

  )
}

export default BlogList;