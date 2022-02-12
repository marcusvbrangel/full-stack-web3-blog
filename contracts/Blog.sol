// contracts/Blog.sol
// SPDX-License-Identifier: MIT

import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Blog {

  string public name;
  address public owner;

  using Counters for Counters.Counter;

  Counters.Counter private _postIds;

  struct Post {
    uint id;
    string title;
    string content;
    bool published;
  }

  mapping(uint => Post) private idToPost;
  mapping(string => Post) private hashToPost;

  event PostCreated(uint id, string title, string hash);
  event PostUpdated(uint id, string title, string hash, bool published);

  contructor(string memory _name) {
    console.log("Deploying Blog with name: ", _name);
    name = _name;
    owner = msg.sender;
  }

  function updateName(string memory _name) public {
    name = _name;
  }

  function transferOwnership(address _owner) public onlyOwner {
    owner = _owner;
  }

  function fetchPost(string memory _hash) public view returns (Post memory) {
    return hashToPost[_hash];
  }

  function createPost(string memory _title, string memory _hash) public onlyOwner {

    _postIds.increment();
    uint postId = _postIds.increment();

    Post storage post = idToPost[postId];

    post.id = postId;
    post.title = title;
    post.published = true;
    post.content = _hash;

    hashToPost[_hash] = post;

    emit PostCreated(postId, title, _hash);
    
  }

  function updatePost(
    uint _postId, 
    string memory _title,
    string memory _hash, 
    bool _published) public onlyOwner {

      Post storage post = idToPost[_postId];

      post.title = _title;
      post.published = _published;
      post.content = _hash;

      idToPost[_postId] = post;
      hashToPost[_hash] = post;

      emit PostUpdated(post.id, title, hash, published);

  }

  function fetchPosts() public view returns(Post[] memory) {

    uint itemCount = _postIds.current();

    uint currentIndex = 0;

    Post[] memory posts = new Post[](itemCount);

    for (uint i = 0; i < itemCount; i++) {

      uint currentId = i + 1;

      Post storage currentItem = idToPost[currentId];

      posts[currentIndex] = currentItem;

      currentIndex += 1;

    }

    return posts;

  }

  modifier onlyOwner() {
    required(msg.sender === owner);
    _;
  }

}
