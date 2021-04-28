import React, { useState } from "react"
import PortfolioItem from "./portfolio-item"

import ThumbTimWhite from "../images/thumb.tim-white.jpg"
import ThumbSanJoaquin from "../images/thumb.san-joaquin.jpg"
import ThumbHillEngineering from "../images/thumb.hill-eng.jpg"
import ThumbCAPP from "../images/thumb.capp.jpg"
import ThumbMSDatacenter from "../images/thumb.ms-datacenter.jpg"
import ThumbMSConnect from "../images/thumb.ms-connect.jpg"
import ThumbHPTSStrategy from "../images/thumb.hp-ts-strategy.jpg"
import ThumbHPFunnl from "../images/thumb.hp-funnl.jpg"
import ThumbHWXDevPortal from "../images/thumb.hwx-dev-portal.jpg"
import ThumbBoingCloud from "../images/thumb.boeing-cloud.jpg"
import ThumbAIUQuiz from "../images/thumb.aiu-quiz.jpg"
import ThumbAIUGradLibs from "../images/thumb.aiu-grad-libs.jpg"
import ThumbLNCurtis from "../images/thumb.lncurtis.jpg"
import ThumbRogerNeillo2 from "../images/thumb.rogerniello2.jpg"
import ThumbUSBHOF2 from "../images/thumb.usbhof2.jpg"
import ThumbUOP from "../images/thumb.uop.jpg"
import ThumbROC from "../images/thumb.roc.jpg"
import ThumbKDCGroup from "../images/thumb.kdggroup.jpg"
import ThumbCedaron from "../images/thumb.cedaron.jpg"
import ThumbNHRA from "../images/thumb.nhra.jpg"
import ThumbNCVI from "../images/thumb.ncvi.jpg"
import ThumbTheKitchen from "../images/thumb.thekitchen.jpg"
import ThumbSacPhil from "../images/thumb.sacphil.jpg"
import ThumbRogerNeillo from "../images/thumb.rogerniello.jpg"
import ThumbUSBHOF from "../images/thumb.usbhof.jpg"
import ThumbBlackfish from "../images/thumb.blackfish.jpg"
import ThumbSlapAPI from "../images/thumb.slapapi.jpg"
import ThumbBrushfire from "../images/thumb.brushfire.jpg"
import ThumbAFCH from "../images/thumb.afch.jpg"
import ThumbSeeRevionics from "../images/thumb.seerevionics.jpg"


