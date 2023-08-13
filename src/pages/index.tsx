import React, { Fragment, useEffect, useState } from 'react';
import ProductHeader from '../components/organisms/productHeader';
import Grid from '../components/templates/grid';
import Flex from '../components/templates/flex';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Card from '@/components/molecules/card';
import Images from '@/components/atoms/image';
import Text from '@/components/atoms/typography';
export type Product = {
  id: number;
  title: string;
  coverImage: string;
  description: string;
  discountRate: number;
  price: number;
};

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const fetchMoreData = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/products?page=${page === 0 ? 1 : page}&&limit=9`,
    );
    if (page > 0) {
      if (!res.data.products.length) {
        setHasMore(false);
      }
      const ids = new Set(products.map((d: Product) => d.id));
      const productToStore = [...products, ...res.data.products.filter((d: Product) => !ids.has(d.id))];
      setProducts(productToStore);
    } else {
      setProducts(res.data.products);
    }
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    fetchMoreData();
  }, []);

  const handleRefresh = async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products?page=${1}&&limit=9`);
    setPage(2);
    setProducts(res.data.products);
  };
  return (
    <Flex direction="flex-col" justifyContent="justify-start" classname={'bg-white w-full min-h-screen'}>
      <Fragment>
        <ProductHeader headerText="Books" classname="py-8 w-full" />

        <InfiniteScroll
          dataLength={products.length}
          pullDownToRefresh={true}
          pullDownToRefreshContent={<span>pulling</span>}
          pullDownToRefreshThreshold={10}
          next={fetchMoreData}
          refreshFunction={handleRefresh}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}>
          <Grid
            justifyContent="justify-center"
            alignItems="items-start"
            classname={'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-3'}>
            {products.map((product, index) => (
              <Card classname="w-full" key={index}>
                <Grid classname="grid-col w-full">
                  <Images url="/Test.jpg" altText="next-image" />
                  <Flex
                    direction="flex-col"
                    justifyContent="justify-between"
                    alignItems="items-start"
                    classname="px-5 mx-auto w-full">
                    <Text text={product.title} classname="text-2xl font-semibold" />
                    <Flex direction="flex-row" justifyContent="justify-between" classname="w-full">
                      <Text text={product.discountRate + '%'} classname="text-error text-xl font-medium" />
                      <Text text={product.price + '원'} classname="text-2xl font-bold" />
                    </Flex>
                  </Flex>
                </Grid>
              </Card>
            ))}
          </Grid>
        </InfiniteScroll>
      </Fragment>
    </Flex>
  );
}
