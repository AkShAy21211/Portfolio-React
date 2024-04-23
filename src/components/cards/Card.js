import React, { useState } from 'react'

function Card({image,title,para,btn,info,isPorfolio,url}) {


  const [hover,setHover] = useState(false);

  const toogleHover = ()=>setHover(prev=> !prev);
  const navigate = (url)=> window.location = url;

  return (
<div   onMouseOver={toogleHover}  onMouseOut={toogleHover} className={`skill-card  ${hover && isPorfolio ?'ishovered':''}`} style={{backgroundImage: isPorfolio ? `url(${image})` : '',backgroundSize:"fill",        backgroundPosition: "center",backgroundRepeat:"no-repeat",width:`${isPorfolio?"auto":''}`,height:`${isPorfolio?"350px":''}`,filter: `${isPorfolio && hover ? 'none' : 'blur(50%)'}`}}>
     {!isPorfolio && (<>
         <img src={image} className='img-responsive' alt="" />
      <h3 className='text-center'>{title}</h3>
     </>)}
      {
        hover && (
          <>
            <p className={`${para?'':'d-none'} text-center portfolio-info` }>{info}</p>
            <button onClick={()=>navigate(url)} className={`${btn?'':'d-none'}  btn btn-warning`}>View</button>
          </>
        )
      }
    </div>
  )
}

export default Card
