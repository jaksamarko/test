import face_Eni from "../assets/images/team_eni.png";
import face_David from "../assets/images/team_david.png";
import face_Marko from "../assets/images/team_marko.png";
import face_Zsombor from "../assets/images/team_zsombor.png";
import face_Default from "../assets/images/team_default.png";
import face_Koki from "../assets/images/team_koki.png";
import face_Gyula from "../assets/images/team_gyula.jpg";

export interface ProfileSocials {
  fbook?: string;
  igram?: string;
  disc?: string;
  twitt?: string;
  githb?: string;
  pek?: string;
}

export interface TeamProfileInterface {
  name: string;
  image: any;
  role: "Körvezető" | "Tag" | "Gazdaságis" | "Padawan";
  socials: ProfileSocials;
}

const teamMembers: TeamProfileInterface[] = [
  {
    name: "Fejes Dániel (Koki)",
    role: "Körvezető",
    image: face_Koki,
    socials: {
      fbook: "https://www.facebook.com/fejes.danika",
      disc: "Koki#9483",
      pek: "https://pek.sch.bme.hu/profiles/koki",
    },
  },
  {
    name: "Karakas Dávid",
    role: "Tag",
    image: face_David,
    socials: {
      pek: "https://pek.sch.bme.hu/profiles/Yay",
    },
  },
  {
    name: "Fábry-Nagy Enikő",
    image: face_Eni,
    role: "Gazdaságis",
    socials: {
      pek: "https://pek.sch.bme.hu/profiles/mitzuki.sch.bme.hu",
    },
  },
  {
    name: "Gál Gyula",
    image: face_Gyula,
    role: "Tag",
    socials: {
      pek: "https://pek.sch.bme.hu/profiles/Nagyon_szeretem_a_tejet",
    },
  },
  {
    name: "Jaksa Márkó Dániel",
    image: face_Marko,
    role: "Tag",
    socials: {
      disc: "iDroppedMyCroissant#5117",
      fbook: "https://www.facebook.com/jaksa.marko",
      pek: "https://pek.sch.bme.hu/profiles/jmarko",
    },
  },
  {
    name: "Barta Zsombor",
    image: face_Zsombor,
    role: "Tag",
    socials: {
      pek: "https://pek.sch.bme.hu/profiles/bmzsombi",
    },
  },
  {
    name: "Pozsonyi Balázs",
    image: face_Default,
    role: "Tag",
    socials: {
      pek: "https://pek.sch.bme.hu/profiles/Pozsi%20",
    },
  },
];

export default teamMembers;
