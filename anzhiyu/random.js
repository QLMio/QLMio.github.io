var posts=["2024/08/05/hello-world/","2024/04/27/hello/","2024/05/03/share-web/","2024/04/27/thanox/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };