<template>
    <div class="logo">
        <a :href="s3link" :title="s3name">S3Directory</a>
    </div>
</template>

<script>
export default {
    name: 'Logo',
    props: {
        s3link: {
            type: String,
            default: ''
        },
        s3name: {
            type: String,
            default: ''
        }
    }
};
</script>

<style lang="less">
.logo {
    width:180px;
    text-align: center;
    line-height: 60px;
}
</style>
