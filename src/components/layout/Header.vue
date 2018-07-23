<template>
<!-- Hero and Navbar -->
    <!-- Navbar partial -->
  <div class="hero is-default is-bold is-feature-wave is-fullheight">
    <nav class="navbar navbar-wrapper is-cloned">
        <div class="container">
            <!-- Brand -->
            <div class="navbar-brand">
                <a class="navbar-item" href="/">
                    <img src="assets/images/logos/bulkit-blue.svg" alt="">
                </a>
                <!-- Responsive toggle -->
                <div class="custom-burger" data-target="is-cloned">
                    <a class="responsive-btn" href="javascript:void(0);">
                        <span class="menu-toggle">
                            <span class="icon-box-toggle">
                                <span class="rotate">
                                    <i class="icon-line-top"></i>
                                    <i class="icon-line-center"></i>
                                    <i class="icon-line-bottom"></i>
                                </span>
                            </span>
                        </span>
                    </a>
                </div>
                <!-- /Responsive toggle -->
            </div>

            <!-- Navbar menu -->
            <div id="is-cloned" class="navbar-menu">
                <!-- Navbar Start -->
                <div class="navbar-start">

                </div>

                <!-- Navbar end -->
                <div class="navbar-end">
                    <!-- Navbar item -->
                    <a class="navbar-item is-centered-tablet" href="landing-v4-login.html">
                        Login
                    </a>
                    <!-- Signup button -->
                    <div class="navbar-item is-button is-centered-tablet">
                        <a id="#signup-btn" href="landing-v4-login.html" class="button button-cta is-bold btn-align secondary-btn raised">
                            Sign up
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <nav class="navbar navbar-wrapper is-transparent is-static">
        <div class="container">
            <!-- Brand -->
            <div class="navbar-brand">
                <a class="navbar-item" href="/">
                    <img src="assets/images/logos/bulkit-blue.svg" alt="">
                </a>
                <!-- Responsive toggle -->
                <div class="custom-burger" data-target="is-static">
                    <a class="responsive-btn" href="javascript:void(0);">
                        <span class="menu-toggle">
                            <span class="icon-box-toggle">
                                <span class="rotate">
                                    <i class="icon-line-top"></i>
                                    <i class="icon-line-center"></i>
                                    <i class="icon-line-bottom"></i>
                                </span>
                            </span>
                        </span>
                    </a>
                </div>
                <!-- /Responsive toggle -->
            </div>

            <!-- Navbar menu -->
            <div id="is-static" class="navbar-menu">
                <!-- Navbar Start -->
                <div class="navbar-start">

                </div>

                <!-- Navbar end -->
                <div class="navbar-end">
                    <!-- Navbar item -->
                    <a class="navbar-item is-centered-tablet" href="landing-v4-login.html">
                        Login
                    </a>
                    <!-- Signup button -->
                    <div class="navbar-item is-button is-centered-tablet">
                        <a id="#signup-btn-double" href="landing-v4-login.html" class="button button-cta is-bold btn-align secondary-btn raised">
                            Sign up
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <div class="hero-body">
      <div class="container">
          <div class="columns is-vcentered">

              <div class="column is-5 is-hero-title">
                  <h1 class="title is-1 is-medium">
                    Single Search.
                  </h1>
                  <h2 class="subtitle is-4">
                    Discounted shipping rates for all major provider.
                  </h2>
                  <p class="">
                      <a href="#" class="button button-cta is-bold btn-align secondary-btn raised">
                          Get Started
                      </a>
                  </p>
              </div>
              <div class="column is-7">
                  <figure class="hero-app">
                      <quick-quote></quick-quote>
                  </figure>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import QuickQuote from '@/components/QuickQuote'

export default {
  name: 'Header',
  props: {

  },
  components: {
    QuickQuote
  },
  data () {
    return {

    }
  },
  getters: {

  }
}
</script>

<style scoped>

</style>
