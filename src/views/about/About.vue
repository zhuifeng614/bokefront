<template>
    <div class="about">
        <div class="navtab">
            <router-link :to="{name:item.name}" v-for="(item,index) in navList" :key="index">{{item.linkName}}</router-link>
        </div>
        <div class="rightView">
            <router-view />
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent,reactive,toRefs} from 'vue'


export default defineComponent({
    name: "About",
    setup(){
        const state = reactive({
            navList:[
                {
                    name:"bokesynopsi",
                    linkName:"关于博客"  
                },
                {
                    name:"writersynopsi",
                    linkName:"关于作者"  
                },
            ]
        })

        return{
            ...toRefs(state),
        }
    }
})
</script>

<style lang="less" scoped>
.about{
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    .navtab{
       width: 15%;
       height: 100px;
       margin-right: 2%;
       background-color: #fff;
       .router-link-active{
            color: #fff;
            background-color: #409EFF;
        }
       a{
            display: block;
            height: 50px;
            line-height: 50px;
            text-align: center;
        }
    }
    .rightView{
        width: 83%;
        margin-bottom: 10px;
        background-color: #fff;
    }
}
</style>