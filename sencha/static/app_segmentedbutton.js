Ext.require('Ext.SegmentedButton');
Ext.application({
	name:'app',
	launch:function(){
		var segmentedButton = Ext.create('Ext.SegmentedButton',{
			allowMultiple:false,
			items:[
				{
					text:'ButtonOne'
				},
				{
					text:'ButtonTwo'
				},
				{
					text:'ButtonThree',
					//pressed:true
				}
			],
			listeners:{
					toggle:function(container,button,pressed){
						if(pressed)
							console.log(button.getText());
						else
							console.log("%s unpressed",button.getText());
					}
			}
		});
		
		var segmentedButton2 = Ext.create('Ext.SegmentedButton',{
			items:[
				{text:'A'},
				{xtype:'spacer',width:10},
				{text:'B',iconCls:'home',iconMask:false},
				{xtype:'spacer',width:5},
				{text:'BUG',iconCls:'btn-icon',iconAligh:'center',badgeText:'this is a badgetext'}
			]
		});
		
		var mytoolbar = Ext.create('Ext.Toolbar',{
			id:'mytoolbar',
			docked:'top',
			items:[segmentedButton],
			layout:{
				type:'hbox',
				pack:'end'
			}
		});
		
		var mypanel = Ext.create('Ext.Panel',{
			id:'mypanel',
			items:[mytoolbar,segmentedButton2],
			html:'Test SegmentedButton'
		});
		
		Ext.Viewport.add(mypanel);
		
	}
});
