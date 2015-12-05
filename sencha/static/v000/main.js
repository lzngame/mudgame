Ext.require(['Ext.TabPanel','Ext.DataView','Ext.data.Store','Ext.XTemplate','Ext.Img']);

Ext.application({
	name:'main_play_tabpanel',
	launch:function(){
		var titles =['虫巢','虫群','仓库'];
		var data = [
				{name:'A',url:'#'},
				{name:'B',url:'#'},
				{name:'C',url:'#'},
				{name:'D',url:'#'},
				{name:'E',url:'#'},
				]
		
		var store = Ext.create('Ext.data.Store',{
			fields:[
				'name','url'
			],
			data:data
		});
		var tpl = new Ext.XTemplate(
			'<tpl for="."><h1>{name}</h1></tpl>'
		);
		
		
		var mydataview = Ext.create('Ext.DataView',{
			scrollable:'vertical',
			store:store,
			itemTpl:tpl,
			itemId:'dataViewId',
			baseCls:'exam-dataview',
			height:'100%'
		});
		
		var panelTpl = new Ext.XTemplate(
			'<tpl><div style="color:blue;position: relative;left: 100px;width: 10em;word-wrap:break-word;">**********************************************************************************************************************************************************************************************</span></tpl>'
		);
		
		var dataLab ={
			lab:'虫巢虫巢虫巢虫巢虫巢虫巢虫巢虫巢虫巢虫巢虫巢虫巢虫巢虫巢虫巢虫巢虫巢虫巢虫巢虫巢虫巢虫巢虫巢虫巢虫巢虫巢虫巢虫巢虫巢虫巢虫巢虫巢虫巢'
		}
		var labelTpl = new Ext.XTemplate(
			'<tpl>',
			'<h1 style="color:blue;position: relative;top:1em;left: 120px;width: 10em;word-wrap:break-word;">{lab}</h1>',
			'</tpl>'
		);
		var tplHtmlLab = labelTpl.apply(dataLab);
		
		var datainfo={
			lv:10,
			coin:23000,
			bugtype:'迅猛虫'
		};
		var tpl2 = new Ext.XTemplate(
			'<tpl>',
			'<div style="position: relative;left: 20px;top:2em">',
			'<h1>等级:{lv}</h1>',
			'<h1>虫币：{coin}</h1>',
			'<h1>种类:{bugtype}</h1>',
			'</div>',
			'</tpl>'
		);
		
		
		var img = Ext.create('Ext.Img',{
			src:'static/images/bug.png',
			width:100,
			height:100,
			top:20,
			left:20
		});
		
		var pan1 = Ext.create('Ext.Container',{
				listeners:{
					
				},
				items:[
					{
						xtype:'img',
						width:50,
						height:50,
						top:10,
						left:10,
						src:'static/images/bug.png'
					},
					{
						xtype:'label',
						id:'labelName',
						html:tplHtmlLab
					},
					{
						xtype:'label',
						id:'label-2',
						//html:tplInfo
						tpl:tpl2,
						data:datainfo
					},
					{
						xtype:'button',
						text:'升级',
						width:'7em',
						top:'17em',
						left:'1em'
					},
					{
						xtype:'button',
						text:'升级',
						width:'7em',
						top:'19em',
						left:'1em'
					}
				]
				//html:'pan1'
			});
		pan1.add(img);
		pan1.element.on("tap",function(){
			console.log('ok');
		});
		
		var maintabpanel = Ext.create('Ext.TabPanel',{
			id:'main_play_tabpanel',
			ui:'dark',
			tabBarPosition:'bottom',
			listeners:{
				activeitemchange:function(){
					console.log('tab change');
				}
			},
			items:[
				{
					iconCls:'home',
					items:[pan1],
					title:'虫巢'
				},
				{
					iconCls:'user',
					items:[mydataview],
					title:'虫族'
				},
				{
					iconCls:'add',
					title:'兵虫'
				},
				{
					iconCls:'time',
					title:'商城'
				},
				{
					iconCls:'team',
					title:'仓库'
				}
			]
		});
		Ext.Viewport.add(maintabpanel);
	}
});
