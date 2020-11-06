<template>
    <a-modal :visible="visible" title="Basic Modal" @ok="handLogin" @cancel="handCancel">
      <p>{{obj.name}}</p>
    </a-modal>
</template>

<script lang="ts">
import { defineComponent,provide,reactive,toRefs,inject } from 'vue'

export default defineComponent({
    name: "LoginModal",
    setup(){
        const state = reactive({
            visible:false,
            obj:inject("mesg")
        })
        const handLogin =()=>{
            // console.log("login")
        }
        const handCancel= ()=>{
            state.visible = false
        }
        return {
            ...toRefs(state),
            handLogin,
            handCancel
        }
    }
})
</script>


<style lang="less">

</style>