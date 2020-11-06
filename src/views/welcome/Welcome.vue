
<template>
  <div class="welcome">
    首页<audio src="歌曲地址" controls="controls">这是个音乐播bai放区，如du果不显示，那就是你的浏览器版本太老zhi了。</audio>
  </div>
</template>

<script lang="ts">

import {defineComponent,reactive,toRefs} from "vue"
// interface Student{
//     name: string;
//     age: number;
// }
export default defineComponent({
    name:"Welcome",
    components:{
        
    },
    setup(){
        // const state = reactive({

        // })
        // return {
        //     ...toRefs(state),
        // }

    }
})
</script>

<style lang="less" scoped>

</style>
