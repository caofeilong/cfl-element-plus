<template>
    这是组件库的住页面
    this is a pure vue app
    <comp-a/>
    <comp-b/>
    <button @click="clickBtn('21')"> click  button</button>
</template>
<script setup lang="ts">
import {onMounted} from 'vue'
// import compA from './compA/compA.vue'
// import compB from './compB/compB.vue'

onMounted(()=>{
  console.info('this is first component mouted typescript')   
})
function  clickBtn(user:string){
  console.info(user+ 'clickBtn')
  clickEnd('123')
}
function clickEnd(ua:string){
  console.info('bac'+ua)
}
</script>