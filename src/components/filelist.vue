<template>
    <div class="filelist">
        <div class="files-header">
            <div class="path">
                根目录
            </div>
            <ul>
                <li class="list-header">
                    <div class="name">文件名</div>
                    <div class="size">大小</div>
                    <div class="type">种类</div>
                    <div class="modifytime">修改时间</div>
                </li>
            </ul>
        </div>
        <gallery :images="images" :index="index" @close="index = null"></gallery>
        <div class="files-body">
            <ul>
                <li v-for="(item, itemindex) in fileList" :key="item.name">
                    <div class="thumbnail"
                         @click="index = itemindex"
                         :style="{ backgroundImage: 'url(' + item.thumbnail + ')', width: '40px', height: '40px' }">
                        <span v-html="item.thumbnail"></span>
                    </div>
                    <div class="name" @click="nameClickHandler(item.isFile, item.prefix, item.fileLink)">
                        <a href="javascript:;" title="">{{ item.name }}</a>
                    </div>
                    <div class="size">{{ item.size }}</div>
                    <div class="type">{{ item.type }}</div>
                    <div class="modifytime">{{ item.modifyTime }}</div>
                </li>
            </ul>
        </div>
        <pagination :isShowNextPage="isHasNextMarker" @nextPageClick="nextPageClickHandler"/>
    </div>
</template>

<script>
import COS from 'cos-js-sdk-v5';
import xbytes from 'xbytes';
import moment from 'moment';
import pagination from './Pagination';
import pathformat from '../utils/pathformat';
import getFileType from '../utils/getFileType';
import VueGallery from 'vue-gallery';
import iconfolder from '../assets/file_type/folder/folder.svg';

export default {
    name: 'filelist',
    components: {
        pagination,
        'gallery': VueGallery
    },
    data() {
        return {
            fileList: [],
            isHasNextMarker: false,
            isNameClick: false,
            nextMarker: '',
            images: [],
            index: null
        };
    },
    watch: {
        $route(newVal, oldVal) {
            let query = newVal.query;
            if (!this.isNameClick) {
                if (Object.keys(query).length === 0) {
                    this.getlist();
                } else {
                    this.getlist(query.p + '/');
                }
            } else {
                this.isNameClick = false;
            }
        }
    },
    created() {
        let query = this.$router.history.current.query;
        if (Object.keys(query).length === 0) {
            this.getlist();
        } else {
            this.getlist(query.p + '/');
        }
    },
    methods: {
        getlist(prefix = '', marker, maxkeys = 30) {
            const cdnDomain = 'https://xr-1251228077.file.myqcloud.com/';
            this.fileList = [];
            this.images = [];
            const conf = {
                Bucket: 'xr-1251228077', /* 必须 */
                Region: 'ap-shanghai'
            };
            let cos = new COS({
                SecretId: localStorage.getItem('SecretId'),
                SecretKey: localStorage.getItem('SecretKey')
            });
            let lastPrefix = prefix;
            let vm = this;
            cos.getBucket({
                Bucket: conf.Bucket,
                Region: conf.Region,
                Prefix: decodeURIComponent(prefix),
                Delimiter: '/',
                Marker: marker,
                MaxKeys: maxkeys
            }, function(err, data) {
                let commonPrefixes = data.CommonPrefixes;
                let contentData = data.Contents;
                let nextMarker = data.NextMarker;
                let requestPrefix = data.Prefix;
                vm.isHasNextMarker = nextMarker !== undefined;
                vm.nextMarker = nextMarker;
                if (commonPrefixes.length > 0) {
                    for (let i = 0; i < commonPrefixes.length; i++) {
                        let prefix = commonPrefixes[i].Prefix;
                        vm.fileList.push({
                            thumbnail: `<img src="${iconfolder}"/>`,
                            name: prefix.replace(requestPrefix, '').replace('/', ''),
                            prefix: encodeURIComponent(prefix),
                            type: '文件夹',
                            isFile: false
                        });
                    }
                }
                if (contentData.length > 0) {
                    for (let i = 1; i < contentData.length; i++) {
                        vm.fileList.push({
                            thumbnail: `<img src="${cdnDomain + contentData[i].Key}!thumbnail"/>`,
                            name: contentData[i].Key.replace(requestPrefix, ''),
                            type: getFileType(contentData[i].Key) + '文件',
                            size: xbytes(contentData[i].Size),
                            modifyTime: moment(contentData[i].LastModified).fromNow(),
                            isFile: true,
                            fileLink: cdnDomain + contentData[i].Key
                        });
                        vm.images.push(cdnDomain + contentData[i].Key);
                    }
                }
                vm.$nextTick(() => {
                    if (lastPrefix) {
                        let currentQuery = vm.$router.history.current.query.p;
                        if (currentQuery !== pathformat(prefix)) {
                            vm.$router.push({ query: { p: pathformat(prefix) }});
                        }
                    }
                });
            });
        },
        nameClickHandler(isFile = 'false', prefix, fileLink) {
            if (isFile) {
                window.open (fileLink);
            } else {
                this.isNameClick = true;
                this.getlist(prefix);
            }
        },
        nextPageClickHandler() {
            let query = this.$router.history.current.query;
            if (Object.keys(query).length === 0) {
                this.getlist('/', this.nextMarker);
            } else {
                this.getlist(query.p + '/', this.nextMarker);
            }
        }
    }
};
</script>
<style lang="less">
    .files-header, .files-body {
        position: absolute;
        .path {
            height:40px;
            line-height: 40px;
        }
        padding: 0 20px;
        li {
            height:60px;
            line-height: 60px;
            border-bottom: 1px #EDEEEF solid;
            &:last-of-type {
                border-bottom:none;
            }
        }
        .list-header {
            font-size:12px;
        }
        .name {
            float:left;
            width:calc(100% - 400px);
        }
        .type, .size {
            float:left;
            width:100px;
            color:rgba(26,39,52,.4);
            font-size:12px;
        }
        .modifytime {
            float:left;
            width:150px;
            color:rgba(26,39,52,.4);
            font-size:12px;
        }
    }
    .files-header {
        top:0;
        right:0;
        left:0;
        height:100px;
        .name {
            width:calc(100% - 360px);
        }
    }
    .files-body {
        top:100px;
        right:0;
        bottom:50px;
        left:0;
        overflow-x: hidden;
        overflow-y: auto;
    }
    .thumbnail {
        float:left;
        width:40px;
        height:40px;
        margin-top:-10px;
        margin-right:10px;
        img {
            width:40px;
            height:40px;
            border-radius: 4px;
            object-fit: cover;
        }
    }
</style>