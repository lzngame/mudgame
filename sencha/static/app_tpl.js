Ext.application({
	name:'app',
	launch:function(){
		var data = {
			string_value:'模板初始文字'
		};
		var tpl = new Ext.XTemplate(
			'<table>',
			'<tr>',
				'<td>{string_value}</td>',
				'<td>Hello</td>',
			'</tr>',
			'</table>'
		);
		
		
		var dataArray = 
		{
			email:'test@qq.com',
			zip:'213440',

			letters:
			[
				{name:'A',code:30},{name:'B',code:20},{name:'C',code:33}
			]
		}; 
		
		
		var tpl2 = new Ext.XTemplate(
			'<p> 字母: ',
			'<tpl for="letters">',
			'<p>{#}.  Letter:{name},Code:{code}<br/>zip:{parent.zip}</p>',
			'{[xcount]}',
			'</tpl>',
			'<p>Email:{email}</p>',
			'<p>count:{[xcount]}</p>',
			'</p>'
		);
		
		var tplHtml = tpl2.apply(dataArray);
		
		var mytoolbar = Ext.create('Ext.Toolbar',{
			docked:'top',
			items:[
				{
					text:'Replace Template',
					handler:function(){
						//tpl.overwrite(Ext.get('subpanel'),{string_value:'NEW DATA'});
					}
				}
			]
		});
		
		var mypanel = Ext.create('Ext.Panel',{
			items:[
				mytoolbar,{
					id:'subpanel',
					xtype:'panel',
					html:tplHtml
				}
			]
		});
		
		Ext.Viewport.add(mypanel);
	}
});
