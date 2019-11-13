<template>
  <div id="web">
    <h4>Mes Compétences Web</h4>

    <client-only placeholder="Loading..."  >
        <span v-if="selected==='names'"  class="d-flex flex-row justify-content-center align-items-center flex-wrap primary ">
            <apexcharts v-for="(skill,id) in  $store.getters['skills/sortSkillsByName'].skillsWeb" :key="id"
              type="radialBar"
              height="300"
              :options="updateLabel(skill.title)"
           
              :series="[skill.note*10]"
            />
      </span>
      <div v-else class="d-flex flex-row justify-content-center align-items-center flex-wrap primary " >
            <apexcharts v-for="(skill,id) in  $store.getters['skills/sortSkillsByScore'].skillsWeb" :key="id" 
              type="radialBar"
              height="300"
              :options="updateLabel(skill.title)"
              :labels="skill.title"
              :series="[skill.note*10]"
            />

      </div>
    </client-only>
  </div>
</template>

  <script>
export default {

  components: {
    Apexcharts: () => import("vue-apexcharts")
  },
  props: {
        selected: { type: String, required: true },
  },
  data: function() {
    return {};
  },
  methods: {
    updateLabel(title) {
      title=this.capitalize(title)
      return {
        labels: [title],
        chart: {
          height: 280,
          type: "radialBar"
        },

        series: [67],
        colors: ["#20E647"],
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 0,
              size: "70%",
              background: "#293450"
            },
            track: {
              dropShadow: {
                enabled: true,
                top: 2,
                left: 0,
                blur: 4,
                opacity: 0.15
              }
            },
            dataLabels: {
              name: {
                offsetY: -10,
                color: "#fff",
                fontSize: "1.5rem"
              },
              value: {
                color: "#fff",
                fontSize: "1rem",
                show: true
              }
            }
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "vertical",
            gradientToColors: ["#87D4F9"],
            stops: [0, 100]
          }
        },
        stroke: {
          lineCap: "round"
        }
      };
    },
      capitalize(str) {
      let newStr = "";
      str=str.split(" ")
      str.forEach(word => {
        newStr += word[0].toUpperCase() + word.slice(1).toLowerCase()+" ";
      });
      return newStr;
    }
  },
};
</script>

  <style >
h4{
  color: white;
}

#web {
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(255, 255, 255, 0.9)
    ),
    url("../assets/img/webBackground.jpg");
  background-repeat: no-repeat;
  font-size: 1.4rem;
  background-size: cover;
  background-position-y: center;
  padding: 1rem 0rem 5rem 1rem;
  margin: 0 0 2rem 0;
}
h4 {
  font-size: 2rem;
}
</style>
