<template>
  <div>
    <!-- 学子商城的一些功能实现.... -->

    <div class="page-title" color="#17a2b8">
      <h3>填写订单</h3>
    </div>

    <div class="form-group">
      <label>
        房间类型
        <span class="text-danger">*</span>
      </label>
      
      <select class="form-control" name="room_spec" v-model="room_spec">
        <option value="0">- 请选择 -</option>
        <option value="标准房">标准房</option>
        <option value="商务房">商务房</option>
        <option value="豪华房">豪华房</option>
        <option value="精品房">精品房</option>
      </select>
    </div>
    <div class="form-group">
      <label>
        房间数量
        <span class="text-danger">*</span>
      </label>
      <select class="form-control" name="count" v-model="count">
        <option value="0">- 请选择 -</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="more">更多，请提前与酒店联系</option>
      </select>
    </div>
    <div class="form-group">
      <label>
        您的姓名
        <span class="text-danger">*</span>
      </label>
      <input type="text" class="form-control" name="uname" v-model="uname" />
    </div>
    <div class="form-group">
      <label>
        您的性别
        <span class="text-danger">*</span>
      </label>
      <select class="form-control" name="gender" v-model="gender">
        <option value="0">- 请选择 -</option>
        <option value="Male">男士</option>
        <option value="Female">女士</option>
      </select>
    </div>

    <div class="form-group">
      <label>
        邮箱地址
        <span class="text-danger">*</span>
      </label>
      <input type="text" value="info@exampal.com" class="form-control" name="email" v-model="email" />
    </div>

    <div class="form-group">
      <label>
        入住时间
        <span class="text-danger">*</span>
      </label>
      <input type="text" id="datepickerdob" class="form-control" name="live_time" v-model="live_time" />
    </div>
    <div class="form-group">
      <label>
        居住天数
        <span class="text-danger">*</span>
      </label>
      <select class="form-control" name="live_day" v-model="live_day">
        <option value="0">- 请选择 -</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="2">3</option>
        <option value="2">4</option>
        <option value="2">更多，请提前与酒店联系</option>
      </select>
    </div>
    <div class="form-group">
      <label>
        电话号码
        <span class="text-danger">*</span>
      </label>
      <input type="text" class="form-control" value="1234567899" name="phone" v-model="phone"/>
    </div>
    <mt-button type="primary" @click="order">确认订购</mt-button>
  </div>
</template>

<script>
 import {order} from "@/assets/js/apis/cart.js" //导入接口
export default {
    data(){
        return {
            room_spec:"",
            count:"",
            uname:"",
            gender:"",
            live_time:"",
            live_day:"",
            email:"",
            phone:"",
          
        }
    },
    methods:{
        async order(){
            var room_spec = this.room_spec;
            var count = this.count;
            var uname = this.uname;
            var gender = this.gender;
            var live_time = this.live_time;
            var live_day = this.live_day;
            var email = this.email;       
            var phone = this.phone;
          
           
         
            
            var cart={room_spec,count,uname,gender,live_time,live_day,email,phone,};
            this.$indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            });
            console.log(cart)

            let result = await order(cart);
            // console.log(result)
            this.$indicator.close();
            //console.log(result); //仅仅是测试看看返回是一个什么样数据
            if(result.code==200)
            {   //登录成功，跳转到登录
                this.$router.push("/login");
            }else{
                this.$messagebox("错误",result.msg)
            }
        }
    }
}
</script>

<style>
</style>