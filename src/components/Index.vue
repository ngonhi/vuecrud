<template>
    <div>
        <h1>List of Employees</h1>

        <table class="table table-hover">
            <thead>
            <tr>
                <td>ID</td>
                <td>Employee Name</td>
                <td>Employee Email</td>
                <td>Actions</td>
            </tr>
            </thead>

            <tbody>
                <tr v-for="employee in employees" :key="employee._id">
                    <td>{{ employee._id }}</td>
                    <td>{{ employee.name }}</td>
                    <td>{{ employee.email }}</td>
                    <td><router-link :to="{name: 'Edit', params: { id: employee._id }}" class="btn btn-primary">Edit</router-link></td>
                    <td><button class="btn btn-danger"  v-on:click="deleteEmployee(employee._id)">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                employees: []
            }
        },

        created()
        {
            this.fetchEmployees();
        },

        methods: {
            fetchEmployees()
            {
              let uri = 'http://localhost:4000/employees';
              this.axios.get(uri).then((response) => {
                  console.log('here')
                  console.log(response.data)
                  this.employees = response.data;
              });
            },
            deleteEmployee(id)
            {
              let uri = 'http://localhost:4000/employees/delete/'+id;
              this.employees.splice(id, 1);
              this.axios.delete(uri);
            }
        }
    }
</script>