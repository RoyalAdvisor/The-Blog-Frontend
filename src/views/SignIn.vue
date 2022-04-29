<template>
  <section class="signup">
    <form class="signup-form">
      <h2>Welcome Back!</h2>
      <div class="form-control">
        <label for="Email">Email</label>
        <input type="email" name="email" />
      </div>
      <div class="form-control">
        <label for="Password">Password</label>
        <input type="text" name="password" />
      </div>
      <div class="form-control">
        <label for="Confirm-Password">Confirm Password</label>
        <input type="text" name="confirm-password" />
      </div>
      <div class="form-button">
        <button type="submit">Submit</button>
      </div>
      <div class="form-redirect">
        <h4>
          Don't have an account?
          <span
            ><router-link :to="{ path: '/signup' }" class="sign-up"
              >Click here to sign up!</router-link
            ></span
          >
        </h4>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: "SignIn",
};
</script>

<style scoped>
.signup {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: #7ed6df;
  background-image: url("../assets/signin.svg");
  background-repeat: no-repeat;
  background-size: 450px;
  background-position: bottom right;
}
h2 {
  color: #ffffff;
  margin: 0;
}
.signup-form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #130f40;
  gap: 1rem;
  width: 400px;
  padding: 30px 15px;
  border-radius: 3px;
  box-shadow: 0px 0px 5px #130f40;
}
.form-control {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 1rem;
}
.form-control input,
label {
  width: 98%;
}
.form-control label {
  font-size: 12px;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
}
.form-control input {
  height: 30px;
  border: none;
  outline: none;
  border-radius: 3px;
  font-size: 12px;
}
.form-button {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
}
.form-redirect {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
}
button {
  min-width: 100px;
  padding: 8px 10px;
  border: none;
  border-radius: 3px;
  font-weight: 700;
  font-size: 10px;
  background-color: #4834d4;
  color: #ffffff;
}
h4 {
  font-weight: 600;
  font-size: 10px;
  color: #ffffff;
}
.sign-up {
  color: #4834d4;
  text-decoration: none;
}
@media screen and (max-width: 600px) {
  .signup {
    background-image: none;
  }
  .signup-form {
    max-width: 85%;
  }
}
</style>
