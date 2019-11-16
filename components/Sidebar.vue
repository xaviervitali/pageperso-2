<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info" class="fixed-top">
      <b-navbar-brand class="text-center" href="/">
        <div>Xavier Vitali</div>
        <div style="font-size:0.8rem">
          <div>Developpeur Web</div>
          <div>Formateur Informatique</div>
        </div>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/">A propos</b-nav-item>
          <b-nav-item href="/skills">Compétences</b-nav-item>
          <b-nav-item href="/portfolio">Portofolio</b-nav-item>
          <b-nav-item href="#" v-b-tooltip.hover.top="'En cours de realisation'" disabled>Contact</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style>
html {
  padding-top: 7rem;
}
h4,
h2 {
  text-align: center;
  margin: 2rem;
}

.fixed-top {
  /* opacity: .9; */
  margin-bottom: 4rem;
  background: linear-gradient(to bottom, #2fa9bc 33%, #f9f9f9 99%);
  padding: 1rem;
  width: 100%;
  font-size: 1.2rem;
  overflow: hidden;
}

.navbar-dark .navbar-brand:hover,
.navbar-dark:hover .navbar-nav:hover .nav-link:hover {
  color: black;
}

.navbar-dark:hover .navbar-brand:hover{
  transform: rotate(180deg);
  transition: transform 1s;
}
.navbar-dark .navbar-brand{
  transform: scale(1.2);
  transition: transform 1s;
}
</style>