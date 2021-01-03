<template>
    <div class="list">
        <filelist/>
    </div>
</template>

<script>
import filelist from './components/filelist.vue';
export default {
    name: 'list',
    components: {
        filelist
    },
};
</script>