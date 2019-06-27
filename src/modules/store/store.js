import axios from 'axios';

const state={
		quotes:''
};

const getters={
	getquotes:state=>state.quotes
};

const actions={
	async getquote({commit}){
		const quot= await axios.get('http://quotes.rest/qod.json');
		commit('getquotes',quot.data.contents)
	}
};

const mutations={
getquotes:(state,data)=>state.quotes=data
};

export default {
	state,
	getters,
	actions,
	mutations
}