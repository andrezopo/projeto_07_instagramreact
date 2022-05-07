export default function ConteudoPost(props) {
  let count = 0;
  function clickPost() {
    count++;
    if (count === 2) {
      props.iconFunction("heart");
      props.classFunction("red-icon");
    }
    setTimeout(() => (count = 0), 300);
  }

  return (
    <div onClick={clickPost} class="conteudo">
      <img src={props.postImage} />
    </div>
  );
}
