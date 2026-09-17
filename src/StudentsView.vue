<template>
  <div>
    <!-- Top Stats Bar -->
    <div class="row g-3 mb-4">
      <div class="col-md-4">
        <div class="card border-0 shadow-sm p-3 rounded-3 border-start border-primary border-4">
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <div class="text-muted small fw-semibold">Total Students</div>
              <div class="fs-4 fw-bold text-dark">{{ studentsData.length }}</div>
            </div>
            <div class="bg-primary-subtle text-primary p-3 rounded-circle">
              <i class="bi bi-people fs-4"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Table Card -->
    <div class="card border-0 shadow-sm rounded-3">
      <div class="card-header bg-white border-bottom py-3 d-flex flex-wrap justify-content-between align-items-center gap-2">
        <div>
          <h5 class="mb-0 fw-bold text-dark">Students Directory</h5>
          <small class="text-muted">Manage enrolled students and their profiles</small>
        </div>
        <div class="d-flex gap-2">
          <input 
            type="text" 
            v-model="searchQuery" 
            class="form-control form-control-sm" 
            placeholder="Search by name or city..." 
          />
          <AddStudent @newStudentData="addNewStudent" />
        </div>
      </div>

      <div class="card-body p-0">
        <div class="table-responsive">
          <table class="table table-hover align-middle mb-0">
            <thead class="table-light">
              <tr>
                <th scope="col" class="ps-4">ID</th>
                <th scope="col">Student Name</th>
                <th scope="col">City</th>
                <th scope="col" class="text-end pe-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="student in filteredStudents" :key="student.id">
                <td class="ps-4 fw-bold text-secondary">#{{ student.id }}</td>
                <td>
                  <div class="d-flex align-items-center gap-2">
                    <div 
                      class="avatar-circle bg-primary-subtle text-primary fw-bold d-flex align-items-center justify-content-center rounded-circle" 
                      style="width: 35px; height: 35px;"
                    >
                      {{ student.name.charAt(0).toUpperCase() }}
                    </div>
                    <span class="fw-medium text-dark">{{ student.name }}</span>
                  </div>
                </td>
                <td>
                  <span class="badge bg-light text-dark border px-2 py-1 fw-normal">
                    <i class="bi bi-geo-alt me-1 text-danger"></i>{{ student.city }}
                  </span>
                </td>
                <td class="text-end pe-4">
                  <button class="btn btn-sm btn-outline-primary me-2" @click="openEditModal(student)">
                    <i class="bi bi-pencil-square"></i> Edit
                  </button>
                  <button class="btn btn-sm btn-outline-danger" @click="deleteStudent(student.id)">
                    <i class="bi bi-trash"></i> Delete
                  </button>
                </td>
              </tr>
              <tr v-if="filteredStudents.length === 0">
                <td colspan="4" class="text-center py-4 text-muted">No students found.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Edit Student Modal -->
      <div class="modal fade" id="editStudentModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content border-0 shadow">
            <div class="modal-header bg-light border-0">
              <h5 class="modal-title fw-bold">Edit Student Information</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body p-4">
              <form @submit.prevent="updateStudent">
                <div class="mb-3 text-start">
                  <label class="form-label fw-semibold text-secondary">Full Name</label>
                  <input type="text" class="form-control" v-model="selectedStudent.name" required />
                </div>
                <div class="mb-3 text-start">
                  <label class="form-label fw-semibold text-secondary">City</label>
                  <input type="text" class="form-control" v-model="selectedStudent.city" required />
                </div>
                <div class="d-flex justify-content-end gap-2 pt-3">
                  <button type="button" class="btn btn-light border" data-bs-dismiss="modal">Cancel</button>
                  <button type="submit" class="btn btn-primary px-4">Save Changes</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import initialStudents from './student'
import AddStudent from './AddStudent.vue'

export default {
  name: 'StudentsView',
  components: { AddStudent },
  data() {
    return {
      studentsData: [...initialStudents],
      searchQuery: '',
      selectedStudent: { id: null, name: '', city: '' }
    }
  },
  computed: {
    filteredStudents() {
      return this.studentsData.filter(student =>
        student.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        student.city.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    }
  },
  methods: {
    addNewStudent(newStudent) {
      const lastId = this.studentsData.length > 0 
        ? Math.max(...this.studentsData.map(s => s.id)) 
        : 0
      this.studentsData.push({ id: lastId + 1, ...newStudent })
    },
    deleteStudent(id) {
      if (confirm('Are you sure you want to delete this student?')) {
        this.studentsData = this.studentsData.filter(s => s.id !== id)
      }
    },
    openEditModal(student) {
      this.selectedStudent = { ...student }
      const modalEl = document.getElementById('editStudentModal')
      if (window.bootstrap) {
        const modalInstance = window.bootstrap.Modal.getOrCreateInstance(modalEl)
        modalInstance.show()
      }
    },
    updateStudent() {
      const index = this.studentsData.findIndex(s => s.id === this.selectedStudent.id)
      if (index !== -1) {
        this.studentsData.splice(index, 1, { ...this.selectedStudent })
      }
      const modalEl = document.getElementById('editStudentModal')
      if (window.bootstrap) {
        const modalInstance = window.bootstrap.Modal.getInstance(modalEl)
        if (modalInstance) modalInstance.hide()
      }
    }
  }
}
</script>