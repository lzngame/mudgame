Ext.define('MyApp.controller.Main',{
	extend:'Ext.app.Controller',
	init:function(){
		//alert('init-main');
	},
	config:{
		refs:{
			mainview:{
				selector:'mainview',
				xtype:'mainview',
				autoCreate:true
			},
			AboutButton:'#AboutButton'
		},
		control:{
			AboutButton:{
				tap:'showAboutView'
			}
		},
		routes:{
			'main':'showMainView',
			'products/:id':'showInfoById',
			'products/:id/:code':'showInfoByIdAndCode'
		},
		
	},
	showAboutView:function(){
		//
		this.redirectTo('about');
		
	},
	showInfoById:function(id){
		alert(id);
		Ext.Viewport.setActiveItem(this.getMainview());
	},
	showInfoByIdAndCode:function(id,code){
		Ext.Msg.alert(id +":"+code);
	},
	showMainView:function(){
		alert('main');
		Ext.Msg.alert('method in main view');
		Ext.Viewport.setActiveItem(this.getMainview());
	}
});
