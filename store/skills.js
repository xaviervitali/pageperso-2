import { log } from "util";
import { notStrictEqual } from "assert";

export const state = () => ({
  skills: {
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
      { title: "yarn", note: 3, logo: require("~/assets/img/yarn.png") },
      { title: "mySql", note: 3, logo: require("~/assets/img/sql.png") }
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
      { title: "C.R.C.D",tooltip:"Conseiller Relation Client à Distance", note: 9.5 },
      { title: "S.R.C.D",tooltip:"Superviseur Relation Client à Distance", note: 6 }
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
}

);

export const mutations = {};

export const getters = {

  sortSkillsByName: state => {
    let allSkills = []
    Object.keys(state.skills).forEach(currentSkills => {
      let skillsSorted = [];
      let names = [];

      state.skills[currentSkills].forEach(skill => names.push(skill.title))
      names.sort()

      names.forEach(name =>
        skillsSorted.push(state.skills[currentSkills].find(skill => skill.title === name))
      );

      allSkills[currentSkills] = skillsSorted
    }
    )
    return allSkills
  },

  sortSkillsByScore: state => {
    let allScores = [];
    Object.keys(state.skills).forEach(currentSkills => {
      let scores = []
      let scoresSorted = [];
      state.skills[currentSkills].forEach(skill =>
        scores.findIndex(note => note === skill.note) === -1 ? scores.push(skill.note) : "")
      scores.sort().reverse()

      scores.forEach(score => scoresSorted.push(state.skills[currentSkills].filter(skill => score === skill.note)))
      allScores[currentSkills] = scoresSorted.flat()
    }
    )

    return allScores
  },
  allSkillsTitle: state => {
    let allSkills = [];
    Object.keys(state.skills).forEach(currentSkills => {
      state.skills[currentSkills].forEach(skill => {
        allSkills.push(skill.title)
      }
      )
    })
    return allSkills
  },
  allSkills: state => {
    let allSkills = {};
    Object.keys(state.skills).forEach(currentSkills => {
      state.skills[currentSkills].forEach(skill => {
        allSkills[skill.title] = { note: skill.note, logo: skill.logo }
      }
      )
    })
    return allSkills
  },

}

