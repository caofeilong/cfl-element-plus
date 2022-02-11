<template>
    this is a pure vue app  test
    <comp-a></comp-a>
    <br/>
    <br/><br/><br/>
    <comp-b></comp-b>
</template>
<script setup>
import {onMounted} from 'vue'
 onMounted(()=>{
  console.info('this is first component mouted')   
 })
</script>