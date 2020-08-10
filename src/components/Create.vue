<template>
  <!-- <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Add Employee</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="addEmployee">
                    <div class="form-group">
                        <label>Employee Name:</label>
                        <input type="text" class="form-control" v-model="employee.name"/>
                    </div>
                    <div class="form-group">
                        <label>Employee Email:</label>
                        <input type="text" class="form-control" v-model="employee.email"/>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Add Employee"/>
                    </div>
                </form>
            </div>
        </div>
    </div> -->
<div id="app">
  <v-app id="inspire">
    <v-form v-model="valid">
      <v-container>
          <v-row>
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              :counter="10"
              label="First name"
              required
            ></v-text-field>
          </v-row>
  
          <v-row>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
          </v-row>

          <v-btn class="mr-4" @click="submit">submit</v-btn>
      </v-container>
    </v-form>
  </v-app>
</div>
</template>

<script>
export default {
  components: {
     // name: 'AddItem'
  },
  data() {
      return {
          employee: {}
      }
  },
  methods: {
      addEmployee() {
           let uri = 'http://localhost:4000/employees/add';
            this.axios.post(uri, this.employee).then((response) => {
                console.log(response.data)
                this.$router.push({name: 'Index'});
            });
        }
    }
}
</script>
// https://v15.vuetifyjs.com/en/components/forms