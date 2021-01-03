<template>
    <div id="app">
        <Sheader />
        <Sidebar />
        <router-view class="content"></router-view>
    </div>
</template>

<script>
import Sheader from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';
export default {
    name: 'App',
    components: {
        Sheader,
        Sidebar
    },
};
</script>

<style lang="less">
body {
  font: status-bar;
  font-size: 14px;
  line-height: 1.42858;
  color: #1e2330;
}
:focus {
  outline: none;
}
h6,
h5,
h4,
h3,
h2,
h1 {
  margin: 0;
  font-size: 100%;
  font-weight: normal;
  font-style: normal;
}
body,
form,
ul,
ol,
dl,
dd,
p {
  margin: 0;
}
ul,
ol {
  list-style-type: none;
  padding: 0;
}
img {
  border: none;
  vertical-align: bottom;
}
button,
input,
select,
textarea,
dialog {
  font-size: 100%;
  margin: 0;
  padding: 0;
  font-family: inherit;
  color: inherit;
}
a {
  text-decoration: none;
  color: #0067ed;
}
a * {
  cursor: pointer;
}
a:hover {
  color: #0056c7;
}
sup {
  vertical-align: text-top;
}
sub {
  vertical-align: text-bottom;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
  table-layout: fixed;
}
[hidden] {
  display: none;
}
/*禁用ie下文本框后面的X*/
input::-ms-clear {
  display: none;
}
div::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
div::-webkit-scrollbar-thumb {
  background-color: #bbb;
  border-radius: 8px;
}
div::-webkit-scrollbar-thumb:hover {
  background-color: #aaa;
}
div::-webkit-scrollbar-track-piece {
  background-color: #ddd;
}
/*修复Mac下input type= search的时候输入框左侧出现的5px padding*/
input[type="search"] {
  -webkit-appearance: textfield;
}
input[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
#app {
    position:absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
}
    .content {
        position: absolute;
        top: 60px;
        right: 0;
        bottom: 0;
        left:180px;
    }
@media (max-width: 768px) {
  .logo {
    width: 120px;
  }
  .sidebar {
    display: none;
  }
  .content {
    left:0;
  }
  .files-header .type, .files-body .type, .files-header .size, .files-body .size, .files-header .modifytime, .files-body .modifytime {
    display: none;
  }
  .files-header .name, .files-body .name {
    width: calc(100% - 50px)!important;
  }
}
</style>
