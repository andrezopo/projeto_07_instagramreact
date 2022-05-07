export default function CurtidasPost(props) {
  return (
    <div class="curtidas">
      <img src={props.likedImage} />
      <div class="texto">
        Curtido por <strong>{props.likedName}</strong> e{" "}
        <strong>outras {props.Number} pessoas</strong>
      </div>
    </div>
  );
}
