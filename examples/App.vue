<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <supe-demo />
    <supe-card  
      imgSrc="angular.png"
      summary="动手做一个完整的AngularJS项目"
    />
    <br/>
    <supe-card 
      imgSrc="vue.png"
      summary="渐进式JavaScript框架"
    >
      <div slot="footer" class="footer">
        <div class="intro">易用、灵活、高效</div>
        <div class="level">推荐级别：高</div>
      </div>
    </supe-card>
    <br/>
    <supe-card  
      imgSrc="react.png"
      :width="270"
      :imgHeigth="90"
    >
      用于构建用户界面的 JavaScript 库
      <div slot="footer" class="footer">
        <div class="intro">声明式、组件化、一次学习，随处编写</div>
        <div class="level">推荐级别：高</div>
      </div>
    </supe-card>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.footer {
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
}
.intro {
  color: #9199a1;
  margin-bottom: 8px;
}
.level {
  color: #d12519;
}
</style>
