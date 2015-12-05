Ext.require(['Ext.data.Store','Ext.dataview.DataView']);
Ext.application({
	name:'app',
	launch:function(){
		var calcData = function(){
			var data = [];
			var item = {};
			for (var i=0;i<30;i++){
				var r = Math.floor(Math.random()*255);
				var g = Math.floor(Math.random()*255);
				var b = Math.floor(Math.random()*255);
				item = {
					id:i,
					rgb:Ext.util.Format.format('rgb({0},{1},{2})',r,g,b)
				};
				data[i]= item;
			}
			return data;
		};
		
		var initData = calcData();
		var store = Ext.create('Ext.data.Store',{
			data:initData,
			fields:['id','rgb'],
			sorters:'rgb'
		});
		
		var tpl = new Ext.XTemplate(
			'<tpl for=".">',
			'<div class="paul">',
			'<div>',
			'<div style="background:{rgb};width:100%;height:15px;">',
			'<h4>{rgb}</h4>',
			'<div>',
			'</div>',
			'</div>',
			'</tpl>'
		);
		
		var mytoolbar = Ext.create('Ext.Toolbar',{
			docked:'top',
			items:[
				{
					text:'click',
					handler:function(){
						var newData = calcData();
						store.setData(newData);
					}
				}
			]
		});
		
		var mypanel = Ext.create('Ext.Panel',{
			id:'mypanel',
			items:[
				mytoolbar,
				{
					xtype:'dataview',
					itemTpl:tpl,
					store:store,
					height:350,
					listeners:{
						itemsingletap:function(dataview,index,item,record,e){
							Ext.Msg.alert(store.getAt(index).get('rgb'));
						}
					}
				}
			]
		});
		
		Ext.Viewport.add(mypanel);
	}
})
