import { log } from "util";

export const state = () => ({

    skillsWeb: [
      { title: "HTML5", note: 6, logo: require("~/assets/img/html5.jpg") },
      { title: "Angular", note: 3, logo: require("~/assets/img/angular.png") },
      { title: "JQuery", note: 4, logo: require("~/assets/img/jquery.png") },
      { title: "JavaScript", note: 7, logo: require("~/assets/img/js.jpg") },
      {
        title: "Symfony 4",
        note: 6,
        logo: require("~/assets/img/symfony.png")
      },
      { title: "PHP", note: 6, logo: require("~/assets/img/php.jpg") },
      {
        title: "Bootstrap 4",
        note: 2,
        logo: require("~/assets/img/bootstrap.png")
      },
      { title: "Cordova", note: 2, logo: require("~/assets/img/cordova.jpg") },
      { title: "Opquast", note: 7, logo: require("~/assets/img/opquast.png") },
      {
        title: "wordpress",
        note: 3,
        logo: require("~/assets/img/wordpress.png")
      },
      {
        skill: "CSS",
        title: "CSS 3",
        note: 6,
        logo: require("~/assets/img/css3.jpg")
      },
      {
        skill: "VueJS 3",
        title: "VueJS 3",
        note: 5,
        logo: require("~/assets/img/vueJS.png")
      },
      { title: "nuxtJS", note: 2, logo: require("~/assets/img/nuxt.png") },
      { title: "nodeJS", note: 2, logo: require("~/assets/img/nodeJs.png") },
      { title: "yarn", note: 3, logo: require("~/assets/img/yarn.png") }
    ],
    skillsOthers: [
      { title: "VBA Office", note: 6 },
      { title: "Technologie ADSL", note: 6 },
      {
        title: "Technologie Fibre",
        note: 4,
        logo: require("~/assets/img/fttx.png")
      },
      { title: "Beta-Test", note: 6, logo: require("~/assets/img/beta1.jpg") },
      { title: "Conseiller Relation Client à Distance", note: 9.5 },
      { title: "Superviseur relations clients à distance", note: 6 }
    ],
    skillsForm: [
      {
        title: "Ingéniérie Pédagogique",
        note: 6,
        logo: require("~/assets/img/animation.png")
      },
      {
        title: "Ingéniérie de Formation",
        note: 4,
        logo: require("~/assets/img/if.png")
      },
      {
        title: "Accompagnement",
        note: 5,
        logo: require("~/assets/img/accompagnement.png")
      }
    ]
  }
  
);

export const mutations = {};

export const getters = {
  
  sortSkillsByName: state => {
    
   let names = [];
    let skillsSorted = [];
    state.skillsForm.forEach(element => {
      names.push(element.title);
    });
    names.sort();
    names.forEach(name =>
      skillsSorted.push(state.skillsForm.find(skill => skill.title === name))
    );
    return skillsSorted;


  },
  // sortSkillsFormByName: state => {
  //   let names = [];
  //   let skillsSorted = [];
  //   state.skillsForm.forEach(element => {
  //     names.push(element.title);
  //   });
  //   names.sort();
  //   names.forEach(name =>
  //     skillsSorted.push(state.skillsForm.find(skill => skill.title === name))
  //   );
  //   return skillsSorted;
  // },
  // sortSkillsOthersByName: state => {
  //   let names = [];
  //   let skillsSorted = [];
  //   state.skillsOthers.forEach(element => {
  //     names.push(element.title);
  //   });
  //   names.sort();
  //   names.forEach(name =>
  //     skillsSorted.push(state.skillsOthers.find(skill => skill.title === name))
  //   );
  //   return skillsSorted;
  // },
  sortSkillsByScore: state => skills => {
    let scores = [];
    let scoresSorted = [];
    state[skills].forEach(element => {
      !scores.find(note => note === element.note)
        ? scores.push(element.note)
        : "";
    });
    scores.sort().reverse();

    scores.forEach(score =>
      scoresSorted.push(state[skills].filter(skill => skill.note === score))
    );

    return scoresSorted.flat();
  }
};


