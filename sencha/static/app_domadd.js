Ext.application({
	name:'app',
	launch:function(){
		var bcnt = 0;
		var acnt = 0;
		var bias = 0;
		var bchar = 'M';
		var achar = 'W';
		
		function before(){
			Ext.DomHelper.insertBefore('insert-target',{
				cls:'add',
				html:Ext.util.Format.leftPad(bchar,bcnt * bias,bchar)
			});
			bcnt++;
		}
		
		function after(){
			Ext.DomHelper.insertAfter('insert-target',{
				cls:'add',
				html:Ext.util.Format.leftPad(achar,acnt*bias,achar)
			});
			acnt++;
		}
		
		function remove(){
			var elems = Ext.DomQuery.select('.add');
			Ext.each(elems,function(item,index,array){
				Ext.removeNode(item);
			});
			bcnt = acnt = 0;
		}
		
		var mytoolbar = Ext.create('Ext.Toolbar',{
			docked:'bottom',
			scollable:'horizontal',
			items:[
				{
					//xtype:'button',
					ui:'action',
					text:'Append(<-)',
					handler:before
				},
				{
					//xtype:'button',
					ui:'confirm-round',
					text:'Append(->)',
					handler:after
				},
				{
					//xtype:'button',
					ui:'decline',
					text:'Remove',
					handler:remove
				},
				{
					ui:'decline-small',
					text:'decline'
				}
			]
		});
		
		var html = "<div class='body' style='padding:15px;'><h1>Append Element after</h1><div id='insert-target'><hr/></div></div>";
		
		var mypanel = Ext.create('Ext.Panel',{
			id:'panel',
			title:'Panel',
			html:html,
			items:[mytoolbar],
			scrollable:'vertical'
		});
		Ext.Viewport.add(mypanel);
	}
});
