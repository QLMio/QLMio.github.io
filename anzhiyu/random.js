var posts=["2024/06/23/hello-world/","2024/04/27/hello/","2024/05/03/share-web/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };