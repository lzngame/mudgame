Ext.application({
	name:'app',
	launch:function(){
		
		var toolbar1 = Ext.create('Ext.Toolbar',{
			docked:'top',
			items:[
				{
					xtype:'searchfield',
					id:'search',
					placeHolder:'Please Input Your Name:',
					width:200
				},
				{
					text:'Search',
					handler:function(){
						
					}
				}
			]
		});
		
		var toolbar2 = Ext.create('Ext.Toolbar',{
			docked:'bottom',
			items:[
				{
					text:'submit',
					handler:function(){
						
					}
				},
				{
					text:'delete',
					handler:function(){
						
					}
				},
				{
					text:'forbid'
				}
			]
		});
		
		var formpanel = Ext.create('Ext.form.Panel',{
			id:'formpanel',
			scrollable:'vertical',
			url:'postuser',
			items:[
				toolbar1,toolbar2
			]
		});
		
		Ext.Viewport.add(formpanel);
	}
});
