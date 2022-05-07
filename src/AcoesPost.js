import React from "react";

export default function AcoesPost(props) {
  function clickHeart() {
    props.icon === "heart-outline"
      ? props.iconFunction("heart")
      : props.iconFunction("heart-outline");

    props.iconClass === "black-icon"
      ? props.classFunction("red-icon")
      : props.classFunction("black-icon");
  }

  return (
    <div class="acoes">
      <div>
        {
          <ion-icon
            name={props.icon}
            class={"md " + "hydrated " + props.iconClass}
            onClick={clickHeart}
          ></ion-icon>
        }
        <ion-icon name="chatbubble-outline"></ion-icon>
        <ion-icon name="paper-plane-outline"></ion-icon>
      </div>
      <div>
        <ion-icon name="bookmark-outline"></ion-icon>
      </div>
    </div>
  );
}
