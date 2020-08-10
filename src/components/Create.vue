<template>
    <div id="app">
        <v-app id="inspire">
            <v-form v-model="valid">
            <v-container>
                <v-row>
                    <v-text-field
                    v-model="employee.name"
                    :rules="nameRules"
                    :counter="10"
                    label="First name"
                    required
                    ></v-text-field>
                </v-row>
        
                <v-row>
                    <v-text-field
                    v-model="employee.email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                    ></v-text-field>
                </v-row>

                <v-btn class="mr-4" @click="addEmployee">submit</v-btn>
            </v-container>
            </v-form>
        </v-app>
    </div>
</template>

<script>
export default {
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