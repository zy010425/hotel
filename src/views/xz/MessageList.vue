<template>
  <div>
   
    <div v-for="(item,i) in rows" :key="i" class="row py-2 border-bottom-2 border border-secondary">
      <!-- 1左侧1个图片 -->
      <div class="col-4">
        <img :src="require(`@/assets/img/${item.img}`)" width="100" height="100" class="rounded" />
      </div>
      <!-- 2中间标题和子标题 -->
      <div class="col-6 text-left text-truncate">
        <div class="font-weight-bold">{{item.title}}</div>
        <div class="text-muted">{{item.subtitle}}</div>
      </div>
      <!-- 3时间 -->
      <div class="col-4 px-0">{{item.time}}</div>
    </div>
  </div>
</template>

<script>
//引入json文件->js object   list就是一个js对象
import list from "@/assets/json/messagelist.json";

export default { 
    data(){
      return {      
        rows:list.data,//微信消息列表数据，来源是json文件
      }
    },    
}

</script>

<style scoped>
</style>