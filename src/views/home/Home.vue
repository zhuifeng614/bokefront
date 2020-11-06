<template>
    <div class="home">
        <Header/>
        <div class="viewContent">
             <router-view class="viewrouter"/>
         </div>
        <div class="foot">全栈修炼 ©2020 时光正好，未来加油</div>
    </div>
</template>

<script lang="ts">
import {defineComponent,} from "vue"
import Header from "@/components/header/header.vue"

export default defineComponent({
    name: "Home",
    components:{Header},
})
</script>

<style lang="less">
.home{
    width: 100%;
    min-width: 1220px;
    height: 100%;
    &::before{
        // 解决高度重叠
        content:"";
        display:table;
    }
    .viewContent{
        margin-top: 80px;
        width: 100%;
        display: flex;
        justify-content: center;
        background-color: #F1F1F1;
        .viewrouter{
            width: 1220px;
            min-height: calc(100vh - 80px);
        }
    }
    .foot{
        width: 100%;
        text-align: center;
        color: #333;
        font-weight: 400;
    }
}
</style>