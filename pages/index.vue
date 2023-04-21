<template>
  <v-row>
    <v-col cols="12" sm="8" md="8">
      <!-- <pre>{{ rotas }}</pre> -->
      <!-- test users -->
      <v-data-table
        :headers="userHeaders"
        :items="users"
        :items-per-page="5"
        class="elevation-1 mb-4"
        @click:row="filterRota"
      ></v-data-table>
      <!-- test rotas -->
      <v-data-table
        :headers="rotaHeaders"
        :items="filteredRota"
        :items-per-page="5"
        class="elevation-1"
      ></v-data-table>
    </v-col>
    <v-col cols="12" sm="8" md="4">
      <v-card class="dashboard py-4 d-flex">
        <v-row justify="center">
          <v-date-picker></v-date-picker>
        </v-row>
      </v-card>
      <v-card class="pa-4">
        <v-row>
          <v-btn elevation="2" @click="fetchAllRotas()">Fetch All Rotas</v-btn>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  data() {
    return {
      userHeaders: [
        {
          text: 'ID',
          align: 'start',
          sortable: false,
          value: 'id',
        },
        { text: 'First Name', value: 'first_name' },
        { text: 'Last Name', value: 'last_name' },
        { text: 'Email', value: 'email' },
      ],
      rotaHeaders: [
        {
          text: 'ID',
          align: 'start',
          sortable: false,
          value: 'id',
        },
        { text: 'Type', value: 'type' },
        { text: 'Date', value: 'date' },
        { text: 'User ID', value: 'userId' },
        { text: 'Start Date', value: 'startDate' },
        { text: 'End Date', value: 'endDate' },
      ],
    }
  },
  computed: {
    ...mapGetters(['users', 'filteredRota']),
  },
  created() {
    this.fetchAllUsers()
    this.fetchAllRotas()
  },
  methods: {
    ...mapActions(['fetchAllRotas', 'fetchAllUsers']),
    filterRota(user) {
      this.$store.commit('filterRotaById', user.id)
    },
  },
}
</script>


