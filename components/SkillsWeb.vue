<template>
  <div id="web">

    <client-only placeholder="Loading..."  >
        <span v-if="selected==='names'"  class="d-flex flex-row justify-content-center align-items-center flex-wrap  ">
          <div v-for="(skill,id) in  $store.getters['skills/sortSkillsByName'].skillsWeb" :key="id">
            <apexcharts 
            v-if="skill.note>=noteMin"
              type="radialBar"
              height="300"
              :options="updateLabel(skill.title)"
           
              :series="[skill.note*10]"
            />
            </div>
      </span>
      <div v-else class="d-flex flex-row justify-content-center align-items-center flex-wrap  " >
        <div v-for="(skill,id) in  $store.getters['skills/sortSkillsByScore'].skillsWeb" :key="id" >
            <apexcharts  
            v-if="skill.note>=noteMin"

              type="radialBar"
              height="300"
              :options="updateLabel(skill.title)"
              :labels="skill.title"
              :series="[skill.note*10]"
            />
</div>
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
        noteMin: { type: Number, required: true },
  },
  data: function() {
    return {
      
    };
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


#web {
background: 
    url("../assets/img/webBackground2.jpg");
  background-repeat: no-repeat;
  font-size: 1.4rem;
  background-size: cover;
   background-attachment: fixed;


  padding: 1rem;
  margin: 2rem 0;
}


</style>
