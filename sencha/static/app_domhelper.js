Ext.application({
	name:'app',
	launch:function(){
		function appendDom(){
			Ext.DomHelper.append('my-div',{
				tag:'H1',
				cn:[
					{
						html:'google'
					}
				]
			});
		}
		
		function appendUi(){
			Ext.DomHelper.append('my-div',{
				id:'url-list',
				tag:'ul',
				cn:[
					{
						tag:'li',
						cn:[
							{
								tag:'a',
								html:'gooogle',
								href:'http://www.baidu.com',
								target:'_blank'
							}
						]
					},
					{
						tag:'li',
						cn:[
							{
								tag:'a',
								html:'百度',
								href:'http://www.baidu.com',
								target:'_blank'
							}
						]
					}
				]
				
			});
		}
		
		function appendUi2(){
			Ext.DomHelper.append('my-div',{
				id:'url-list',
				Ext.DomHelper.append('url-list',[
					{tag:'a',html:'A'},
					{tag:'a',html:'B'}
				]);
				
			});
		}
		
		var mytoolbar = Ext.create('Ext.Toolbar',{
			docked:'top',
			items:[
				{
					xtype:'button',
					text:'Append Element',
					handler:function(){
						//appendDom();
						appendUi2();
					}
				}
			]
		});
		
		var mypanel = Ext.create('Ext.Panel',{
			id:'mypanel',
			title:'DomHelper Append Element',
			html:'<div id="my-div"></div>',
			items:[mytoolbar]
		});
		
		Ext.Viewport.add(mypanel);
	}
});
