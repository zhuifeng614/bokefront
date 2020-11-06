<template>
    <div class="header">
        <div class="content">
            <div class="logo"></div>
            <div class="navlink">
                <router-link :to="{name:item.name}" v-for="(item,index) in navList" :key="index">
                    {{item.linkName}}
                </router-link>
                <a-button type="primary" class="login"  @click="handLogin">登录</a-button>
                <a-button type="primary" class="register" @click="handRegister">注册</a-button>
            </div>
        </div>
        <LoginModal/>
    </div>
</template>

<script lang="ts">
import {defineComponent,reactive,toRefs,provide} from "vue"
// import { HomeOutlined,} from '@ant-design/icons-vue'
import LoginModal from "@/components/modals/loginModal.vue"
export default defineComponent({
    name:"header",
    components:{ LoginModal},
    setup(){
        const state = reactive({
            navList:[
                {
                    name:"Welcome",
                    linkName:"首页"  
                },
                {
                    name:"Articles",
                    linkName:"文章"  
                },
                {
                    name:"Classify",
                    linkName:"归档"  
                },
                {
                    name:"Project",
                    linkName:"项目"  
                },
                {
                    name:"Course",
                    linkName:"历程"  
                },
                {
                    name:"Leaveword",
                    linkName:"留言"  
                },
                {
                    name:"About",
                    linkName:"关于"  
                }
            ],
        })
        const handLogin = ()=>{
            console.log("login")
        }
        const handRegister = ()=>{
            console.log("register")
        }
        provide("mesg",{name:"11111"})
        return {
            ...toRefs(state),
            handLogin,
            handRegister
        }
    }
})
</script>

<style lang="less" scoped>
.header{
    width: 100%;
    min-width: 1290px;
    height: 80px;
    position: fixed;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #eee;
    background-color: #fff;
    .content{
        display: flex;
        flex-direction: row;
        width: 1220px;
        height: 100%;
        background-color: #fff;
        .logo{
            width: 80px;
            height: 80px;
            background: url("~@/assets/logo.png") no-repeat;
            background-size: 100%;
        }
        .navlink{
            position: relative;
            width: 90%;
            height: 80px;
            margin-left: 5%;
            .router-link-active{
                color:  #409EFF;
                border-bottom: 2px solid #409EFF;
            }
            a{
                display: inline-block;
                width: 68px;
                text-align: center;
                line-height: 80px;
                color: #333;
                font-weight: 600;
            }
            .login{
                width: 56px;
                height: 32px;
                position: absolute;
                top: 25%;
                right: 130px;
            }
            .register{

                width: 56px;
                height: 32px;
                position: absolute;
                top: 25%;
                right: 50px;
            }
        }
    }
}
</style>