<template>
	<div class="addrouter">
		<h1>动态添加路由</h1>
		<router-link to="/r1">r1		</router-link>
		<router-link to="/r2">	12	</router-link>
		{{name}}

	</div>
</template>
<script type="text/javascript">

	export default {
		data (){
			return {
				name:'换一个'
			}
		},
		mounted (){
			console.log(resolve => require(['@/components/Hello'],resolve))


			this.$router.addRoutes([
					{
						path:'/r1',
						component: resolve => require(['@/components/r1'],resolve)
					},
					{
						path:'/r2',
						component: resolve => require(['@/components/r2'],resolve)
					}
				])
		}
	}
</script>
<style type="text/css" scoped>
	h1{
		font-size:16px;
		font-weight:100;
	}
</style>
