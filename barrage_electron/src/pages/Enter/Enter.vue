<template>
  <div class="box">
    <div class="container" ref="container">
      <div class="forms-container">
        <div class="signin-signup">
          <form action="" class="sign-in-form">
            <h2 class="title">Welcome Barrage</h2>
            <div class="input-filed">
              <i class="fa-solid fa-user"></i>
              <input type="text" placeholder="ROOMID">
            </div>
            <div class="input-filed">
              <i class="fa-solid fa-user"></i>
              <input type="password" placeholder="PASSWORD">
            </div>

            <input type="submit" value="ADD" class="btn solid">
            <!-- <p class="social-text">Or Sign in with social platforms</p> -->
            <!-- <div class="social-media">
                        <a href="#" class="social-icon">
                            <i class="fa-brands fa-meta"></i>
                        </a>
                        <a href="#" class="social-icon">
                            <i class="fa-brands fa-twitter"></i>
                        </a>
                        <a href="#" class="social-icon">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                        <a href="#" class="social-icon">
                            <i class="fa-brands fa-google"></i>
                        </a>
                        <a href="#" class="social-icon">
                            <i class="fa-brands fa-telegram"></i>
                        </a>
                    </div> -->
          </form>

          <form action="" class="sign-up-form" v-if="isCreate">
            <h2 class="title">Sign Up</h2>
            <div class="input-filed">
              <i class="fa-solid fa-user"></i>
              <input type="text" placeholder="USERNAME">
            </div>
            <div class="input-filed">
              <i class="fa-solid fa-envelope"></i>
              <input type="password" placeholder="EMAIL">
            </div>
            <div class="input-filed">
              <i class="fa-solid fa-lock"></i>
              <input type="password" placeholder="PASSWORD">
            </div>
            <input type="submit" value="Sign Up" class="btn solid">
            <!-- <p class="social-text">Or Sign up with social platforms</p>
                    <div class="social-media">
                        <a href="#" class="social-icon">
                            <i class="fa-brands fa-meta"></i>
                        </a>
                        <a href="#" class="social-icon">
                            <i class="fa-brands fa-twitter"></i>
                        </a>
                        <a href="#" class="social-icon">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                        <a href="#" class="social-icon">
                            <i class="fa-brands fa-google"></i>
                        </a>
                        <a href="#" class="social-icon">
                            <i class="fa-brands fa-telegram"></i>
                        </a>
                    </div> -->
          </form>
        </div>
      </div>
      <div class="panels-container">
        <div class="panel left-panel">
          <div class="content">
            <h3>No room? Forget?</h3>
            <p>Click here and select one !</p>
            <button class="btn transparent" id="sign-up-btn" @click="create">Create</button>
            <button class="btn transparent" id="sign-up-btn" @click="select">Select</button>
          </div>
          <img src="./svg/undraw_maker_launch_re_rq81.svg" class="image" alt="">
        </div>
        <div class="panel right-panel">
          <div class="content">
            <h3>One of us ?</h3>
            <p>Sign in right now !</p>
            <button class="btn transparent" id="sign-in-btn" @click="addRoom">Add Room</button>
          </div>
          <img src="./svg/undraw_on_the_office_re_cxds.svg" class="image" alt="">
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Enter',
    data() {
      return {
        isCreate: false,
        isSelect: false,
        isAddRoom: false
      }
    },
    methods: {
      create() {
        this.$refs.container.classList.add('sign-up-mode')
        this.isCreate = true
      },
      addRoom() {
        this.$refs.container.classList.remove('sign-up-mode')
      },
      select() {
        this.$refs.container.classList.add('sign-up-mode')
      }
    },
  }
</script>

