<template>
    <div class="sidebar">
        <div class="item">
            <ul>
                <li><router-link :to="{ path: '/' }">文件列表</router-link></li>
                <li><router-link :to="{ path: 'fav' }">个人收藏</router-link></li>
                <li><router-link :to="{ path: 'mount' }">挂载管理</router-link></li>
                <li><a href="javascript:;">数据管理</a></li>
            </ul>
        </div>
    </div>
</template>

<script>

</script>
<style lang="less">
    .sidebar {
        position: absolute;
        top:60px;
        width:180px;
        left:0;
        bottom:0;
        padding-top:20px;
        background-color:#F2F4F8;
        li {
            a {
                display: block;
                height:50px;
                line-height:50px;
                font-weight: bold;
                color: #4F6174;
                text-align: center;
                &:hover, &.current {
                    background-color:#fff;
                }
            }
        }
    }
</style>