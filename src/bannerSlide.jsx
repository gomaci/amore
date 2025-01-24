import React from "react"

export default class BannerImg extends Component {
  render(){
 //slick의 기본 속성
 const settings = {
         dots: true, //이미지순서를 알려줌
         infinite: true,// loop 사용유뮤
         speed: 500, // 지나가는 속도
         autoplay:true, // 자동 실행 유뮤
         autoplaySpeed:5000,// 자동실행되는 속도
         slidesToShow: 1, //  한번에 보여줄 슬라이드쇼의 갯수
         slidesToScroll: 1 //  슬라이드로 넘김 갯수
     }
 return(
        <div>
            <Slider {...settings}>
                 <div>
                     <h3 style={{margin:'0', width:'100%',height:'300px', background:'red'}}>1</h3>
                 </div>
                 <div>
                     <h3 style={{width:'100%',height:'300px', background:'green'}}>2</h3>
                 </div>
                 <div>
                     <h3 style={{width:'100%',height:'300px', background:'blue'}}>3</h3>
                 </div>
                 <div>
                     <h3>4</h3>
                 </div>
                 <div>
                     <h3>5</h3>
                 </div>
                 <div>
                     <h3>6</h3>
                 </div>
            </Slider>
        </div>
    )
 }
 
 
 }