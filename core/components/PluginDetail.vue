<template>
<div class="customContent">
        <div class="appstoreDetail" v-loading="loading">
            <div class="appstoreHeader">
                <h2>{{ appInfo?.appName }}</h2>
                <div class="appInfo">
                    <span class="appInfoItem"><el-icon class="appInfoItemIcon"><User /></el-icon> {{ appInfo?.appAuthor }}</span>
                    <span class="appInfoItem" v-if="appInfo?.appAuthorEmail"><el-icon class="appInfoItemIcon"><Message /></el-icon> {{ appInfo?.appAuthorEmail }}</span>
                    <span class="appInfoItem">
                        <el-tag type="primary" class="appPayType" v-if="appInfo?.payType === 0">免费</el-tag>
                        <el-tag type="danger" class="appPayType" v-if="appInfo?.payType === 1">付费</el-tag>
                    </span>
                </div>
                <div>
                    <el-button type="primary" @click="toUrl(appInfo?.appDownloadUrl)" v-if="appInfo?.appDownloadUrl"><el-icon class="btnIcon"><Download /></el-icon>插件下载</el-button>
                    <el-button type="primary" @click="toUrl(appInfo?.appPreviewUrl)" v-if="appInfo?.appPreviewUrl"><el-icon class="btnIcon"><View /></el-icon>在线预览</el-button> 
                    <el-button type="primary" @click="toUrl(appInfo?.appGitUrl)" v-if="appInfo?.appGitUrl"><el-icon class="btnIcon"><Star /></el-icon>源码地址</el-button> 
                </div>
            </div>
       
            <div class=" container appDescription vp-doc">
                <div style="position: relative;" v-html="appInfo?.parseAppDescription">
                    
                </div>
                <Comment :key="'/themeStore/theme?id=' + appInfo?.id"></Comment>
            </div>
     
        </div>
    </div>
    
</template>
<script setup>
import Comment from '../../.vitepress/theme/components/Comment.vue';
import {reactive, ref, onMounted} from "vue";
import { User, Star,Download,View,Message } from '@element-plus/icons-vue'
import {appstoreGetByIdApi} from "../api/appstore.js";
import mediumZoom from 'medium-zoom'

let appInfo = ref(null);
let loading = ref(false);

onMounted(() => {
    init();
})

function init(){
    loading.value = true;
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const id = params.get('id');
    appstoreGetByIdApi(id).then(res => {
        if(res.code === 200) {
            appInfo.value = res.data;
            setTimeout(() => {
                mediumZoom('.container img', { background: 'var(--vp-c-bg)' })
            })
        } else {
            ElMessage.error(res.msg);
        }
        loading.value = false;
    })
}


function toUrl(url) {
    window.open(url, '_blank');
}

</script>

<style>
.customContent{
    width: 100%;
    overflow-x: hidden;
}

.appstoreDetail .appstoreHeader h2{
    margin: 15px 0 ;
    border: none!important;
    letter-spacing: -0.02em;
    line-height: 32px;
    font-size: 26px;
}
.appstoreDetail .appstoreHeader p{
    margin: 0;
}
.appstoreDetail .appstoreHeader{
    text-align: center;
    height: 220px;
    position: absolute;
    left: 0;
    right: 0;
    background-color: var(--vp-c-bg);
    background-image: url("data:image/svg+xml,%3Csvg width='42' height='44' viewBox='0 0 42 44' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Page-1' fill='none' fill-rule='evenodd'%3E%3Cg id='brick-wall' fill='%239C92AC' fill-opacity='0.16'%3E%3Cpath d='M0 0h42v44H0V0zm1 1h40v20H1V1zM0 23h20v20H0V23zm22 0h20v20H22V23z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    border-bottom: 1px solid var(--vp-c-divider);
    padding-top: 40px;
}
.appstoreDetail .container{
    width: 65%;
    margin: auto;
}
.appstoreDetail .appInfo{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
}
.appstoreDetail .appInfo .appInfoItem{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
}
.appstoreDetail .appDescription{
    padding-top: 236px;
}
.appstoreDetail .appInfoItemIcon{
    margin-right: 5px;
}
.appstoreDetail .btnIcon{
    margin-right: 5px;
}

@media screen and (max-width:1550px) {
    .appstoreDetail .container{
        width: 78%;
        margin: auto;
    }
}

@media screen and (max-width:900px) {
    .appstoreDetail .container{
        width: 85%;
        margin: auto;
    }
}

@media screen and (max-width:600px) {
    .appstoreDetail .container{
        width: 90%;
        margin: auto;
    }
}
</style>