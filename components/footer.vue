<template>
  <div style="margin-bottom:5rem;">
<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" integrity="sha256-+N4/V/SbAFiW1MPBCXnfnP9QSN3+Keu+NlB+0ev/YKQ=" crossorigin="anonymous" />
</head>
    <section class="fixed-bottom">
      <article>
        <!-- <p>Linkedin</p> -->
      <p  v-b-tooltip.hover.top="'Linkedin'">
          <i  class="fab fa-linkedin-in"></i>
        </p>
      </article>
      <article>
        <!-- <p>Github</p> -->
        <p v-b-tooltip.hover.top="'Github'">
          <i class="fab fa-github"></i>
        </p>
      </article>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style>

 
section {
  background: linear-gradient(to top, #2fa9bc 33%,#f9f9f9 99%);

  width: 100%;
  padding: .5rem;
  text-align: center;
  display: flex;
  justify-content: space-around;
  font-size: 1.2rem;
  opacity: .9;
  margin-top: 5rem;
}

article:hover{
color:#C6E3E8}
</style>