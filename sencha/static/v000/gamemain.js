Ext.require(['Ext.MessageBox','Ext.LoadMask','Ext.Carousel','Ext.Img','Ext.Panel','Ext.TabPanel','Ext.form.Panel','Ext.field.Number','Ext.field.Spinner']);
Ext.application({
	name:'app',
	launch:function(){
		var tabpanelW =0;
		var tabpanelH = 0;
		
		var homepanelA = Ext.create('Ext.Panel',{
			id:'homepanelA',
			//html:'<div id="divid" style="margin:0px;padding:0px"><canvas id="canvasid" style="margin:0px;padding:0px;"></canvas></div>',
			html:'HOMEPANEL',
			style:'background-color:blue',
			height:'100%',
			styleHtmlCls:'padding:0',
			
		});
		
		function createCanvas(){
			var canvas = document.getElementById('canvasid');
			var context = canvas.getContext("2d");
			
			//Ext.Msg.alert(canvas.width.toString()+":"+canvas.height.toString());
			
			context.font = '14px Palatino';
			context.fillStyle = "#5C5959";//mainview_Uiconfig.fontclr;
			drawText(context,20,220,22,tmpdata.introduction);
			
			var clr = '#B5D981';//mainview_Uiconfig.hexagonfillclr;//'
			var clrborder = "#E7FC34";
			drawHexagon(context,60,60,40,clr,clrborder,1);
			
			drawHexagon(context,120,100,35,clr,clrborder,1);
			drawHexagon(context,60,130,35,clr,clrborder,1);
			drawHexagon(context,120,165,35,clr,clrborder,1);
			context.fillRect(100,60,100,1);
			context.fillRect(155,100,100,1);
			context.fillRect(155,165,100,1);
			
			context.fillStyle = '#060606';
			context.fillText('幼虫',45,50);
			context.fillText('虫食',104,97);
			context.fillText('等级',45,122);
			context.fillText('效率 ',104,157);
			
			
			context.fillText('虫币',192,205);
			context.fillText('声望',192,260);
			context.fillText('战力',192,315);
			//drawScaleImg(context,'slice61_61.png',190,20,0.5);
			//drawScaleImg(context,'slice80_80.png',190,210,1);
			//drawScaleImg(context,'slice66_66.png',190,265,1);
			//drawScaleImg(context,'slice63_63.png',190,320,1);
			 
		}
		
		function setCanvasSize(){
			var canvas = document.getElementById('canvasid');
			var obj = Ext.get('homepanel');
			var w = obj.getWidth();
			var h = obj.getHeight();
			canvas.width = w;
			canvas.height = h;
			tabpanelW = w;
			tabpanelH = h;
		}
		
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
		
		var data_showmsgwin = {
			string_value:'This is a good news'
		};
		var tpl_showmsgwin = new Ext.XTemplate(
			'<h1>{string_value}</h1>'
		);
		
		var dataviewuser = Ext.create('Ext.DataView',{
			//fullscreen:true,
			id:'datatviewuserid',
			flex:4,
			store:store,
			baseCls:'user',
			itemid:'ttttttt',
			//itemTpl:'<div>{worker_type}</div><div>{worker_lv}</div><div>{worker_quantity}</div>',
			//items:[titlepanel],
			itemTpl:'<div class="leftdiv"><div class="title_01">{worker_type}</div><div class="title_02">{worker_lv}</div><div class="title_03">{worker_quantity}</div></div><div class="rightdiv" class="title_01">LV 10</div>"',
			//style:'background-color:#2F2B2B',
			height:'100%',
			listeners:{
				itemsingletap:function(dataview,index,item,record,e){
					Ext.Msg.show({
   						//title: 'Address',
  						//message: 'Please enter your address:',
  						buttons:[
  							//Ext.MessageBox.OK,
  							//
  						],
  						id:'tmpid2',
   						width: 250,
   						height:300,
   						style:'background-color:yellow;color:blue',
   						tpl:tpl_showmsgwin,
   						data:data_showmsgwin,
   						//buttons:Ext.MessageBox.OK,
   						items:[
   							{
   								xtype:'button',
   								top:200,
   								left:20,
								text:'购买',
								handler:function(){
									console.log('ok');
									//var obj = this.parent();
									var obj = this.getParent();
									console.log(typeof obj.destroy);
									//obj.destroy();
									obj.hide();
									obj.removeAll();
									
								}
   							}
   						],
   						//buttons: Ext.MessageBox.OKCANCEL,
   						//multiLine: true,
   						//prompt : { maxlength : 180, autocapitalize : true },
   						fn: function(buttonId) {
       							this.removeAll();//alert('You pressed the "' + buttonId + '" button.');
   							}
					});
				}
			}
		});
		
		
		var tabpanel = Ext.create('Ext.TabPanel',{
			id:'tabpanel',
			ui:'dark',
			tabBarPosition:'bottom',
			listeners:{
				show:function(){
					console.log('tabpanel show');
					var imgtm = Ext.create('Ext.Img',{
						src:'static/images/tmp_sencha.png',
					});
					
					img_sencha.src = "static/images/tmp_sencha.png";
					img_sencha.onload = function(){
							console.log('ok,img loaded');
							//var tmp = Ext.Viewport;
							Ext.Viewport.setMasked(false);
							//Ext.Msg.alert('img load ok');
						}
				}
			},
			items:[
				{
					xtype:'panel',
					iconCls:'lightning',
					id:'listmain',
					layout:{
						type:'hbox',
						align:'stretch'
					},
					
					items:[
						{
							flex:1,
							//html:'menu',
							style:'background-color:black',
							items:[
								{
									xtype:'button',
									text:'甲壳战虫',
									//height:100,
									iconCls:'home',
									//icon:'static/images/beetle.png',
									padding:'1em',
									iconAlign:'top',
									
									
								},
								{
									xtype:'button',
									text:'战力排序<br/>要换行',
									height:100,
									
								},
								{
									xtype:'button',
									text:'负重工虫',
									iconAlign:'top',
									iconCls:'maps ico roseRed',
									padding:'1em'
								}
							]
						},
						dataviewuser
					],
					title:'列表',
					style:'background-color:#191919'
				},
				{
					iconCls:'home',
					title:'One',
					id:'homepanel',
					html:'<canvas id="canvasid" style="margin:0px;padding:0px;"></canvas>',
					style:'background-color:#D6F6DB',
					listeners:{
						show:function(thiscomponent,eOpts){
							setCanvasSize();
							createCanvas();
							console.log('home panel show event');
						},
						activate:function(newActiveItem, thisself, oldActiveItem, eOpts){
							setCanvasSize();
							createCanvas();
							console.log('home panel activate event');
						},
						hide:function(){
							console.log('home panel hide event');
							var canvas = document.getElementById('canvasid');
							if(canvas){
								//var context = canvas.getContext("2d");
								//context.clearRect(0,0,1000,1000);
							}
							
						}
					},
					items:[
						{
							xtype:'img',
							src:'static/images/uplevel.png',
							height:41,
							width:150,
							top:365,
							left:190,
							listeners:{
								tap:function(){
									console.log('add');
									var panel = Ext.create('Ext.Panel',{
										id:'tmppanel011',
										//html:'升级面板',
										width:'100%',
										height:'100%',
										zIndex:999,
										top:'0px',
										left:'0px',
										showAnimation: {
            								type: 'popIn',
            								duration: 250,
            								easing: 'ease-out'
        								},
        								hideAnimation:{
        									type:'popOut',
        									duration:250,
        									easing:'ease-out'
        								},
        								modal:true,
        								listeners:{
        									hide:function(){
        										console.log('after hide');
        										Ext.Viewport.remove(panel,true);
        									}
        								},
        								layout:{
        									type:'vbox',
        									aligh:'stretch'
        								},
        								items:[
        									{
        										flex:1,
        										style:'background-color:#889933',
        									},
        									{
        										flex:2,
        										style:'background-color:red',
        										styleHtmlCls:'background-color:red',
        										xtype:'formpanel',
        										id:'formpanel',
        										items:[
        											{
        												
        												
        												xtype:'textfield',
        												labelWidth:'30%',
        												width:'80%',
        												id:'spn_age',
        												name:'age',
        												label:'购买数量',
        												minValue:1,
        												increment:1000,
        												listeners:{
        													change:function(thisself,newValue,oldValue,eOpts){
        														console.log(newValue);
        													}
        												},
        												style:'background-color:red',
        												styleHtmlCls:'background-color:red',
        												
        											}
        										]
        									},
        									{
        										flex:2,
        										style:'background-color:#873421'
        									},
        									{
        										xtype:'button',
        										text:'返回',
        										width:'70px',
        										height:'48px',
        										top:'2px',
        										left:'2px',
        										handler:function(){
        											panel.hide({type: 'slideOut', direction: 'down',duration:100});
        											//this.getParent().hide({type: 'slideOut', direction: 'down',duration:100});
        										}
        									}
        								]
        								
									});
									panel.element.on("tap",function(target,e,eOpts){
										console.log('out');
										
			 							//panel.hide({type: 'slideOut', direction: 'down',duration:100});
			 							//panel.hide(panel.config.hideAnimation);
			 							
		 							});
									Ext.Viewport.add(panel);
									//panel.show({type: 'slide', direction: 'down'});
									panel.show(panel.config.showAnimation);
								}
							}
						}
					]
				},
				{
					iconCls:'user',
					title:'Two',
					style:'background-color:blue',
					html:'OtherTab'
				},
				{
					iconCls:'delete',
					title:'Threee',
					items:[
						homepanelA
					]
				}
			]
		});
		
		Ext.Viewport.add(tabpanel);
		

		//var mask = Ext.create('Ext.LoadMask',{
		//	message:'loading...',
		//	modal:false
		//});
		Ext.Viewport.setMasked({xtype:'loadmask',message:'loading resource...'});
		//Ext.Viewport.setMasked(false);
	}
});
