<template>
    <div class="classify">
        <div class="navBar">
            <a-tabs default-active-key="1" :tab-position="mode" class="navItem" @tabClick="gitnavKey">
                <a-tab-pane v-for="i in 20" :key="i" :tab="`20-10-9`"></a-tab-pane>
            </a-tabs>
        </div>
        <div class="leftView">
            <div class="item">
                <p class="title">今日起开始重构博客 采用es6+koa+nedb</p>
                <p class="time">2020-07-07 09:09:32</p>
                <div class="reading"><span>阅读：</span>61</div>
                <p class="synopsis">网搭建的 让阿里云服务可以连接上的 这里推荐使用 code.aliyun.com2、dockerDockerfile 必须会写 如果不会 请移步   以及我之前写的如何将代码打包成镜像   创建镜像仓库时 设置打包方式和选择分支 确保提交代码到指定分支里 自动打包3、自动更新用阿里的容器服务部署应用 找到应用 建立触发器 勾选自动化部署</p>
                <div class="fullText" @click="handSummary(11111)">阅读全文>></div>
            </div>

            <div class="item">
                <p class="title">今日起开始重构博客 采用es6+koa+nedb</p>
                <p class="time">2020-07-07 09:09:32</p>
                <div class="reading"><span>阅读：</span>61</div>
                <p class="synopsis">网搭建的 让阿里云服务可以连接上的 这里推荐使用 code.aliyun.com2、dockerDockerfile 必须会写 如果不会 请移步   以及我之前写的如何将代码打包成镜像   创建镜像仓库时 设置打包方式和选择分支 确保提交代码到指定分支里 自动打包3、自动更新用阿里的容器服务部署应用 找到应用 建立触发器 勾选自动化部署</p>
                <div class="fullText">阅读全文>></div>
            </div>

             <div class="item">
                <p class="title">今日起开始重构博客 采用es6+koa+nedb</p>
                <p class="time">2020-07-07 09:09:32</p>
                <div class="reading"><span>阅读：</span>61</div>
                <p class="synopsis">网搭建的 让阿里云服务可以连接上的 这里推荐使用 code.aliyun.com2、dockerDockerfile 必须会写 如果不会 请移步   以及我之前写的如何将代码打包成镜像   创建镜像仓库时 设置打包方式和选择分支 确保提交代码到指定分支里 自动打包3、自动更新用阿里的容器服务部署应用 找到应用 建立触发器 勾选自动化部署</p>
                <div class="fullText">阅读全文>></div>
            </div>

             <div class="item">
                <p class="title">今日起开始重构博客 采用es6+koa+nedb</p>
                <p class="time">2020-07-07 09:09:32</p>
                <div class="reading"><span>阅读：</span>61</div>
                <p class="synopsis">网搭建的 让阿里云服务可以连接上的 这里推荐使用 code.aliyun.com2、dockerDockerfile 必须会写 如果不会 请移步   以及我之前写的如何将代码打包成镜像   创建镜像仓库时 设置打包方式和选择分支 确保提交代码到指定分支里 自动打包3、自动更新用阿里的容器服务部署应用 找到应用 建立触发器 勾选自动化部署</p>
                <div class="fullText">阅读全文>></div>
            </div>

             <div class="item">
                <p class="title">今日起开始重构博客 采用es6+koa+nedb</p>
                <p class="time">2020-07-07 09:09:32</p>
                <div class="reading"><span>阅读：</span>61</div>
                <p class="synopsis">网搭建的 让阿里云服务可以连接上的 这里推荐使用 code.aliyun.com2、dockerDockerfile 必须会写 如果不会 请移步   以及我之前写的如何将代码打包成镜像   创建镜像仓库时 设置打包方式和选择分支 确保提交代码到指定分支里 自动打包3、自动更新用阿里的容器服务部署应用 找到应用 建立触发器 勾选自动化部署</p>
                <div class="fullText">阅读全文>></div>
            </div>

             <div class="item">
                <p class="title">今日起开始重构博客 采用es6+koa+nedb</p>
                <p class="time">2020-07-07 09:09:32</p>
                <div class="reading"><span>阅读：</span>61</div>
                <p class="synopsis">网搭建的 让阿里云服务可以连接上的 这里推荐使用 code.aliyun.com2、dockerDockerfile 必须会写 如果不会 请移步   以及我之前写的如何将代码打包成镜像   创建镜像仓库时 设置打包方式和选择分支 确保提交代码到指定分支里 自动打包3、自动更新用阿里的容器服务部署应用 找到应用 建立触发器 勾选自动化部署</p>
                <div class="fullText">阅读全文>></div>
            </div>
