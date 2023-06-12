import { useEffect, useState } from "react";
import Button from "../../components/button";
import Icon from "../../components/icons";
import Text from "../../components/text";
import { useNavigate } from "react-router-dom";
import { IProduct } from "../../types";
import axiosProd from "../../api/axios";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LazyLoad from 'react-lazy-load';




const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<IProduct[]>([]);

  const getProducts = async () => {
    const response = await axiosProd.get("/products");
    setProducts(response.data);
    console.log(response);
  };

  const navigateToShop = () => {
    navigate("/shop");
  }

  const settings = {
    infinite: true,
    // dots: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1580,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  useEffect(() => {
    getProducts();
 
  }, []);
  


  

 

  return (
    <section className="relative">
      
            <LazyLoad >
            <img
        className="absolute  min-h-screen xl:w-screen object-cover -top-[120px] -z-10 "
        src="https://res.cloudinary.com/dbspz5tmg/image/upload/v1679743571/youtube/2023/march/komorebi-development/young-person-wearing-hoodie-mockup_2_mf5tty.png"
      />
    </LazyLoad>

      <div
        className="mx-[50px] min-h-screen  flex flex-col justify-end items-start   pb-[220px]
        sm:pb-[150px] md:pb-[170px] lg:pb-[220px]"
      >
        <Text variant="heading-two" className="text-2xl md:text-3xl" >HOODIE HEAVEN</Text>
        <Button className="mt-7" onClick={navigateToShop}>
          <span className="flex  ">
            <Icon name="arrow-small-right" />
            <span className="ml-[10px]"> Shop now</span>
          </span>
        </Button>
      </div>
      {/* <div className="grid grid-cols-3 gap-[38px] mt-[200px] mx-[50px]"> */}
      {/* slice(0, 3) */}
     
      <Slider className=" xl:mt-[200px] md:mx-[50px] mx-[10px]" {...settings}>
      {products.map((e) => {
          return (
        
          
      
        <div className="mb-20 flex flex-col md:mt-[20px] xl:mt-[120px] md:px-[20px]">
       
              <div className="w-[320] h-[320] flex items-center   rounded-[18px] my-[32px]   ">
              {/* <LazyLoad > */}
              <img
                  className="w-full rounded-[18px]"
                  src={e.image}
                  alt={e.name}
                />
    {/* </LazyLoad> */}
               

              </div> 
         
              <Text variant="subheading-one" className="">{e.name}</Text>
               <Button className="mt-7 w-40" onClick={navigateToShop}>
                <span className="flex">
                  <Icon name="arrow-small-right" />
                  <span className="ml-[10px] "> Shop now </span>
                </span>
              </Button>
              
              
      
            </div>
 
          );
        })}
    </Slider>
   

  

      <div className="md:mt-[180px] mx-[50px] max-w-3xl">
        <Text variant="heading-one">Test hoodies</Text>
        <Text variant="body-two" className="mt-7">
          Test hoodies Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Architecto mollitia libero, ullam ducimus velit, non cupiditate fugiat unde
          consectetur dolores nulla, eum totam. Quas commodi ut suscipit culpa tenetur
          libero!
        </Text>
      </div>

     
      <div className="mt-[82px] mb-[180px] relative">
      <LazyLoad >
      <img
          className="h-[768px] aspect[1.6] w-full object-cover"
          alt="learn-more-img"
          src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
          // src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjBzaG9wcGluZ3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
        />
    </LazyLoad>
      

        <Button className="absolute bottom-20 left-[25%] sm:left-[40%] md:left-[45%]" onClick={()=>{
          navigate("/about")}}>
          <span className="flex">
            <Icon name="arrow-small-right" />
            <span className="md:ml-[10px] "> Learn more </span>
          </span>
        </Button>
      </div>
    </section>
  );
};

export default Home;
