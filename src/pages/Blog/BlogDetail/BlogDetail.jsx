/* eslint-disable react-hooks/exhaustive-deps */
import React,{ Fragment,useState ,useEffect} from "react";
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import './index.less'

import TopBar from '../../../components/TopBar/TopBar'
import FloorBar from '../../../components/FloorBar/FloorBar'

import utils from '../../../util/utils'
import http from '../../../util/http'

function BlogDetail() {
  const navigate = useNavigate ();
  const location = useLocation();
  console.log(location)
  
 

  
  return (
    <Fragment >
      <TopBar activeIndex={2} ></TopBar>
      
      <div className="blog-detail root-cont">
        <div className="blog-detail-wrap">

        </div>
      </div>

      <FloorBar></FloorBar>        
    </Fragment>

  )
}

export default BlogDetail;