<style scoped>
  .box {
    height: 100%;
    width: 100%;
    border-radius: 50px;
  }

  .container {
    position: relative;
    width: 100%;
    min-height: 100vh;
    background-color: #1d1d1f;
    overflow: hidden;
    border-radius: 50px;
  }

  .container::before {
    content: '';
    position: absolute;
    width: 2000px;
    height: 2000px;
    border-radius: 50%;
    /* background: linear-gradient(-45deg, #4481eb, #04befe); */
    background-color: #ea7724;
    top: -10%;
    right: 48%;
    transform: translateY(-50%);
    z-index: 6;
    transition: 1.8s ease-in-out;
  }

  .forms-container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  .signin-signup {
    position: absolute;
    top: 50%;
    left: 75%;
    transform: translate(-50%, -50%);
    width: 50%;
    display: grid;
    grid-template-columns: 1fr;
    z-index: 5;
    transition: 1s .7s ease-in-out;
  }

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    grid-column: 1/2;
    grid-row: 1/2;
    padding: 0 5rem;
    overflow: hidden;
    transition: .2s .7s ease-in-out;
  }

  form.sign-in-form {
    z-index: 2;
  }

  form.sign-up-form {
    z-index: 1;
    opacity: 0;
  }

  .title {
    font-size: 2.2rem;
    color: #ea7724;
    margin-bottom: 10px;
  }

  .input-filed {
    max-width: 380px;
    width: 100%;
    height: 55px;
    background-color: #f0f0f0;
    margin: 10px 0;
    border-radius: 50px;
    display: grid;
    grid-template-columns: 15% 85%;
    padding: 0 1.5rem;
  }

  .input-filed i {
    text-align: center;
    line-height: 55px;
    color: #acacac;
    font-size: 1.1rem;
  }

  .input-filed input {
    outline: none;
    border: none;
    background-color: #f0f0f0;
    color: #333;
    line-height: 1;
    font-weight: 600;
    font-size: 1.1rem;
  }

  .input-filed input::placeholder {
    /* color: #aaa; */
    color: #ea7724;
    font-weight: 550;
  }

  .btn {
    width: 150px;
    height: 49px;
    border: none;
    border-radius: 49px;
    cursor: pointer;
    background-color: #ea7724;
    color: #fff;
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 600;
    margin: 10px 0;
    transition: .5s;
  }

  .btn:hover {
    background-color: #c86118;
  }

  .social-text {
    color: #ea7724;
    padding: .7rem 0;
    font-size: 1rem;
  }

  .social-media {
    display: flex;
    justify-content: center;
  }

  .social-icon {
    height: 46px;
    width: 46px;
    border: 1px solid #333;
    margin: 0 0.45rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #333;
    font-size: 1.1rem;
    border-radius: 50%;
    transition: .3s;
  }

  .social-icon:hover {
    color: #175fdc;
    border: 1px solid #3f81f4;
    transition: .3s;
  }

  .panels-container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .panel {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    z-index: 7;
  }

  .left-panel {
    padding: 3rem 17% 2rem 12%;
    pointer-events: all;
  }

  .right-panel {
    pointer-events: none;
    padding: 3rem 12% 2rem 17%;
  }

  .panel .content {
    color: #fff;
    transition: .9s .6s ease-in-out;
  }

  .panel h3 {
    font-weight: 600;
    line-height: 1;
    font-size: 1.5rem;
  }

  .panel p {
    font-size: 1rem;
    padding: 1rem 0;
  }

  .btn.transparent {
    background: none;
    border: 2px solid #fff;
    margin: 0;
    font-size: 1.1rem;
    width: 130px;
    height: 41px;
    font-weight: 400;
  }

  .image {
    width: 100%;
    transition: .9s .8s ease-in-out;
  }

  .right-panel .content,
  .right-panel .image {
    transform: translateX(800px);
  }

  .container.sign-up-mode:before {
    transform: translate(100%, -49%);
  }

  .container.sign-up-mode .left-panel .image,
  .container.sign-up-mode .left-panel .content {
    transform: translateX(-800px);
  }

  .container.sign-up-mode .right-panel .content,
  .container.sign-up-mode .right-panel .image {
    transform: translateX(0px);
  }

  .container.sign-up-mode .right-panel {
    pointer-events: all;
  }

  .container.sign-up-mode .left-panel {
    pointer-events: none;
  }

  .container.sign-up-mode .signin-signup {
    left: 25%;
  }

  .container.sign-up-mode form.sign-in-form {
    opacity: 0;
    z-index: 1;
  }

  .container.sign-up-mode form.sign-up-form {
    z-index: 2;
    opacity: 1;
  }
</style>