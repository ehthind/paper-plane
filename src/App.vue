<template>
  <div id="app">
    <Header>
    </Header>

    <div class="">
      <router-view/>
    </div>

    <Footer>
    </Footer>
  </div>
</template>

<script>
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
html, body {
  height: 100%;
}

body {
  margin: 0;
}

#app {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.is-marginless {
   margin: 0 0 0 0 !important;
}
</style>
