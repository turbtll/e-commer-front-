import { useEffect, useState } from "react";
import Text from "../../components/text";
import { IProduct } from "../../types";
import axiosProd from "../../api/axios";
import Button from "../../components/button";
import { useNavigate } from "react-router-dom";
const Shop = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const navigate = useNavigate();

  const getProducts = async () => {
    const results = await axiosProd.get("/products");
    setProducts(results.data);
    console.log(results);
    console.log(products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <section className="relative w-full h-[768px] flex items-end">
        <img
          className="absolute aspect-[1.6]  sm:h-screen  md:w-full max-sm:h-screen  -z-10 object-cover "
          src="https://res.cloudinary.com/dbspz5tmg/image/upload/v1679743571/youtube/2023/march/komorebi-development/young-person-wearing-hoodie-mockup_2_mf5tty.png"
        />
        <div className="mx-[50px] mb-40 ">
          <Text variant="heading-three">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Text>
          <Text variant="body-two">consectetur adipisicing elit.</Text>
        </div>
      </section>
      <section className="mx-[50px] bg-white ">
        <Text variant="heading-one" className="mt-[82px]">
          Lorem ipsum dolor sit.
        </Text>
        <Text variant="body-two" className="mb-[82px]">
          Lorem ipsum dolor sit.
        </Text>
        <div className="grid grid-cols-3 gap-[38px] mb-[180px] items-center max-sm:grid-cols-2 xl:grid-cols-4">
          {products.map((e) => {
            return (
              <div className="" key={e._id}>
                <div className="">
                  <img
                    className="rounded-xl"
                    src={e.image}
                    alt={e.name}
                    width={368}
                    height={368}
                  />
                </div>

                <Text variant="heading-four" className="mt-4 mb-1  ">
                  {e.name}
                </Text>
                <Text variant="caption-three" className="">
                  ${e.price}
                </Text>

                <Button
                  size="small"
                  className="mt-[28px]"
                  onClick={() => {
                    navigate(`/shop/${e._id}`);
                  }}
                >
                  Add to bag
                </Button>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Shop;
