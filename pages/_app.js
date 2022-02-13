import { css } from "@emotion/css";
import { useContext } from "react";
import { useRouter } from "next/router";
import { ethers } from "ethers";
import Link from "next/link";
import Image from "next/image";
import { AccountContext } from "../context"

// import contract address and contract owner address...
import { blogAddress, blogOwner } from "../config";

// import Application Binary Interface (ABI)...
import Blog from "../artifacts/contracts/Blog.sol/Blog.json";


const Home = (props) => {

  const { posts } = props;
  const account = useContext(AccountContext);

  const router = useRouter();
  const navigate = async () => {
    router.push("/create-post");
  };


  return (

    <>
    
      <h1>Blog - Full Stack Web3 Developer</h1>

      <hr />

      <div className={postList}>

        {
          posts.map((post, index) => (

            <Link key={index} href={`/post/${post[2]}`} >

              <a>
                
                <div className={linkStyle}>

                  <p className={postTitle}>{post[1]}</p>

                  <div className={arrowContainer}>

                    <Image 
                      src={'/right-arrow.svg'}
                      alt="Right arrow"
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
          (account === blogOwner) && posts && !posts.length && (

            <button className={buttonStyle} onClick={navigate}>

              <Image 
                src='/right-arrow.svg'
                alt="Right Arrow"
                className={arrow}
              />

            </button>

          )

        }

      </div>

    </>

  );

}

export default Home;


export async function getServerSideProps() {

  let provider;

  if (process.env.ENVIRONMENT === "local") {

    provider = new ethers.providers.JsonRpcProvider();

  } else if (process.env.ENVIRONMENT === "testnet") {

    provider = new ethers.providers.JsonRpcProvider("https://rpc-mumbai.matic.today");

  } else if (process.env.ENVIRONMENT === "mainnet") {

    provider = new ethers.providers.JsonRpcProvider("https://polygon-rpc.com/");

  }

  const blogContract = new ethers.Contract(blogAddress, Blog.abi, provider);

  const data = await blogContract.fetchPosts();

  return {

    props: {
      posts: JSON.parse(JSON.stringify(data))
    }

  }

}


const arrowContainer = css`
  display: flex;
  flex: 1;
  justity-content: flex-end;
  padding-right: 20px;
`

const postTitle = css`
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
  margin: 0;padding: 20;
`

const linkStyle = css`
  border:1px solidy #ddd;
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
  justity-content: center;
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





