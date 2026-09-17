<template>
  <header class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm px-4 py-2 sticky-top">
    <div class="container-fluid p-0 d-flex justify-content-between align-items-center">
      <router-link to="/" class="navbar-brand fw-bold fs-4 d-flex align-items-center gap-2 text-white text-decoration-none">
        <i class="bi bi-mortarboard-fill text-primary"></i>
        <span>ITI Portal</span>
      </router-link>

      <div class="d-flex align-items-center gap-3">
        <span class="badge bg-primary-subtle text-primary border border-primary-subtle px-3 py-2 rounded-pill fw-semibold fs-7">
          <i class="bi bi-shield-check me-1"></i> Admin Dashboard
        </span>
        <div class="dropdown">
          <button class="btn btn-outline-light rounded-circle d-flex align-items-center justify-content-center p-0" style="width: 38px; height: 38px;">
            <i class="bi bi-person-circle fs-5"></i>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent'
}
</script>