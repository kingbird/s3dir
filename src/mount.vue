<template>
    <div class="mount">
        <div class="tilte">增加挂载</div>
        <div class="mount-add">
            <input type="text" placeholder="SecretId"/>
            <input type="text" placeholder="SecretKey"/>
            <select>
                <option value="0">选择bucket</option>
            </select>
            <a href="javascript:;" @click="getService">确定</a>
        </div>
        <div class="mount-list">
            <div class="tilte">挂载列表</div>
        </div>
    </div>
</template>

<script>
import COS from 'cos-js-sdk-v5';
export default {
    name: 'mount',
    components: {
    },
    data() {
        return {
        };
    },
    watch: {
    },
    created() {

    },
    methods: {
        getService() {
            let cos = new COS({
                SecretId: localStorage.getItem('SecretId'),
                SecretKey: localStorage.getItem('SecretKey')
            });
            // let vm = this;
            cos.getService({
            }, function(err, data) {
                console.log(data);
            });
        },
    }
};
</script>