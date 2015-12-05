Ext.require('Ext.TitleBar');
Ext.application({
	name:'app',
	launch:function(){
		var mytitlebar = Ext.create('Ext.TitleBar',{
			id:'mytitlebar',
			title:'My Title',
			items:[
				{
					text:' One'
				},
				{
					text:'TwoButon',
					align:'right'
				}
			]
		});
		
		var mypanel = Ext.create('Ext.Panel',{
			id:'mypanel',
			items:[mytitlebar],
			html:'Panel'
		});
		
		Ext.Viewport.add(mypanel);
	}
})

