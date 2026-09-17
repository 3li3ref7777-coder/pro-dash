<template>
  <div class="d-flex flex-column min-vh-100 bg-light">
    <HeaderComponent />

    <div class="container-fluid px-4 my-4 flex-grow-1">
      <div class="row g-4">
        <aside class="col-lg-2 col-md-3">
          <LinksComponent />
        </aside>

        <main class="col-lg-10 col-md-9">
          <router-view />
        </main>
      </div>
    </div>

    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue'
import FooterComponent from './FooterComponent.vue'
import LinksComponent from './LinksComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
    LinksComponent
  }
}
</script>