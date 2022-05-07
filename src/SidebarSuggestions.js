import SidebarSuggestionsTitle from "./SidebarSuggestionsTitle";
import SidebarSuggestion from "./SidebarSuggestion";

const sidebarList = [
  {
    sugImage: "../instagram/assets/img/bad.vibes.memes.svg",
    sugName: "bad.vibes.memes",
    sugReason: "Segue você",
  },
  {
    sugImage: "../instagram/assets/img/chibirdart.svg",
    sugName: "chibirdart",
    sugReason: "Segue você",
  },
  {
    sugImage: "../instagram/assets/img/razoesparaacreditar.svg",
    sugName: "razoesparaacreditar",
    sugReason: "Novo no Instagram",
  },
  {
    sugImage: "../instagram/assets/img/adorable_animals.svg",
    sugName: "adorable_animals",
    sugReason: "Segue você",
  },
  {
    sugImage: "../instagram/assets/img/smallcutecats.svg",
    sugName: "smallcutecats",
    sugReason: "Segue você",
  },
];

export default function SidebarSuggestions() {
  return (
    <div class="sugestoes">
      <SidebarSuggestionsTitle />

      {sidebarList.map((suggestion) => (
        <SidebarSuggestion
          img={suggestion.sugImage}
          name={suggestion.sugName}
          reason={suggestion.reason}
        />
      ))}
    </div>
  );
}
