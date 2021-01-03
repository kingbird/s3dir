<template>
    <div class="page">
        <ul>
            <li v-show="isShowPrevPage"><a href="javascript:;">上一页</a></li>
            <li v-show="isShowNextPage" @click="nextPageClickHandler"><a href="javascript:;">下一页</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Pagination',
    props: {
        isShowPrevPage: {
            type: Boolean,
            default: false
        },
        isShowNextPage: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        nextPageClickHandler() {
            this.$emit('nextPageClick');
        }
    }
}
</script>

<style lang="less">
    .page {
        position: absolute;
        bottom:0;
        right:0;
        left:0;
        height: 50px;
        box-sizing: border-box;
        border-top:1px solid #EDEEEF;
        ul {
            float:right;
        }
        li {
            float:left;
        }
        a {
            display: inline-block;
            height: 28px;
            margin-top:11px;
            margin-right:20px;
            padding: 0 10px;
            line-height: 28px;
            border:1px solid #D1D4D6;
            border-radius: 3px;
            &:hover {
                background-color:#0067ed;
                color:#fff;
            }
        }
    }
</style>