<template>
    <div class="writersynopsi">
        <div class="headerText">
            <span>关于作者</span>
        </div>
        <div class="content">
            <p class="aboutwriter">About The Author</p>
            <div class="backImg"></div>
            <p>人的一生是在学习中度过，在追求中获得生存。学习的过程，就是探索，研究的过程，从不了解到了解，从无知到掌握，到灵活运用，在不断的学习中加深认识的过程。</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({

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
            background: url("~@/assets/imgs/v.jpg") no-repeat;
        }
        p{
            font-size: 14px;
            width: 100%;
            margin-bottom: 50px;
        }
    }
}
</style>