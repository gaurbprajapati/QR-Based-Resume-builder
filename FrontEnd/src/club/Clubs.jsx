//import React from 'react';
import '../club/Clubs.css';

import React, { useState } from "react";


export const Clubs = ({prop}) => {
  const {intro,content,Announ,Clubs}=prop;
  const A=content.head[0];
  const B=content.head[1];
  const C=content.head[2];
  const clubname  = intro.a
    return (
        <div className="main">
          <div className="image"> 
            {/* <Intro /> */}
            <div className="intro">
              <div className="i-left">
                <span>Welcome to the</span>
                <span>{intro.a}</span>{/*yeh 1*/}
                <span>{intro.b}</span>{/*yeh 2*/}
          </div>
              <div className="i-right">
                <img src={intro.img} width={"350px"} height={"300px"}/>{/*yeh 3*/}
              </div>
            </div>
          </div> 
          

          <div className="box">
            {/* <Content/> */}


            <div className="InnerBox">
            <h1>{A}</h1>
            <p>{content.Obs}</p>
            <h1>{B}</h1>
            <p>{content.Ach}</p>
            <h1>{C}</h1>
            <p>{content.Mem}</p>
            
            <div className="members" style={{ display: 'flex', flexDirection: 'row'}}>
                <div className="student">
                  <h2>Student Coor</h2>
                  <span style={{fontSize:'1rem',fontWeight:'bold'}}>President:-  </span>
                  <span>{content.Pres}</span><br/>
                  <span style={{fontSize:'1rem',fontWeight:'bold'}}>Vice President:-  </span>
                  <span>{content.Vicepres}</span><br/>
                  <span style={{fontSize:'1rem',fontWeight:'bold'}}>Members:-</span><br/>
                  {content.Other.map(da=>(
                                  <>
                                    <span>{da}</span><br/>
                                  </>
                                ))}
                            </div> 
                            <div className="facul">
                            <h3>Facult Coor</h3><br/>
                                {content.Fac.map(da=>(
                                  <>
                                    <span>{da}</span><br/>
                                  </>
                                ))} 
                                </div>         
                        </div>
                        </div>


            {/* <Content/> */}
            <div className="cont">
              <div className="announce">
              <h3>Announcment</h3>
                {
                  Announ.map(data=>(
                    <p className='row'>{data}</p>
                  ))
                }
              </div>
              <br/>
              <div className="clubs">
              <h3>Clubs</h3>
                {/* {
                  Clubs.map(dataa=>(
                    <p className='row'>{dataa}</p>
                  ))
                } */}

                
                {
                  Clubs.map((dataa,index)=>{
                    if(dataa!==clubname){
                      console.log(dataa!==clubname);
                      return <p key={index} className='row'>{dataa}</p>

                    }
                  })
                }
              </div>
            </div>
          </div>
          </div>
        
      );
}



//material ui cmd
//