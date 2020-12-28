<template>
    <div class="logo">
        <a :href="s3link" :title="s3name">Logo</a>
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
