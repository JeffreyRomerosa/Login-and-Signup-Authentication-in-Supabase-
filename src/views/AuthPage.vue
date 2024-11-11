<template>
  <v-container 
    class="d-flex justify-center align-center" 
    style="min-height: 100vh; background: linear-gradient(135deg, #e3f2fd, #bbdefb);"
  >
    <v-card 
      class="pa-5 responsive-card" 
      elevation="6" 
      style="border-radius: 16px;"
    >
      <v-card-title class="justify-center mb-3">
        <span class="text-h5 title-style">User Authentication</span>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            v-model="email"
            label="Email"
            prepend-icon="mdi-email"
            outlined
            dense
            required
            class="mb-4"
            style="border-radius: 8px;"
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="Password"
            prepend-icon="mdi-lock"
            type="password"
            outlined
            dense
            required
            class="mb-6"
            style="border-radius: 8px;"
          ></v-text-field>
          <v-btn 
            @click="handleLogin" 
            color="primary" 
            class="mb-3" 
            block 
            large
            style="background-color: #1565c0; color: white; border-radius: 8px;"
          >
            Log In
          </v-btn>
          <v-btn 
            @click="handleSignUp" 
            color="secondary" 
            class="mb-3" 
            block 
            large
            style="background-color: #8e24aa; color: white; border-radius: 8px;"
          >
            Sign Up
          </v-btn>
          <v-btn 
            @click="handleLogout" 
            color="grey darken-1" 
            block 
            large
            style="background-color: #757575; color: white; border-radius: 8px;"
          >
            Log Out
          </v-btn>
        </v-form>
      </v-card-text>
      <v-card-actions class="justify-center mt-4">
        <span class="caption">Need help? <a href="#" class="text-primary">Contact support</a></span>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { ref } from 'vue';
import { signUp, login, logout } from '../supabase';

export default {
  setup() {
    const email = ref('');
    const password = ref('');

    const handleSignUp = async () => {
      const { error } = await signUp(email.value, password.value);
      if (error) {
        alert(`Sign Up Error: ${error.message}`);
      } else {
        alert('Sign Up Successful');
      }
    };

    const handleLogin = async () => {
      const { error } = await login(email.value, password.value);
      if (error) {
        alert(`Login Error: ${error.message}`);
      } else {
        alert('Login Successful');
      }
    };

    const handleLogout = async () => {
      const { error } = await logout();
      if (error) {
        alert(`Logout Error: ${error.message}`);
      } else {
        alert('Logged Out Successfully');
      }
    };

    return {
      email,
      password,
      handleSignUp,
      handleLogin,
      handleLogout,
    };
  },
};
</script>

<style scoped>
.v-card-title {
  text-align: center;
}

.title-style {
  font-size: 28px; /* Larger font size for emphasis */
  font-weight: bold; /* Bold text for better visibility */
  background: linear-gradient(90deg, #0d47a1, #1976d2); /* Text gradient */
  -webkit-background-clip: text; /* Clip background for text */
  -webkit-text-fill-color: transparent; /* Make text transparent to show gradient */
  letter-spacing: 1px; /* Increased letter spacing for a modern look */
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
  padding: 10px 15px; /* Padding for better spacing */
}

.v-card {
  background-color: #ffffff; /* Soft white for a clean background */
}

.v-btn:hover {
  opacity: 0.95; /* Slight hover effect for better interactivity */
}

.text-h5 {
  color: #0d47a1; /* A deep blue for the title text for a professional look */
}

a.text-primary {
  color: #1565c0;
  text-decoration: none;
}

a.text-primary:hover {
  text-decoration: underline;
}

.responsive-card {
  width: 100%;
  max-width: 500px;
  border-radius: 16px;
  transition: width 0.3s ease-in-out;
}

@media (max-width: 600px) {
  .responsive-card {
    width: 100%;
    height: 100vh;
    max-width: none;
    border-radius: 0; /* Remove rounded corners for full-screen look */
  }
}

@media (min-width: 600px) {
  .responsive-card {
    height: auto;
    width: 90%;
  }
}

@media (min-width: 960px) {
  .responsive-card {
    width: 450px; /* Moderately wide for larger screens */
  }
}

</style>