<!-- http://www.zouzhiqiang.com/daohang/ -->
        </div>
        <div class="rightView">
            <div class="recommend">
                <p class="commendText">推荐文章</p>
                <div class="item">
                    <div class="title">
                        <p>【高级前端工程师必须掌握的东西,高级前端工程师必须掌握的东西】</p>
                        <p>
                            <span>点赞 1220 </span>
                            <span>评论 1015</span>
                        </p>
                    </div>
                    <div class="textImg"></div>
                </div>

                <div class="item">
                    <div class="title">
                        <p>【高级前端工程师必须掌握的东西,高级前端工程师必须掌握的东西】</p>
                        <p>
                            <span>点赞 1220 </span>
                            <span>评论 1015</span>
                        </p>
                    </div>
                    <div class="textImg"></div>
                </div>

                <div class="item">
                    <div class="title">
                        <p>【高级前端工程师必须掌握的东西,高级前端工程师必须掌握的东西】</p>
                        <p>
                            <span>点赞 1220 </span>
                            <span>评论 1015</span>
                        </p>
                    </div>
                    <div class="textImg"></div>
                </div>
            </div>

            <div class="attention">
                <span>热文搜索:</span>
                <a-input placeholder="请输入" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent,reactive,toRefs, } from 'vue'
import { useRouter,RouteMeta } from "vue-router"
export default defineComponent({
    name: "Classify",
    setup(props){
        console.log(props)
        const state = reactive({
            mode:"left",
        })
        const router = useRouter()
        const handSummary = (essayId: number)=>{
            
            router.push({ name: 'Summary', params:{essayId}})
        }
        const gitnavKey = (index: number) =>{
            console.log(index)
        }
        return{
            ...toRefs(state),
            handSummary,
            gitnavKey
        }
    }
})
</script>

<style lang="less">
.classify{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    .navBar{
        position: fixed;
        top: 100px;
        height: 400px;
        margin-top: 30px;
        margin-right: 2%;
        .navItem{
            width: 100px;
            height: 400px;
         }
    }
    .leftView{
        flex: 60%;
        margin-left: 13%;
        .item{
            width: 100%;
            height: 200px;
            margin-top: 30px;
            border-bottom: 1px solid #eee;
            .title{
                font-size: 20px;
                color: #428BCA;
                font-weight: 400;
                margin-bottom: 10px;
            }
            .time{
                font-size: 14px;
                color: #333;
            }
            .reading{
                color: #428BCA;
                span{
                    color: #333;
                }
            }
            .synopsis{
                width: 100%;
                height: 62px;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 5;
                overflow: hidden;
            }
            .fullText{
                width: 77px;
                color: #428bca;
                font-size: 14px;
                cursor:pointer;
                &:active{
                    box-shadow: 1px 0px 1px #888;
                }
            }
        }
    }
    .rightView{
        flex: 30%;
        .recommend{
            width: 250px;
            margin-left: 50px;
            margin-top: 30px;
            background-color: #F4F5F5;
            .commendText{
                height: 40px;
                margin-left: 10px;
                line-height: 40px;
                border-bottom: 1px solid hsla(0,0%,59.2%,.1);
                color: #2e3135;
                font-weight: 600;
            }
            .item{
                width: 90%;
                height: 100px;
                margin: 0 auto;
                border-bottom: 1px solid hsla(0,0%,59.2%,.1);
                display: flex;
                flex-direction: row;
                align-items: center;
                .title{
                    width: 130px;
                    margin-right: 15px;
                    &>p:nth-child(1){
                        height: 50px;
                        font-size: 12px;
                        margin-bottom: 10px;
                    }
                    &>p:nth-child(2){
                        font-size: 12px;
                    }
                }
                .textImg{
                    width: 77px;
                    height: 77px;
                    border-radius: 4px;
                    background-color: bisque;
                }
            }
        }
        .attention{
            width: 250px;
            height: 40px;
            margin-left: 50px;
            margin-top: 30px;
            background-color: #F4F5F5;
            padding: 0 10px;
            line-height: 40px;
            span{
                font-size: 14px;
                color: #2e3135;
                font-weight: 600;;
            }
            input{
                width: 160px;
                margin-left: 10px;
            }
        }

    }

}
</style>