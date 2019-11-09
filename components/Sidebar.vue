<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="info" class="fixed-top">
    <b-navbar-brand class="text-center" href="/"><div>
Xavier Vitali
    </div>
    <div style="font-size:0.8rem" >
    <div>
        Developpeur Web
    </div>
    <div>
        Formateur Informatique
    </div>
    </div>
        </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <!-- <b-nav-item href="/">A propos</b-nav-item> -->
        <b-nav-item href="skills">Compétences</b-nav-item>
        <b-nav-item href="portfolio">Portofolio</b-nav-item>
        <b-nav-item href="#">Contact</b-nav-item>

      </b-navbar-nav>

     
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {

}
</script>

<style>
html{
  padding-top: 7rem;



  
}
h4, h2{
  text-align: center;
  margin: 2rem;

}

.fixed-top {
  opacity: .9;
  margin-bottom: 2rem;
  background: linear-gradient(to bottom, #2fa9bc 33%,#f9f9f9 99%);
  
}



.navbar-dark .navbar-brand:hover{
  color: black;
}

.navbar-dark .navbar-brand ,.navbar-dark .navbar-nav .nav-link{
  
  color: black;
}


</style>