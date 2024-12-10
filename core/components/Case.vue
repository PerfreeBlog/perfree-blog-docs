<template>
    <div class="customContent">
        <div class="case">
            <div class="caseHeader">
                <h2>案例网站</h2>
                <p>收录了目前使用PerfreeBlog部署的部分网站</p>
                <p>您也可以在下方评论区提交您的网站</p>
            </div>
       
            <div class="caseList container">
                <div style="position: relative;">
                    <el-row :gutter="20" style="margin-bottom: 10px;">
                    <el-col  :xs="24" :sm="12" :md="8" :lg="6" :xl="6" v-for="caseItem in caseList">
                        <div class="appCard" @click="toUrl(caseItem.url)">
                            <el-image :src="caseItem.thumbnail" :fit="'cover'" class="appImg">
                                <template #placeholder>
                                    <div class="imgLoading">
                                        <el-icon class="is-loading"><Loading /></el-icon>
                                    </div>
                                </template>
                            </el-image>
                            <div class="appInfo">
                                <div class="appName">
                                    {{ caseItem.name }}
                                </div>
                            </div>
                        </div>
                    </el-col>
                </el-row>

                <Comment :key="'/case'"></Comment>
                </div>
               
            </div>
     
        </div>
    </div>
    
</template>

<script setup>
import Comment from '../../.vitepress/theme/components/Comment.vue';
import {reactive, ref, onMounted} from "vue";
import { User, Search,Loading } from '@element-plus/icons-vue'

let caseList = ref([
    {name: "Perfree的个人博客", url: "https://www.yinpengfei.com/", thumbnail: "/case/1733468250966.jpg"},
    {name: "杯子的博客", url: "https://blog.pereast.com/", thumbnail: "/case/1733796105656.jpg"},
    {name: "兽医首选", url: "https://www.petcare.cn/", thumbnail: "/case/1733796340015.jpg"},
    {name: "交科能源", url: "https://www.enytek.cn/", thumbnail: "/case/1733796480520.jpg"},
    {name: "Sunry的窝", url: "https://www.sunry.top/", thumbnail: "/case/1733797056676.jpg"},
    {name: "Matuto的博客", url: "https://www.majingzhen.com/", thumbnail: "/case/1733797481309.jpg"}
]);

function toUrl(url) {
    window.open(url, '_blank');
}
</script>

<style>
.customContent{
    width: 100%;
    overflow-x: hidden;
}

.case .caseHeader h2{
    margin: 15px 0 ;
    border: none!important;
    letter-spacing: -0.02em;
    line-height: 32px;
    font-size: 26px;
}
.case .caseHeader p{
    margin: 0;
}
.case .caseHeader{
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
.case .container{
    width: 65%;
    margin: auto;
}
.case .searchBox{
    margin-top: 10px;
}
.case .caseList{
    padding-top: 236px;
}

.case .pageBox{
    display: flex;
    justify-content: center;
    margin: 20px 0;
}
.case .appCard{
    width: 100%;
    height: 220px;
    margin-top: 20px;
    border-radius: 5px;
    overflow: hidden;
    border: 1px solid transparent;
    box-shadow: var(--el-box-shadow-lighter);
    cursor: pointer;
    transition: all .3s;
}
.case .appCard:hover{
    border-color: var(--el-color-primary-light-5);
    box-shadow: var(--el-box-shadow);
}
.case .appImg{
    width: 100%;
    height: 180px;
}
.case .appInfo{
    padding: 0 10px;
}
.case .appName{
    font-size: 16px;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.case .appProfile{
    font-size: 13px;
}
.case .appInfoBottom{
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    align-items: center;
}
.case .appUser{
    display: flex;
    align-items: center;
}
.case .appUserImg{
    display: block;
    width: 20px;
    height: 20px;
    background-color: var(--el-color-info-light-9);
    text-align: center;
    border-radius: 50%;
}
.case .appUserName{
    margin-left: 5px;
}
.case .appPayType{
    font-size: 12px;
    padding: 0 6px;
    height: 22px;
}
.case .imgLoading{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 35px;
}
@media screen and (max-width:1550px) {
    .case .container{
        width: 78%;
        margin: auto;
    }
}

@media screen and (max-width:900px) {
    .case .container{
        width: 85%;
        margin: auto;
    }
}

@media screen and (max-width:600px) {
    .case .container{
        width: 90%;
        margin: auto;
    }
}
</style>