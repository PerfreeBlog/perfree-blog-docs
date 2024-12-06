<template>
    <div class="customContent">
        <div class="appstore">
            <div class="appstoreHeader">
                <h2>主题仓库</h2>
                <p>收录了目前PerfreeBlog支持的主题,更多主题持续更新中...</p>
                <p>主题投递邮箱<el-text class="mx-1" type="primary"> perfree@126.com</el-text> </p>
            </div>
       
            <div class="appstoreList container">
                <div style="position: relative;" v-loading="loading">
                    <el-row :gutter="20" style="margin-bottom: 10px;">
                    <el-col  :xs="24" :sm="12" :md="8" :lg="6" :xl="6" v-for="app in appList">
                        <div class="appCard" @click="toApp(app)">
                            <el-image :src="app.thumbnail" :fit="'cover'" class="appImg">
                                <template #placeholder>
                                    <div class="imgLoading">
                                        <el-icon class="is-loading"><Loading /></el-icon>
                                    </div>
                                </template>
                            </el-image>
                            <div class="appInfo">
                                <div class="appName">
                                    {{ app.appName }}
                                </div>
                                <div class="appInfoBottom">
                                    <div class="appUser">
                                        <span class="appUserImg"><el-icon><User /></el-icon></span>
                                        <span class="appUserName">{{ app.appAuthor }}</span>
                                    </div>

                                    <el-tag type="primary" class="appPayType" v-if="app.payType === 0">免费</el-tag>
                                    <el-tag type="danger" class="appPayType" v-if="app.payType === 1">付费</el-tag>
                                </div>
                            </div>
                        </div>
                    </el-col>
                </el-row>

                <div class="pageBox">
                    <el-pagination background layout="prev, pager, next" :total="searchParam.total" 
                    v-model:current-page="searchParam.pageNo"
                    v-model:page-size="searchParam.pageSize" @size-change="initPage"  @current-change="initPage" />
                </div>
                </div>
               
            </div>
     
        </div>
    </div>
    
</template>

<script setup>
import {appstorePageApi} from "../api/appstore.js";
import {reactive, ref,onMounted} from "vue";
import { User, Search ,Loading} from '@element-plus/icons-vue'

const searchParam = ref({
  pageNo: 1,
  pageSize: 8,
  total: 0,
  type: 0
});
let appList = ref([]);
let loading = ref(false);



// 初始化分页
function initPage() {
    loading.value = true;
    appstorePageApi(searchParam.value).then(res => {
        if(res.code === 200) {
            appList.value = res.data.list;
            searchParam.value.total = res.data.total;
        } else {
            ElMessage.error(res.msg);
        }
        loading.value = false;
    })
}

function toApp(app) {
    window.open(`/theme/detail.html?id=${app.id}`, '_blank');
}

onMounted(()=> {
    initPage();
})

</script>

<style>
.customContent{
    width: 100%;
    overflow-x: hidden;
}

.appstore .appstoreHeader h2{
    margin: 15px 0 ;
    border: none!important;
    letter-spacing: -0.02em;
    line-height: 32px;
    font-size: 26px;
}
.appstore .appstoreHeader p{
    margin: 0;
}
.appstore .appstoreHeader{
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
.appstore .container{
    width: 65%;
    margin: auto;
}
.appstore .searchBox{
    margin-top: 10px;
}
.appstore .appstoreList{
    padding-top: 236px;
}

.appstore .pageBox{
    display: flex;
    justify-content: center;
    margin: 20px 0;
}
.appstore .appCard{
    width: 100%;
    height: 249px;
    margin-top: 20px;
    border-radius: 5px;
    overflow: hidden;
    border: 1px solid transparent;
    box-shadow: var(--el-box-shadow-lighter);
    cursor: pointer;
    transition: all .3s;
}
.appstore .appCard:hover{
    border-color: var(--el-color-primary-light-5);
    box-shadow: var(--el-box-shadow);
}
.appstore .appImg{
    width: 100%;
    height: 180px;
}
.appstore .appInfo{
    padding: 0 10px;
}
.appstore .appName{
    font-size: 16px;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 3px;
}
.appstore .appProfile{
    font-size: 13px;
}
.appstore .appInfoBottom{
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    align-items: center;
}
.appstore .appUser{
    display: flex;
    align-items: center;
}
.appstore .appUserImg{
    display: block;
    width: 20px;
    height: 20px;
    background-color: var(--el-color-info-light-9);
    text-align: center;
    border-radius: 50%;
}
.appstore .appUserName{
    margin-left: 5px;
}
.appstore .appPayType{
    font-size: 12px;
    padding: 0 6px;
    height: 22px;
}
.appstore .imgLoading{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 35px;
}
@media screen and (max-width:1550px) {
    .appstore .container{
        width: 78%;
        margin: auto;
    }
}

@media screen and (max-width:900px) {
    .appstore .container{
        width: 85%;
        margin: auto;
    }
}

@media screen and (max-width:600px) {
    .appstore .container{
        width: 90%;
        margin: auto;
    }
}
</style>