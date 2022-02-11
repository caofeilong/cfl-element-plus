<template>
    <div>
        <div>高级打包方式 组件B  {{name}}</div>
        <div>ffff</div>
        <comp-a></comp-a>
    </div>
</template>
<script lang="ts" setup>
import compA  from '@/compA/compA.vue';
const name = 'compB'
</script>
<script lang="ts">
export default {
    name:'compB'
}
</script>