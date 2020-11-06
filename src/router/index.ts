import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: "/welcome"
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: () => import('@/views/welcome/Welcome.vue')
  },
  {
    path: '/home',
    name: 'Home',
    redirect: "/articles",//有点问题暂时未处理
    component: () => import('@/views/home/Home.vue'),
    children:[
      {
        path: "articles", //文章
        name: "Articles",
        component: ()=> import('@/views/articles/Articles.vue')
      },
      {
        path: "classify", //归档
        name: "Classify",
        component: ()=> import("@/views/classify/Classify.vue"),
        children:[
          {
            path: "summary", //归档查看全文
            name: "Summary",
            component: ()=> import("@/views/summary/Summary.vue")
          }
        ]
      },
      {
        path: "project", //项目
        name: "Project",
        component:()=> import("@/views/project/Project.vue")
      },
      {
        path: "course", //历程
        name: "Course",
        component: ()=> import("@/views/course/Course.vue")
      },
      {
        path: "leaveword", //留言
        name: "Leaveword",
        component: ()=> import("@/views/leaveword/Leaveword.vue")
      },
      {
        path: "about", //关于
        name: "About",
        component: ()=> import("@/views/about/About.vue"),
        children: [
          {
            path: "bokesynopsi",
            name: "bokesynopsi",
            component: ()=> import("@/views/bokesynopsi/Bokesynopsi.vue"),
          },
          {
            path: "writersynopsi",
            name: "writersynopsi",
            component: ()=> import("@/views/writersynopsi/Writersynopsi.vue"),
          }
        ]
      },
    ]
  },
]

export default createRouter({
  linkActiveClass:'router-link-active',
  history: createWebHashHistory(),
  routes,
})

