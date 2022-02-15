/* eslint-disable @next/next/no-img-element */
import ReactMarkdown from "react-markdown";
import { useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { css } from "@emotion/css";
import { ethers } from "ethers";
import { AccountContext } from "../../context";

import { contractAddressBlog, ownerAddressBlog } from "/config";

import Blog from "/web3/artifacts/web3/contracts/Blog.sol/Blog.json";

const ipfsURI = "https://ipfs.io/ipfs/";

const Post = ({ post }) => {

  const account = useContext(AccountContext);

  const router = useRouter();

  const { id } = router.query;

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (

    <div>

      {
        post && (

          <div className={container}>

          {
            ownerAddressBlog === account && (

              <div className={editPost}>

                <Link href={`/edit-post/${id}`}>
                
                  <a>Edit Post</a>

                </Link>

              </div>

            )
            
          }

          {
            post.coverImage && (

              <img
                src={post.coverImage}
                 className={coverImageStyle}
                 alt={post.title}
              />

            )

          }

          <h1>{post.title}</h1>

          <div className={contentContainer}>

            <ReactMarkdown>{post.content}</ReactMarkdown>

          </div>

        </div>
          
        )

      }

    </div>

  );

}

const editPost = css`
  margin: 20px 0px;  
`

const coverImageStyle = css`
  width: 900px;
`

const container = css`
  width: 900px;
  margin: 0 auto;
`

const contentContainer = css`
  margin-top: 60px;
  padding: 0px 40px;
  border-left: 1px solid #e7e7e7;
  border-right: 1px solid #e7e7e7;
  & img {
    max-width: 900px;
  }
`

export default Post;


export async function getStaticPaths() {

  let provider

  if (process.env.ENVIRONMENT === 'development') {

    provider = new ethers.providers.JsonRpcProvider();

  } else if (process.env.ENVIRONMENT === 'test') {

    provider = new ethers.providers.JsonRpcProvider('https://polygon-mumbai.g.alchemy.com/v2/FWm45N-DrSZvosyeQoN3q16dCmtnwGT-');

  } else if (process.env.ENVIRONMENT === 'production') {

    provider = new ethers.providers.JsonRpcProvider("");

  }

  const contract = new ethers.Contract(contractAddressBlog, Blog.abi, provider);

  const data = await contract.fetchPosts();


  const paths = data.map((post) => ({ params: { id: post[2] } }));


  return {
    paths,
    fallback: true
  }

}

export async function getStaticProps({ params }) {

  const { id } = params;

  const ipfsUrl = `${ipfsURI}/${id}`;

  const response = await fetch(ipfsUrl);

  const data = await response.json();


  if (data.coverImage) {

    let coverImage = `${ipfsURI}/${data.coverImage}`;

    data.coverImage = coverImage;

  }

  return {

    props: {

      post: data

    }

  }

}
