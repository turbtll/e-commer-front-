import { useEffect, useState } from "react";
import Text from "../../components/text";
import { IProduct, RawCartItem } from "../../types";
import axiosProd from "../../api/axios";
import Button from "../../components/button";
import { Link } from "react-router-dom";
import useGlobalStore from "../../store";
import { toast } from "react-hot-toast";
import LazyLoad from 'react-lazy-load';
const Shop = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const { addItemToCart } = useGlobalStore();

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
          className="absolute md:aspect-[1.6] object-[70%]   md:w-full max-sm:h-screen sm:h-[768px]  -z-10 object-cover -top-[120px] "
          src="https://cdn.shopify.com/s/files/1/0615/7913/collections/collections_shirts_a8b9673a-925f-4985-85f2-31fb0e82784e.jpg?v=1624896710"
          // src="https://res.cloudinary.com/dbspz5tmg/image/upload/v1679743571/youtube/2023/march/komorebi-development/young-person-wearing-hoodie-mockup_2_mf5tty.png"
        />
        <div className="mx-[50px] mb-40 md:mb-80  absolute">
          <Text variant="heading-three">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Text>
          <Text variant="body-two">consectetur adipisicing elit.</Text>
        </div>
      </section>
      <section className="mx-[50px] bg-white ">
        <Text variant="heading-one" className="">
          Lorem ipsum dolor sit.
        </Text>
        <Text variant="body-two" className="mb-[82px]">
          Lorem ipsum dolor sit.
        </Text>
        <div className="grid grid-cols-3 gap-[38px] mb-[180px] items-center max-sm:grid-cols-2 xl:grid-cols-4">
          {products.map((e) => {
            return (
              <div className="" key={e._id}>
                <Link to={`/shop/${e._id}`}>
                  <div className="rounded-[18px]">
                  <LazyLoad >
                  <img
                      className="rounded-xl"
                      src={e.image}
                      alt={e.name}
                      width={368}
                      height={368}
                    />
    </LazyLoad>
                 
                  </div>
                </Link>

                <Text variant="heading-four" className="mt-4 mb-1  ">
                  {e.name}
                </Text>
                <Text variant="caption-three" className="">
                  ${e.price}
                </Text>

                <Button
                  size="small"
                  className="mt-[28px] text-xs "
                  onClick={() => {
                    const cartItem: RawCartItem = {
                      image: e.image,
                      name: e.name,
                      price: e.price,
                      product: e._id,
                    };
                    addItemToCart(cartItem);
                    toast.success("item added to cart");
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
