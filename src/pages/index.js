/* eslint-disable @next/next/no-img-element */
import { css } from "@emotion/css";
import { useContext } from "react";
import { useRouter } from "next/router";
import { ethers } from "ethers";
import Link from "next/link";
import { AccountContext } from "../context";

import { contractAddressBlog, ownerAddressBlog } from "/config";
import Blog from "/web3/artifacts/web3/contracts/Blog.sol/Blog.json";


const Home = (props) => {

  const { posts } = props;

  const account = useContext(AccountContext);

  const router = useRouter();

  async function navigate() {
    router.push('/create-post')
  }

  return (

    <div>
      
      <div className={postList}>

        {         
          posts.map((post, index) => (

            <Link href={`/posts/${post[2]}`} key={index}>

              <a>

                <div className={linkStyle}>

                  <p className={postTitle}>{post[1]}</p>

                  <div className={arrowContainer}>

                    <img
                      src='/right-arrow.svg'
                      alt='Right arrow'
                      className={smallArrow}
                    />

                  </div>

                </div>

              </a>

            </Link>

          ))
        }

      </div>

      <div className={container}>

        {
          (account === ownerAddressBlog) && posts && !posts.length && (
        
            <button className={buttonStyle} onClick={navigate}>

              Create your first post

              <img
                src='/right-arrow.svg'
                alt='Right arrow'
                className={arrow}
              />

            </button>
          )
        }

      </div>

    </div>

  )
}

export default Home


export async function getServerSideProps() {
  
  let provider

  const environment = process.env.NEXT_PUBLIC_ENVIRONMENT; 

  if (environment === 'development') {
    console.log("development");
    provider = new ethers.providers.JsonRpcProvider();

  } else if (environment === 'test') {
    console.log("test");
    provider = new ethers.providers.JsonRpcProvider("https://polygon-mumbai.g.alchemy.com/v2/FWm45N-DrSZvosyeQoN3q16dCmtnwGT-");

  } else if (environment === 'production') {
    console.log("production");
    provider = new ethers.providers.JsonRpcProvider("");

  }
  
  const contractBlog = new ethers.Contract(contractAddressBlog, Blog.abi, provider);

  const data = await contractBlog.fetchPosts();

  return {
    props: {
      posts: JSON.parse(JSON.stringify(data))
    }
  }

}

const arrowContainer = css`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  padding-right: 20px;
`

const postTitle = css`
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
  margin: 0;
  padding: 20px;
`

const linkStyle = css`
  border: 1px solid #ddd;
  margin-top: 20px;
  border-radius: 8px;
  display: flex;
`

const postList = css`
  width: 700px;
  margin: 0 auto;
  padding-top: 50px;  
`

const container = css`
  display: flex;
  justify-content: center;
`

const buttonStyle = css`
  margin-top: 100px;
  background-color: #fafafa;
  outline: none;
  border: none;
  font-size: 44px;
  padding: 20px 70px;
  border-radius: 15px;
  cursor: pointer;
  box-shadow: 7px 7px rgba(0, 0, 0, .1);
`

const arrow = css`
  width: 35px;
  margin-left: 30px;
`

const smallArrow = css`
  width: 25px;
`
