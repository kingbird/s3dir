<template>
    <div id="app">
        <div class="sidebar">
            <logo s3link="https://s3dir.com/" s3name="s3dir" />
        </div>
    </div>
</template>

<script>
import logo from './components/Logo.vue';
export default {
    name: 'App',
    components: {
        logo,
    },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
