<template>
  <div class="container px-2">
    <div>
      <mt-swipe :auto="4000"  style="height:250px;margin-top:0px; ">
        <mt-swipe-item v-for="(item,i) in imgList" :key="i">
          <img :src="`${baseURL}/${item.img}`" width="100%" height="100%">
        </mt-swipe-item>        
      </mt-swipe>
    </div>
    <h5>商品推荐</h5>
   
  <div class="row p-3 d-flex flex-warp justify-content-between">  
        <img src="../img/popular-hotel/2.jpg" style="width:46%;border-radius:8px" class="border m-2 p-2">
        <img src="../img/popular-hotel/3.jpg" style="width:46%;border-radius:8px" class="border m-2 p-2">
        <img src="../img/popular-hotel/4.jpg" style="width:46%;border-radius:8px" class="border m-2 p-2">
        <img src="../img/popular-hotel/5.jpg" style="width:46%;border-radius:8px" class="border m-2 p-2">    
    </div>

    <p class="text-muted border-bottom font-italic pb-3">-----新房间上架-----</p>
       <div class="row  d-flex flex-warp justify-content-center">  
        <img src="../img/rooms/img-thum-01.jpg" style="width:80%;height:200px;border-radius:10px" class="border">  
    </div> 
    <p class="text-muted border-bottom font-italic pb-3">-----销售TOP-----</p>
   <div class="row d-flex flex-warp justify-content-center" >  
        <img src="../img/bg/side-about-bg.jpg" style="width:80%;height:200px;border-radius:10px" class="border">
       
  
    </div>

    <router-link to="/messagelist"> <p class="text-muted border-bottom font-italic pb-4">我们的团队</p></router-link>
     <div class="row p-1 d-flex flex-warp justify-content-between">  
        <img src="..\img\team\3.jpg" style="width:30%;border-radius:6px" class="border m-1 p-1">
        <img src="..\img\team\4.jpg" style="width:30%;border-radius:6px" class="border m-1 p-1">
        <img src="..\img\team\5.jpg" style="width:30%;border-radius:6px" class="border m-1 p-1">
      
    </div>
  </div>
</template>

<script>

import {getCarouselList} from "@/assets/js/apis/index.js" //导入接口
import {baseURL} from "@/assets/js/apis/product.js" //导入接口

export default {  
  data(){
    return {
        imgList:[],
        baseURL:baseURL,
         list:[],//保存服务器返回的商品列表数据
      pno:0,//当前页码
      pageSize:2,//每页个数
    }
  },  
  created(){
    this.loadCarouselList();
  },
  methods:{
    async loadCarouselList(){
      let result= await getCarouselList();
      console.log(result);
      this.imgList = result;
    }
  },

  components:{
  },
 
};
</script>
<style scoped>
.swiper {
  margin-top: 1px;
  height: 15rem;
}
img {
  width: 90%;
  height: 15rem;
}
</style>