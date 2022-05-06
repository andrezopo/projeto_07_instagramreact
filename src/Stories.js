function Story(props) {
  return (
    <div class="story">
      <div class="imagem">
        <img src={props.img} alt="" />
      </div>
      <div class="usuario">{props.name}</div>
    </div>
  );
}

const storiesList = [
  {
    image: "../instagram/assets/img/9gag.svg",
    pageName: "9gag",
  },
  {
    image: "../instagram/assets/img/meowed.svg",
    pageName: "meowed",
  },
  {
    image: "../instagram/assets/img/barked.svg",
    pageName: "barked",
  },
  {
    image: "../instagram/assets/img/nathanwpylestrangeplanet.svg",
    pageName: "nathanwpylestrangeplanet",
  },
  {
    image: "../instagram/assets/img/wawawicomics.svg",
    pageName: "wawawicomics",
  },
  {
    image: "../instagram/assets/img/respondeai.svg",
    pageName: "respondeai",
  },
  {
    image: "../instagram/assets/img/filomoderna.svg",
    pageName: "filomoderna",
  },
  {
    image: "../instagram/assets/img/memeriagourmet.svg",
    pageName: "memeriagourmet",
  },
];

export default function Stories() {
  return (
    <div class="stories">
      {storiesList.map((story) => (
        <Story img={story.image} name={story.pageName} />
      ))}
      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}
