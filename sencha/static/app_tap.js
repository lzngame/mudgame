Ext.application({
	name:'app',
	launch:function(){
		var onTap = function(e,t){
			Ext.Msg.alert('on');
		}
		var panel = Ext.create('Ext.Panel',{
			id:'mypanel',
			html:'<canvas id="test"></canvas>',
			fullscreen:true
		});
		
		
		panel.element.on({
			tap:function(e,t){
				Ext.Msg.alert('ok');
			}
		});
		
		Ext.Viewport.add(panel);
	}
});
