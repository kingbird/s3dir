<template>
    <div class="header">
        <logo s3link="/" s3name="s3dir" />
    </div>
</template>

<script>
import logo from './Logo.vue';
export default {
    name: 'Header',
    components: {
        logo
    }
};
</script>
<style lang="less">
    .header {
        height:60px;
        box-shadow: 0 1px 4px 0 rgba(0,21,41,.06);
    }
</style>