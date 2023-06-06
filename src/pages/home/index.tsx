import { useEffect, useState } from "react";
import Button from "../../components/button";
import Icon from "../../components/icons";
import Text from "../../components/text";
import { useNavigate } from "react-router-dom";
import { IProduct } from "../../types";
import axiosProd from "../../api/axios";

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
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section className="relative">
      <img
        className="absolute min-h-screen xl:w-screen object-cover -top-[120px] -z-10 "
        src="https://res.cloudinary.com/dbspz5tmg/image/upload/v1679743571/youtube/2023/march/komorebi-development/young-person-wearing-hoodie-mockup_2_mf5tty.png"
      />

      <div
        className="mx-[50px] min-h-screen  flex flex-col justify-end items-start 
     pb-[220px] "
      >
        <Text variant="heading-two">HOODIE HEAVEN</Text>
        <Button className="mt-7" onClick={navigateToShop}>
          <span className="flex  ">
            <Icon name="arrow-small-right" />
            <span className="ml-[10px]"> Shop now</span>
          </span>
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-[38px] mt-[200px] mx-[50px]">
        {products.slice(0, 3).map((e) => {
          return (
            <div key={e._id} className="flex justify-center items-center  flex-col">
              <Text variant="heading-three">{e.name}</Text>
              <div className="bg-cream rounded-[18px] my-[32px]  ">
                <img
                  width={368}
                  height={368}
                  className="w-[368px] h-[368px] rounded-[18px]"
                  src={e.image}
                  alt={e.name}
                />
              </div>
              <Button className="mt-7" onClick={navigateToShop}>
                <span className="flex">
                  <Icon name="arrow-small-right" />
                  <span className="ml-[10px] "> Shop now </span>
                </span>
              </Button>
            </div>
          );
        })}
      </div>

      <div className="mt-[180px] mx-[50px] max-w-3xl">
        <Text variant="heading-one">Test hoodies</Text>
        <Text variant="body-two" className="mt-7">
          Test hoodies Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Architecto mollitia libero, ullam ducimus velit, non cupiditate fugiat unde
          consectetur dolores nulla, eum totam. Quas commodi ut suscipit culpa tenetur
          libero!
        </Text>
      </div>
      <div className="mt-[82px] mb-[180px] relative">
        <img
          className="h-[768px] aspect[1.6] w-full"
          alt="learn-more-img"
          src="https://res.cloudinary.com/dbspz5tmg/image/upload/v1679743571/youtube/2023/march/komorebi-development/young-person-wearing-hoodie-mockup_2_mf5tty.png"
        />

        <Button className="absolute bottom-20 left-[45%]">
          <span className="flex">
            <Icon name="arrow-small-right" />
            <span className="ml-[10px] "> Learn more </span>
          </span>
        </Button>
      </div>
    </section>
  );
};

export default Home;
