import Post from "./Post";

const postsList = [
  {
    pageImage: "../instagram/assets/img/meowed.svg",
    pageName: "meowed",
    postImage: "../instagram/assets/img/gato-telefone.svg",
    likedPageImage: "../instagram/assets/img/respondeai.svg",
    likedPageName: "respondeai",
    likedNumber: "101.523",
  },
  {
    pageImage: "../instagram/assets/img/barked.svg",
    pageName: "barked",
    postImage: "../instagram/assets/img/dog.svg",
    likedPageImage: "../instagram/assets/img/adorable_animals.svg",
    likedPageName: "adorable_animals",
    likedNumber: "99.159",
  },
];

export default function Posts() {
  return (
    <div class="posts">
      {postsList.map((post) => (
        <Post
          pageImage={post.pageImage}
          pageName={post.pageName}
          postImage={post.postImage}
          likedPageImage={post.likedPageImage}
          likedPageName={post.likedPageName}
          likedNumber={post.likedNumber}
        />
      ))}
    </div>
  );
}
