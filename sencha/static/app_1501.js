Ext.define('MyApp.panels.tmpPanel',{
	extend:'Ext.Panel',
	config:{
		data:{
			bookname:'TeachTile'
		},
		tpl:[
			'<tpl><h1>{bookname}</h1></tpl>'
		],
		updateData:function(data){
			console.log('custom method');
		}
	}
});

Ext.application({
	name:'app',
	launch:function(){
		var tmpData ={
			bookname:'《HTML Sencha Touch》'
		};
				
		var mytoolbar = Ext.create('Ext.Toolbar',{
			docked:'top',
			items:[
				{
					ui:'action',
					text:'clickme',
					handler:function(){
						tmpPanel.updateData(null);
					}
				}
			]
		});
		
		var tmpPanel = new MyApp.panels.tmpPanel({
			data:tmpData,
			items:mytoolbar
		});
		
		
		
		Ext.Viewport.add(tmpPanel);
	}
});
