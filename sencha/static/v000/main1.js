Ext.require(['Ext.TabPanel','Ext.DataView','Ext.data.Store','Ext.XTemplate','Ext.Img']);

Ext.application({
	name:'main_play_tabpanel',
	launch:function(){
		var titles =['虫巢','工虫','兵虫','地图','资源'];
		var data0 = {
			value:'static/images/21.png'
		};
		var tpl = new Ext.XTemplate('<img src="{value}"></img>');
		var data1 = [
			{worker_type:'工虫',worker_lv:'B',worker_quantity:2000},
			{worker_type:'负重工虫',worker_lv:'B1',worker_quantity:812000},
			{worker_type:'特斯拉',worker_lv:'A',worker_quantity:12990},
			{worker_type:'甲壳工虫',worker_lv:'B',worker_quantity:210},
			{worker_type:'挖掘工虫',worker_lv:'B',worker_quantity:1200},
			{worker_type:'工虫',worker_lv:'B',worker_quantity:2000},
			{worker_type:'负重工虫',worker_lv:'A',worker_quantity:812000},
			{worker_type:'特斯拉',worker_lv:'B',worker_quantity:12990},
			{worker_type:'甲壳工虫',worker_lv:'B2',worker_quantity:210},
			{worker_type:'挖掘工虫',worker_lv:'B',worker_quantity:1200},
			{worker_type:'工虫',worker_lv:'B',worker_quantity:2000},
			{worker_type:'负重工虫',worker_lv:'B3',worker_quantity:812000},
			{worker_type:'特斯拉',worker_lv:'B',worker_quantity:12990},
			{worker_type:'甲壳工虫',worker_lv:'D',worker_quantity:210},
			{worker_type:'挖掘工虫',worker_lv:'B',worker_quantity:1200},
			{worker_type:'工虫',worker_lv:'D',worker_quantity:2000},
			{worker_type:'负重工虫',worker_lv:'B',worker_quantity:812000},
			{worker_type:'特斯拉',worker_lv:'B',worker_quantity:12990},
			{worker_type:'甲壳工虫',worker_lv:'C',worker_quantity:210},
			{worker_type:'挖掘工虫',worker_lv:'B',worker_quantity:1200},
			{worker_type:'工虫',worker_lv:'B',worker_quantity:2000},
			{worker_type:'负重工虫',worker_lv:'B1',worker_quantity:812000},
			{worker_type:'特斯拉',worker_lv:'A',worker_quantity:12990},
			{worker_type:'甲壳工虫',worker_lv:'B',worker_quantity:210},
			{worker_type:'挖掘工虫',worker_lv:'B',worker_quantity:1200},
			{worker_type:'工虫',worker_lv:'B',worker_quantity:2000},
			{worker_type:'负重工虫',worker_lv:'A',worker_quantity:812000},
			{worker_type:'特斯拉',worker_lv:'B',worker_quantity:12990},
			{worker_type:'甲壳工虫',worker_lv:'B2',worker_quantity:210},
			{worker_type:'挖掘工虫',worker_lv:'B',worker_quantity:1200},
			{worker_type:'工虫',worker_lv:'B',worker_quantity:2000},
			{worker_type:'负重工虫',worker_lv:'B3',worker_quantity:812000},
			{worker_type:'特斯拉',worker_lv:'B',worker_quantity:12990},
			{worker_type:'甲壳工虫',worker_lv:'D',worker_quantity:210},
			{worker_type:'挖掘工虫',worker_lv:'B',worker_quantity:1200},
			{worker_type:'工虫',worker_lv:'D',worker_quantity:2000},
			{worker_type:'负重工虫',worker_lv:'B',worker_quantity:812000},
			{worker_type:'特斯拉',worker_lv:'B',worker_quantity:12990},
			{worker_type:'甲壳工虫',worker_lv:'C',worker_quantity:210},
			{worker_type:'挖掘工虫',worker_lv:'B',worker_quantity:1200},
		];
		
		Ext.define('User',{
			extend:'Ext.data.Model',
			config:{
				fields:['worker_type','worker_lv','worker_quantity']
			}
		});
		
		var store = Ext.create('Ext.data.Store',{
			model:'User',
			data:data1
		});
		
		var titletoolbar = Ext.create('Ext.Toolbar',{
			docked:'top',
			items:[
				{
					xtype:'button',
					text:'种类',
					width:'30%',
				}
			]
		});
		
		
		
		var titlepanel = Ext.create('Ext.Panel',{
			docked:'top',
			layout:'hbox',
			items:[
				{
					xtype:'button',
					text:'种类▲',
					flex:1,
					handler:function(){
						if(this.getText() === '种类▲'){
							this.setText('种类▼');
							store.sort('worker_type','asc');
						}else{
							this.setText('种类▲');
							store.sort('worker_type','desc');
						}
					}
				},
				{
					xtype:'button',
					text:'等级',
					flex:1
				},
				{
					xtype:'button',
					text:'数量',
					flex:1
				}
			]
		});
		Ext.MessageBox.OK =[
			{text:'确定',itemId:'ok',ui:'action'}
		];
		Ext.MessageBox.YESNO =[
			{text:'取消',itemId:'no',ui:'action'},
			{text:'确定',itemId:'yes',ui:'action'}
		];
		var dataviewuser = Ext.create('Ext.DataView',{
			//fullscreen:true,
			store:store,
			baseCls:'user',
			itemid:'ttttttt',
			items:[titlepanel],
			itemTpl:'<div>{worker_type}</div><div>{worker_lv}</div><div>{worker_quantity}</div>',
			height:'100%',
			listeners:{
				itemsingletap:function(dataview,index,item,record,e){
					Ext.Msg.show({
   						//title: 'Address',
  						//message: 'Please enter your address:',
   						width: 250,
   						height:300,
   						html:'工虫操作面板',
   						buttons:Ext.MessageBox.OK,
   						items:[
   							{
   								xtype:'container',
   								html:'Container',
   								top:100,
   								left:100
   							}
   						],
   						//buttons: Ext.MessageBox.OKCANCEL,
   						//multiLine: true,
   						//prompt : { maxlength : 180, autocapitalize : true },
   						fn: function(buttonId) {
       							//alert('You pressed the "' + buttonId + '" button.');
   							}
					});
				}
			}
		});
		
		var panelHome = Ext.create('Ext.Panel',{
			id:'homePanel',
			html:'<div id="divid" style="margin:0px;padding:0px"><canvas id="canvasid" style="margin:0px;padding:0px;"></canvas></div>',
			//style:'background-color:'+mainview_Uiconfig.bg,
			//fullscreen:true,
			style:'background-color:blue',
			styleHtmlCls:'padding:0'
		});
		
		function createCanvas(){
			console.log('active');
			var canvas = document.getElementById('canvasid');
			//canvas.clearRect(0,0,1000,1000);
			var obj = Ext.get('homepanel');
			var w = obj.getWidth();
			var h = obj.getHeight();
			var margin = obj.getMargin();
			var t = obj.getTop();
			var l = obj.getLeft();
			canvas.width = w;
			canvas.height = h;
			var context = canvas.getContext("2d");
			//context.clearRect(0,0,w,h);
			context.font = '14px Palatino';
			context.fillStyle = mainview_Uiconfig.fontclr;
			drawText(context,160,Math.random()*400,22,tmpdata.introduction);
			
			//context.fillStyle = 'white';
			//context.fillRect(0,0,w-100,h);	
			//context.fillText('hello/n虫巢',100,300);
			
			var clr = mainview_Uiconfig.hexagonfillclr;
			drawHexagon(context,60,60,40,clr,1);
			drawHexagon(context,120,100,35,clr,1);
			drawHexagon(context,60,130,35,clr,1);
			drawHexagon(context,120,165,35,clr,1);
			
			/*var img = new Image();
			img.src='static/images/bugsmall.png';
			img.onload = function(e){
				
				context.drawImage(img,60+33,60+18);
			}*/
			
		}
		 
		var maintabpanel = Ext.create('Ext.TabPanel',{
			id:'main_play_tabpanel',
			ui:'gray',
			tabBarPosition:'bottom',
			style:'background-color:#101420',
			listeners:{
				activeitemchange:function(){
					console.log('tab change');
					//Ext.Msg.alert('ok');
					/*Ext.Msg.confirm(
						'hello','input something',function(btn,text){
							
						},this,false,''
					);*/
				}
			},
			items:[
				{
					xtype:'panel',
					iconCls:'lightning',
					items:[dataviewuser],
					title:titles[2]
				},
				{
					/*xtype:'container',
					iconCls:'home',
					tpl:tpl,
					data:data0,
					title:titles[0],
					style:'background-color:#101420',*/
					xtype:'panel',
					id:'homepanel',
					height:'100%',
					iconCls:'home',
					title:titles[0],
					html:'<div id="divid" style="margin:0px;padding:0px"><canvas id="canvasid" style="margin:0px;padding:0px;"></canvas></div>',
					style:'background-color:#121400',
					styleHtmlCls:'padding:0',
					listeners:{
						activate:function(){
							createCanvas();
						}
					}
				},
				{
					title:titles[1],
					iconCls:'maps',
					style:'background-color:red'
				}
			]
		});
		Ext.Viewport.add(maintabpanel);
		/*Ext.Viewport.add({
			xtype:'loadmask', 
			message:'loading....'
		});*/
	}
});
