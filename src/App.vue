<template>
  <el-container id="app">
    <el-header>
      Header
    </el-header>

    <el-main>
      Main
      <router-view/>
    </el-main>

    <el-footer>
      Footer
    </el-footer>
  </el-container>
</template>

<style lang="scss">
html, body, body > .el-container {
  height: 100%;
}

#app {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}

body {
  margin: 0;
}

.el-header {
  line-height: 60px;
}

.el-footer {
  line-height: 60px;
}
</style>
