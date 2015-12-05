Ext.application({
	name:'app',
	launch:function(){
		Ext.define('User',{
			extend:'Ext.data.Model',
			config:{
				fields:[
					{name:'name',type:'string'},
					{name:'age',type:'int'}
				]
			}
		});
		var formpanel = Ext.create('Ext.form.Panel',{
			id:'formpanel',
			scrollable:'vertical',
			//url:'/check',
			items:[
				{
					xtype:'textfield',
					id:'txtname',
					name:'name',
					label:'Name'
				},
				{
					xtype:'textfield',
					id:'txtage',
					name:'age',
					label:'Age'
				},
				{
					xtype:'panel',
					layout:{
						type:'hbox',
						pack:'end'
					},
					defaults:{
						xtype:'button'
					},
					items:[
						{
							xtype:'button',
							ui:'action',
							text:'loaddata',
							handler:function(){
								Ext.Ajax.request({
									url:'/check',
									scope:this,
									success:function(response){
										var obj = Ext.decode(response.responseText);
										var name = obj['name'];
										var age = obj['age'];
										var user = Ext.create('User',{
											'name':name,
											'age':age
										});
										formpanel.setRecord(user);
										
									},
									failure:function(){
										Ext.Msg.alert('loaddata failed');
									}
								});
							}
						}
					]
				}
			]
		});
		Ext.Viewport.add(formpanel);
	}
});