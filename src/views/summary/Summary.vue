<template>
    <div class="summary">
        summary
    </div>
</template>

<script lang="ts">
import {defineComponent,onMounted} from 'vue'
import { useRoute } from "vue-router"
export default defineComponent({
    name: "summary",
    setup(){
        const route = useRoute()
        onMounted(()=>{
            console.log(route.params,"将来会传递文章id")
        })

        return{
            onMounted
        }
    }
})
</script>

<style lang="less">

</style>