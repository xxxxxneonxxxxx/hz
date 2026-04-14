<!-- App.vue -->
<template>
  <div id="app">
    <AppHeader />
    <main>
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from './Header/view/AppHeader.vue'
import AppFooter from './Footer/view/AppFooter.vue'
</script>

<style>
*, *::before, *::after { box-sizing: border-box; }
html {
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}
body {
  margin: 0;
  padding: 0;
  font-family: var(--font--body);
  color: var(--color--text-primary);
  background: var(--color--surface);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#app {
  margin: 0;
  padding: 0;
}

main {
  margin: 0;
  padding: 0;
}
a { color: inherit; }
img { max-width: 100%; display: block; }
button, input, textarea, select { font: inherit; }
</style>

<style scoped>
.footer-stub {
  text-align: center;
  padding: 20px;
  font-size: 13px;
  color: #999;
  border-top: 1px solid #ebebeb;
  margin-top: 40px;
}
</style>
