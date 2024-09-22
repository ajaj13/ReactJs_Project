import React, { useEffect, useState } from 'react'
import Product from '../components/Product';
import Spinner from '../components/Spinner';

const Home = () => {

    const API_URL = "https://fakestoreapi.com/products";
    const [loading, SetLoading] = useState(false);
    const [posts, SetPosts] = useState([]);

    async function fetchProductData() {
        SetLoading(true);

        try{
            const res = await fetch(API_URL);
            const data = await res.json();

            SetPosts(data);
        }
        catch(error){
            console.log("error occured");
            SetPosts([]);
        }
        SetLoading(false);
    }

    useEffect( () =>{
        fetchProductData();
    },[])

  return (
    <div>
      {
      loading ? (<Spinner />) :
      ( posts.length > 0 ? (
        <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
        space-x-6 space-y-10 max-w-6xl p-2 mx-auto min-h-[80vh]'>{
            posts.map( (post) =>(
                <Product key={post.id} post={post} />
            ))
            }
        </div>
      ) : 
      (<div className='flex justify-center items-center text-2xl'>
        No Data found</div>)
      )
    }
    </div>
  )
}

export default Home