const entries = [
  {
      title:      'Tim White CTO Consultancy',
      url:        'http://timblairwhite.com/',
      bgImage:    ThumbTimWhite
  },
  {
      title:      'San Joaquin County',
      url:        'https://www.sjgov.org/',
      bgImage:    ThumbSanJoaquin
  },
  {
      title:      'Hill Engineering',
      url:        'http://hill-engineering.com/',
      bgImage:    ThumbHillEngineering
  },
  {
      title:      'Council of Accountable Physicians Practices',
      url:        'http://accountablecaredoctors.org',
      bgImage:    ThumbCAPP
  },
  {
      title:      'Microsoft Datacenter Virtual Walkthrough',
      bgImage:    ThumbMSDatacenter
  },
  {
      title:      'Microsoft Connect() Event Mobile App',
      bgImage:    ThumbMSConnect
  },
  {
      title:      'HP TS Strategy Intranet & Newsletters',
      bgImage:    ThumbHPTSStrategy
  },
  {
      title:      'HP Funnl Sales Tool Mobile App',
      bgImage:    ThumbHPFunnl
  },
  {
      title:      'Hortonworks Dev Portal',
      bgImage:    ThumbHWXDevPortal
  },
  {
      title:      'Boeing Cloud Website',
      bgImage:    ThumbBoingCloud
  },
  {
      title:      'AIU Quiz Facebook App',
      bgImage:    ThumbAIUQuiz
  },
  {
      title:      'AIU Grad Libs Facebook App',
      bgImage:    ThumbAIUGradLibs
  },
  {
      title:      'L.N. Curtis & sons',
      url:        'http://www.lncurtis.com',
      bgImage:    ThumbLNCurtis
  },
  {
      title:      'Roger Niello',
      url:        'http://www.rogerniello.com',
      bgImage:    ThumbRogerNeillo2
  },
  {
      title:      'U.S. Bicycling Hall of Fame',
      url:        'http://www.usbhof.org',
      bgImage:    ThumbUSBHOF2
  },
  {
      title:      'Univ. of the Pacific: 2010 President\'s Report',
      url:        'http://www.pacificreport.org',
      bgImage:    ThumbUOP
  },
  {
      title:      'RAS Radiation Oncology Centers',
      url:        'http://www.rasradiationoncology.com',
      bgImage:    ThumbROC
  },
  {
      title:      'Kris Deutschmann Communications',
      url:        'http://www.kdcgroup.com',
      bgImage:    ThumbKDCGroup
  },
  {
      title:      'Cedaron',
      url:        'http://www.cedaron.com',
      bgImage:    ThumbCedaron
  },
  {
      title:      'Newport Harbor Radiological Associates',
      url:        'http://www.newportradiology.com',
      bgImage:    ThumbNHRA
  },
  {
      title:      'Northern California Vascular Institute',
      url:        'http://www.norcalvascular.com',
      bgImage:    ThumbNCVI
  },
  {
      title:      'Good Eats\' The Kitchen',
      url:        'portfolio.thekitchen.html',
      bgImage:    ThumbTheKitchen
  },
  {
      title:      'Sacramento Philmarmonic Orchestra',
      url:        'portfolio.sacphil.html',
      bgImage:    ThumbSacPhil
  },
  {
      title:      'Roger Niello\'s 2010 Senate Campaign',
      url:        'portfolio.rogerniello.html',
      bgImage:    ThumbRogerNeillo
  },
  {
      title:      'U.S. Bicycling Hall of Fame (Interim Site)',
      url:        'http://www.usbhof.org',
      bgImage:    ThumbUSBHOF
  },
  {
      title:      'Blackfish Financial Services',
      url:        'portfolio.blackfish.html',
      bgImage:    ThumbBlackfish
  },
  {
      title:      'Slap-Api',
      url:        'portfolio.slapapi.html',
      bgImage:    ThumbSlapAPI
  },
  {
      title:      'Brushfire Media',
      url:        'portfolio.brushfire.html',
      bgImage:    ThumbBrushfire
  },
  {
      title:      'Americans for Coordinated Healthcare',
      url:        'http://www.americansforcoordinatedhealthcare.org',
      bgImage:    ThumbAFCH
  },
  {
      title:      'See Revionics',
      url:        'portfolio.revionics.html',
      bgImage:    ThumbSeeRevionics
  }
];

const firstTwelve = entries.slice(0, 12),
      theRest = entries.slice(12);

function parseTarget(url) {
  return (url) ? '_blank' : false;
}

function parseDisabled(url) {
  return (url) ? false : 'disabled';
}

const Portfolio = (props) => {

    const [showMore, setShowMore] = useState(false)

    return (
        <div>
            <div className="highlighted">
                {firstTwelve.map(function(item) {
                    return (
                        <PortfolioItem 
                        title={item.title} 
                        url={item.url} 
                        bgImage={item.bgImage} 
                        target={parseTarget(item.url)} 
                        disabled={parseDisabled(item.url)} />
                    )
                })}
            </div>
            
            <div className="extended" style={{ display : showMore ? 'flex' : 'none' }}>
            {theRest.map(function(item) {
                return (
                    <PortfolioItem 
                        title={item.title} 
                        url={item.url} 
                        bgImage={item.bgImage}
                        target={parseTarget(item.url)} 
                        disabled={parseDisabled(item.url)} />
                )
            })}
            </div>

            <div className="s-more-link" onClick={() => setShowMore(!showMore)}>{ showMore ? 'Less?' : 'More?' }</div>
        </div>
    )
}

export default Portfolio