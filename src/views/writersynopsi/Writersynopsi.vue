<template>
    <div class="writersynopsi">
        <div class="headerText">
            <span>关于作者</span>
        </div>
        <div class="content">
            <p class="aboutwriter">About The Author</p>
            <img v-for="(item,index) in imgs" :key="index" :src="item" class="backImg" v-show="nub == index">
            <p>人的一生是在学习中度过，在追求中获得生存。学习的过程，就是探索，研究的过程，从不了解到了解，从无知到掌握，到灵活运用，在不断的学习中加深认识的过程。</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent,reactive,toRefs,onMounted,onUnmounted } from 'vue'

export default defineComponent({
    name:"Writersynopsi",
    setup(){
        let timer = 0
        const state = reactive({
            nub:1,
            imgs:[
                require("@/assets/imgs/v1.jpg"),
                require("@/assets/imgs/v2.jpg")
            ]
        })
        const rotate = ()=>{
            clearInterval(timer)
            timer = setInterval(()=>{
                state.nub++
                state.nub >= state.imgs.length? state.nub = 0 : true
            },10000)
        }
        onMounted(()=>{
            rotate()
        })
        onUnmounted(()=>{
            clearInterval(timer)
        })
        return{
            ...toRefs(state),
        }
    }

})
</script>

<style lang="less" scoped>
.writersynopsi{
    .headerText{
        height: 80px;
        padding: 0 60px;
        line-height: 80px;
        font-size: 20px;
        font-weight: 400;
        color: #333;
        border-bottom: 1px solid #e5e5e5;
    }
    .content{
        height: calc(100% - 80px);
        padding: 0 60px;
        .aboutwriter{
            font-size: 16px;
            color: #333;
            margin: 20px 0;
        }
        .backImg{
            width: 100%;
            height: 350px;
            margin-bottom: 20px;
            border-radius: 5px;
        }
        p{
            font-size: 14px;
            width: 100%;
            margin-bottom: 50px;
        }
    }
}
</style>