<template>
    <div class="header_container">

		<el-breadcrumb separator="/" class="breadcrumb">
			<el-breadcrumb-item :to="{ path: '/manage' }">首页</el-breadcrumb-item>
			<el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">{{item}}</el-breadcrumb-item>
		</el-breadcrumb>
    </div>
</template>

<script>
    export default {
    	data(){
    		return {
    	
    		}
    	},
    	created(){
    		console.log("123");
    	}
    }
</script>

<style lang="scss">
 .header_container {
    background-color: #eaedf8;
    height: 60px;
    position: fixed;
    padding-left: 20px;
    top: 0;
    width: 100%;
    left: 220px;
 }
 .breadcrumb{
   line-height: 60px;
 }

</style>