/* eslint-disable react-hooks/exhaustive-deps */
import React,{ Fragment,useState ,useEffect} from "react";
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import './index.less'

import TopBar from '../../../components/TopBar/TopBar'
import FloorBar from '../../../components/FloorBar/FloorBar'

import utils from '../../../util/utils'
import http from '../../../util/http'

function Creative() {
  const navigate = useNavigate ();
  const location = useLocation();
  console.log(location)
  
 

  
  return (
    <Fragment >
      <TopBar activeIndex={3} ></TopBar>
      
      <div className="creative root-cont">
        <div className="creative-wrap">

        </div>
      </div>

      <FloorBar></FloorBar>        
    </Fragment>

  )
}

export default Creative;