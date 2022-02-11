需求
写一个简单的组件库
实现的功能
1. 按需加载
2. 使用nomorepo
3. 使用ts
4. 使用vue3
5. 使用vite
6. 加单元测试
7. 加E2E测试
8. 加demo  [done]




## pnpm  nomorepo

https://zhuanlan.zhihu.com/p/373935751

1. 创建  pnpm-workspace.yaml 文件
2. pnpm install xxx -w 在root下安装
3. pnpm install xxx   -r --filter  @xx  安装到指定包内

## 创建项目

```bash
npm init
pnpm install vue@next
```

## 配置Eslint & typescript

```
npx vue ui
```
全局安装 vue-cli-server

```
npm install -g @vue/cli-service-global
```

https://cli.vuejs.org/zh/guide/plugins-and-presets.html#%E6%8F%92%E4%BB%B6

[参考地址](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript)



## Q&A

1. @vue/compiler-sfc 是什么？
   如果你是从 Vue 2 过渡而来的，请注意 @vue/compiler-sfc 替换掉了 vue-template-compiler





## Q
1. 为什么要有 .mjs 和 .js 两套？
2. 按需加载到的是什么原理，是什么时候打包的为什么这里面还有 require 的代码？
3. *.d.ts 怎么生成的 具体干什么的？
4. 版本管理怎么做的，和leaner的区别 ？
5. webpack rollup  vite 打包的区别是什么？
6. 如何对项目进行分包优化？
7. 什么是unplugin unplugin-vue-components  unplugin-auto-import 这俩是干啥的 原理是啥？
8. vite build 原理 ？
9. 怎么才能让你的组件库实现 tree sharking 按需加载

## 其他的 Q
1. 了解一下webpack5的新特性
2. 了解一下vue3的新特性
3. 了解一下http的知识


## 聚焦 tree sharking
1. 组件如何实现 tree sharking



首先吧没有用的变量标记出来，然后在吧没有用 的代码删掉，什么是没有用的代码就是没有副作用的代码，什么是没有副作用，就是一个函数的内部不会对函数的外部产生影响。


## element 如何实现按需加载的
babel-plugin-component
unplugin-vue-components


## element-plus 如何实现按需加载的


什么是unplugin


unplugin-auto-import


babel 学习 ？


npm pack 