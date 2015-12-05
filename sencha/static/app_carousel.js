Ext.require('Ext.Carousel');
Ext.application({
	name:'app',
	launch:function(){
		var img = Ext.create('Ext.Img',{
			src:'static/images/bug.png',
			height:100,
			width:100,
			listeners:{
				tap:function(){
					Ext.Msg.alert('img.width');
				}
			}
		});
		var data0 ={
			value:'static/images/21.png'
		};
		var data1 ={
			value:'static/images/102.gif'
		};
		var data2 ={
			value:'static/images/103.gif'
		};
		var tpl = new Ext.XTemplate(
			'<img src="{value}"></img>'
		);
		
		
		function drawHexagon(ctx,x,y,r,clr,flat){
			if(flat == null)
				flat = 0;
			if(clr)
				ctx.fillStyle = clr;
			//ctx.fillRect(x,y,4,4);
			ctx.beginPath();
			var x0 = x;
			var y0 = y;
			var ang = 0;
			for(var i=0;i<12;i++){
				ang = i * (Math.PI/6)+(Math.PI/6*flat);
				x0 = x - r*Math.sin(ang);
				y0 = y + r*Math.cos(ang);
				if(i==0){
					ctx.moveTo(x0,y0);
				}		
				else{
					if(i%2==0)
						ctx.lineTo(x0,y0);
				}
				    
				//ctx.fillText(i.toString(),x0,y0);
			}

			ctx.closePath();
			ctx.fill();
			//ctx.stroke();
		}
		
		function drawText(ctx,x,y,fontDis,txtArray){
			for(var i=0;i<txtArray.length;i++){
				ctx.fillText(txtArray[i],x,y+i*fontDis);
			}
		}
		
		
		function createCanvas(){
			console.log('active');
			var canvas = document.getElementById('canvasid');
			//canvas.clearRect(0,0,1000,1000);
			var obj = Ext.get('pan2');
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
			
			var img = new Image();
			img.src='static/images/bugsmall.png';
			img.onload = function(e){
				
				context.drawImage(img,60+33,60+18);
			}
			
		}
		
		function drawJsonTxt(jsonobj){
			var canvas = document.getElementById('canvasid');
			var obj = Ext.get('pan2');
			var w = obj.getWidth();
			var h = obj.getHeight();
			var context = canvas.getContext("2d");
			context.font = '14px Palatino';
			context.fillStyle = mainview_Uiconfig.fontclr;
			var st = jsonobj['home_title'];
			for(var i=0;i<st.length;i++){
				context.fillText(st[i],190+i*20,20);
			}
			//context.fillText(jsonobj['home_title'],190,20);
			
		}
		
		function onMove(){
			console.log('clear');
			var canvas = document.getElementById('canvasid');
			//canvas.clearRect(0,0,1000,1000);
		}
		
		var pan1 = Ext.create('Ext.Container',{
			html:'Pan1',
			
			style:'background-color:white;color:red;',
			styleHtmlCls:'padding:0;',
		});
		
		
		var pan2 = Ext.create('Ext.Panel',{
			id:'pan2',
			html:'<div id="divid" style="margin:0px;padding:0px"><canvas id="canvasid" style="margin:0px;padding:0px;"></canvas></div>',
			padding:0,
			margin:0,
			styleHtmlCls:'padding:0;background-color:black',
			style:'background-color:'+mainview_Uiconfig.bg,
			items:[
				{
					xtype:'button',
					text:'****',
					width:1,
					height:1,
					top:1,
					left:1,
					handler:function(t,e){
						console.log('lv');
					}
				}
			],
			listeners:{
				activate:function(){
					createCanvas();
					Ext.Ajax.request({
									url:'/gethomedata',
									//url:'check',
									scope:this,
									success:function(response){
										//var obj1 = JSON.parse(response);
										//consle.log(obj);
										//alert(response.responseText);
										//var str = response.responseText;
										//var obj = JSON.parse(str,function(st,ob){
											//console.log(st);
										//});
										
										//console.log(st);
										var stt = '';
										var obj2 = Ext.decode(response.resopnseText);
										var obj = JSON.parse(response.responseText);
										console.log(typeof obj);
										drawJsonTxt(obj);
										//var obj = JSON.parse('st');
										//console.log(typeof st);
										//var obj = JSON.parse(st);
										//console.log(typeof obj);
										//var obj = JSON.parse();
										var title = obj['home_title'];
										//var obj = Ext.decode(response.responseText);
										//var name = obj['name'];
										//var age = obj['age'];
										//var user = Ext.create('User',{
										//	'name':name,
										//	'age':age
										//});
										//formpanel.setRecord(user);
										//Ext.Msg.alert(obj['home_lv']);
										//Ext.Msg.alert(title);
										
									},
									failure:function(){
										Ext.Msg.alert('loaddata failed');
									}
								});
				},
				activeitemchange:function(){
					onMove();
				},
				rightchange:function(){
					console.log('rightchagne');
				},
				hide:function(){
					console.log('hide');
				},
				updatedata:function(){
					console.log('updatedata');
				}
			}
		});
		pan2.element.on("tap",function(target,e,eOpts){
			console.log('tap');
		});
		
		var toolbar = Ext.create('Ext.Toolbar',{
			docked:'bottom',
			items:[
				{
					xtype:'button',
					text:'One',
				},
				{
					xtype:'button',
					text:'Two',
					handler:function(){
						createCanvas();
					}
				}
			]
		});
		var carouselOne = Ext.create('Ext.Carousel',{
			ui:'dark',
			flex:1,
			direction:'horizontal',
			defaults:{
				styleHtmlContent:true
			},
			padding:'0 0 0 0',
			marging:'0 0 0 0',
			items:[
				pan1,pan2,img,
				{
					xtype:'container',
					html:tpl.apply(data0),
					style:'background-color:black',
					styleHtmlCls:'padding:0',
					//padding:'0 0 0 0',
					//margin:'0 0 0 0',
					listeners:{
						activate:function(){
							console.log('demo');
							
							var par = this.getParent();
							var pd = par.getPadding();
							var md = par.getMargin();
							var cls = par.getCls();
							var bcls = par.getBaseCls();
							par.setPadding('0 0 0 0');
							par.setMargin('0 0 0 0');
						}
					}
				},
				{
					html:tpl.apply(data1),
					style:'background-color:yellow'
				},
				{
					html:tpl.apply(data2),
					style:'background-color:blue'
				}
				//pan1,pan2
			]
		});
		
		var task = Ext.create('Ext.util.DelayedTask',function(){
				console.log('ok');
			}
		);
		
		
		
		//task.delay(2000);
		
		
		var panel = Ext.create('Ext.Container',{
			layout:{
				type:'hbox',
				//aligh:'stretch'
			},
			items:[carouselOne,toolbar],
			listeners:{
				initialize:function(){
					console.log('initializetion');
					//task.delay(100);
					task.setInterval(300);
				}
			}
			
		});
		Ext.Viewport.add(panel);
		
		var mask = Ext.create('Ext.LoadMask',{
			message:'loading...',
			modal:false
		});
		Ext.Viewport.setMasked(mask);
		Ext.Viewport.setMasked(false);
	}
});
