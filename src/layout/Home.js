import React,{useContext, useState} from 'react';
import {DataContext} from '../App';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import {Link} from 'react-router-dom';
import List from '../components/List';
import Main from '../components/Main';
import { MdFoodBank } from "react-icons/md";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";


const Home = () => {
   /* const {data, loading} = useContext(DataContext); */
   const {data}= useContext(DataContext);
   const [swiper, setSwiper] = useState(null);
   const [swiper1, setSwiper1] = useState(null);

   const handlePrev = () => {
      swiper?.slidePrev()
   }
   const handleNext = () => {
     swiper?.slideNext()
   }
   const handlePrev1 = () => {
      swiper1?.slidePrev()
   }
   const handleNext1 = () => {
     swiper1?.slideNext()
   }

   /* if(loading){
      return <h1 className='loading'>데이터 로드 중입니다.</h1>
   }
 */
   /* const categories=[...new Set(data.map((data) => data.RCP_PAT2))]; */

   if(!data){
      return null;
   }
   return (
      <div className='home'>
         <Main />
         {/* {
            categories.map((category)=>(
               <Fragment key={category}>
                  <Title title={category}/>
                  <List data={data.filter((item)=> item.RCP_PAT2 ===category)}/>
               </Fragment>
            ))
         } */}
         <div className="logo">
            <Link to="/"><MdFoodBank /></Link>
         </div>
         <div className="title">
            <h2>추천레시피</h2>
         </div>
         <div className="homeList">
            <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={3}
            onSwiper={(e) => {setSwiper(e)}}

            >
               {data.slice(0,10).map((item)=> (
                  <SwiperSlide key={item.id}>
                     <List data={[item]} />
                  </SwiperSlide>
               ))}
            </Swiper>
            <div className="swiper_btn">
            <div className="swiperPrevBtn"  onClick={handlePrev}><GrPrevious /></div>
            <div className="swiperNextBtn" onClick={handleNext}><GrNext /></div>
         </div>

         </div>
         
         <div className="title">
            <h2>인기레시피</h2>
         </div>
         <div className="homeList">
            <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={3}
            onSwiper={(e) => {setSwiper1(e)}}

            >
               {data.slice(11,20).map((item)=> (
                  <SwiperSlide key={item.id}>
                     <List data={[item]} />
                  </SwiperSlide>
               ))}
            </Swiper>
            <div className="swiper_btn">
               <div className="swiperPrevBtn"  onClick={handlePrev1}><GrPrevious /></div>
               <div className="swiperNextBtn" onClick={handleNext1}><GrNext /></div>
            </div>
         </div>      
      </div>
   );
};

export default Home;