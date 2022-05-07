export default function SidebarUser(props) {
  return (
    <div class="usuario">
      <img src={props.userImg} />
      <div class="texto">
        <strong>{props.userName}</strong>
        Catana
      </div>
    </div>
  );
}
