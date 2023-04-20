<template>
  <v-row class="pa-4">
    <v-col cols="12" sm="8" md="6">
      <!-- test rotas -->
      <!-- <pre>{{ rotas }}</pre> -->
      <!-- test users -->
      <pre>{{ users }}</pre>
      <!-- test single user by id -->
      <pre>{{ userRota }}</pre>
      <v-btn elevation="2" @click="fetchRotaById(123)">Fetch User</v-btn>
    </v-col>
    <v-col cols="12" sm="8" md="6">
      <v-card class="dashboardn py-4 d-flex">
        <v-row justify="center">
          <v-date-picker v-model="picker"></v-date-picker>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters(['rotas', 'users', 'userRota']),
  },
  created() {
    this.fetchAllRotas()
    this.fetchAllUsers()
  },
  methods: {
    ...mapActions(['fetchAllRotas', 'fetchAllUsers', 'fetchRotaById']),
  },
}
</script>
