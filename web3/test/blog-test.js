const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Blog", async () => {

  let blog;

  beforeEach(async () => {

    const Blog = await ethers.getContractFactory("Blog");
    
    blog = await Blog.deploy("My Blog");

    await blog.deployed();

  });

  it("Should create a post", async () => {

    const createPostTx = await blog.createPost("My first post", "First post for testing");
    
    await createPostTx.wait();

    const [post] = await blog.fetchPosts();

    expect(post.title).to.equal("My first post");

  });

  it("Should edit a post", async () => {

    const createPostTx = await blog.createPost("My second post", "Second post for testing");

    await createPostTx.wait();

    const updatePostTx = await blog.updatePost(1, "My second post updated", "Second post updated for testing", true);

    await updatePostTx.wait();


    const [post] = await blog.fetchPosts();

    expect(post.title).to.equal("My second post updated");

  });

  it("Should update the blog's name", async () => {

    expect(await blog.name()).to.equal("My Blog");

    const updateNameTx = await blog.updateName("Full stack developer's blog");

    await updateNameTx.wait();


    expect(await blog.name()).to.equal("Full stack developer's blog");

  });

});
