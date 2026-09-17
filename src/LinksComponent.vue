<template>
  <div class="card border-0 shadow-sm rounded-3">
    <div class="card-header bg-white border-0 pt-3 pb-2 px-3">
      <h6 class="text-uppercase text-muted small fw-bold mb-0">Navigation</h6>
    </div>
    <div class="list-group list-group-flush px-2 pb-2">
      <router-link to="/" class="list-group-item list-group-item-action border-0 rounded-2 d-flex align-items-center gap-2 py-2" active-class="active fw-semibold">
        <i class="bi bi-grid-1x2-fill"></i> Dashboard
      </router-link>
      <router-link to="/students" class="list-group-item list-group-item-action border-0 rounded-2 d-flex align-items-center gap-2 py-2" active-class="active fw-semibold">
        <i class="bi bi-people-fill"></i> Students Directory
      </router-link>
      <router-link to="/gallery" class="list-group-item list-group-item-action border-0 rounded-2 d-flex align-items-center gap-2 py-2" active-class="active fw-semibold">
        <i class="bi bi-images"></i> Gallery
      </router-link>
      <router-link to="/contact" class="list-group-item list-group-item-action border-0 rounded-2 d-flex align-items-center gap-2 py-2" active-class="active fw-semibold">
        <i class="bi bi-envelope-paper-fill"></i> Contact Us
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LinksComponent'
}
</script>