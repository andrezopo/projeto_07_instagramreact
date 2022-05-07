import React from "react";
import TopoPost from "./TopoPost";
import ConteudoPost from "./ConteudoPost";
import AcoesPost from "./AcoesPost";
import CurtidasPost from "./CurtidasPost";

export default function Post(props) {
  // State variables
  const [heart, setHeart] = React.useState("heart-outline");
  const [changeClass, setChangeClass] = React.useState("black-icon");

  return (
    <div class="post">
      <TopoPost pageImg={props.pageImage} name={props.pageName} />
      <ConteudoPost
        postImage={props.postImage}
        classFunction={setChangeClass}
        iconFunction={setHeart}
      />
      <div class="fundo">
        <AcoesPost
          icon={heart}
          iconClass={changeClass}
          classFunction={setChangeClass}
          iconFunction={setHeart}
        />
        <CurtidasPost
          likedImage={props.likedPageImage}
          likedName={props.likedPageName}
          Number={props.likedNumber}
        />
      </div>
    </div>
  );
}
