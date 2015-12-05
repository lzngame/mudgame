Ext.Loader.setConfig({
	paths:{
        'app':'static/app'   
    }
});

Ext.application({
	name:'MyApp',
    appFolder:'static/app',
	requires:[
		'Ext.MessageBox'
	],
	
	controllers:['Main','About'],
	views:['Main','About'],
	launch:function(){
		Ext.Viewport.add(Ext.create('MyApp.view.Main'));
	}
});
