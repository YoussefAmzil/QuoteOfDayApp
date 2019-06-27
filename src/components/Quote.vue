<template>
	<div class="sbody" :style="{ backgroundImage: 'url(' + require('@/assets/quot.png') + ')' }">
			<div class="container">
		<div class="contain">
	
			<div class="inp">
				<center>
					<button class="btn btn-success " type="button" style="width: 250px;" @click="getit">Quote of the day</button>
				</center>
				
      
			</div>
			<!-- <div v-for="quote in getquotes.quotes">
				{{quote.quote}}
			</div> -->
			<div class="q">
				<center>
					<!-- <h5 >{{getquote.quotes}}</h5> -->
				</center>
			</div>

			<center>
				"author"
			</center>
				
			
		</div>
	</div>
	</div>
</template>

<style>
.q{
	padding: 10px;
	margin-top: 20px;
	border: solid #f2fbfc 1px ;
	border-radius: 5px;
	
}
	.contain{
		background-color: white;
		border: solid #f2fbfc 1px ;
		margin-top: 6%;
		float: left;
		margin-left: 15%;
		width: 800px;
		height: 300px;
		margin-bottom: 10%;
		border-radius: 5px;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		opacity: 0.9;
	}

	.inp{
		/*margin-top: 10px;*/
		padding: 15px;
	}
	.sbody{
		/*background-color: #45d3e0;*/
		background-image: url('~@/assets/quot.png');
	}
</style>

<script>
import {mapActions,mapGetters} from 'vuex'
	export default{
		methods:{
		...mapActions(['getquote']),
		getit(){
			this.getquote()
			console.log(getquotes.quotes.quote)
		}
		},
		computed:mapGetters(['getquotes']),
		
	}
</script>