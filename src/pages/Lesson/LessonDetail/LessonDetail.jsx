import React,{ Fragment,useState } from "react";
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import './index.less'

import TopBar from '../../../components/TopBar/TopBar'
import FloorBar from '../../../components/FloorBar/FloorBar'


import utils from '../../../util/utils'
import http from '../../../util/http'

function LessonDetail() {

  return (
    <Fragment >
      <TopBar activeIndex={1} ></TopBar>
      
      <div className="lesson-detail root-cont">
        <div className="lesson-detail-wrap">

        </div>
      </div>

      <FloorBar></FloorBar>        
    </Fragment>
    
  )
}

export default LessonDetail;