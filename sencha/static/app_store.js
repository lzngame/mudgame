Ext.define('User',{
	extend:'Ext.dta.Model',
	config:{
		fields:[
			{name:'name',type:'string'},
			{name:'sex',type:'auto'},
			{name:'age',type:'int'},
			{name:'alive',type:'booleand',defaultValue:true}
		]
	},
	changeName:function(){
		Ext.Msg.alert('ok');
	}
});

var user = Ext.create('User',{
	name:'Jhon',
	sex:'female',
	age:30,
	alive:false,
});

user.changeName();
