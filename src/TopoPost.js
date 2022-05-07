export default function TopoPost(props) {
  return (
    <div class="topo">
      <div class="usuario">
        <img src={props.pageImg} />
        {props.name}
      </div>
      <div class="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>
  );
}
