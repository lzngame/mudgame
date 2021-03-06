Ext.application({
	name:'app',
	launch:function(){
		var formPanel = Ext.create('Ext.form.Panel',{
			id:'formPanel',
			scrollable:'vertical',
			url:'/check',
			items:[
				{
					xtype:'fieldset',
					title:'电影信息',
					instructions:'请填写电影信息',
					defaults:{
						labelwidth:'20%'
					}
				},
				{
					xtype:'textfield',
					id:'txt_title',
					name:'title',
					label:'标题',
					required:true,
					clearIcon:true
				},
				{
					xtype:'textfield',
					id:'txt_director',
					name:'director',
					label:'导演',
					clearIcon:true
				},
				{
					xtype:'checkboxfield',
					name:'color',
					label:'彩色',
					value:'colored',
					checked:true,
				},
				{
					xtype:'selectfield',
					name:'genre',
					label:'种类',
					options:[
						{text:'喜剧',value:1},{text:'文艺',value:2},{text:'动作',value:3}
					],
					listeners:{
						change:function(select,newValue,oldValue){
							var tmp = newValue.data;
							var tmp2 = oldValue;
						}
					}
				},
				{
					xtype:'datepickerfield',
					name:'released',
					value:new Date(),
					dateFormat:'Y/m/d',
					picker:{
						yearFrom:2000,
						yearTo:2100
					},
					label:'发行日期'
				},
				{
					xtype:'fieldset',
					title:'国家',
					layout:{
						type:'hbox',
						pack:'end'
					},
					defaults:{
						xtype:'radiofield',
						layout:{
							type:'card'
						},
						labelwidth:'20%'
					},
					items:[
						{
							name:'country',
							label:'中国',
							value:'china'
						},
						{
							name:'country',
							label:'韩国',
							value:'Koran'
						},
						{
							name:'country',
							label:'美国',
							value:'America'
						}
					]
				},
				{
					xtype:'panel',
					align:'center',
					layout:{
						type:'hbox',
						pack:'end',
						align:'center'
					},
					defaults:{
						xtype:'button',
						algin:'center'
					},
					items:[
						{
							text:'Submit',
							handler:function(){
								formPanel.submit();
							}
						},
						{
							text:'Reset',
							handler:function(){
								formPanel.reset();
							}
						}
					],
					listeners:{
						submit:function(form,result){
							Ext.Msg.alert('提交成功');
						},
						exception:function(form,result){
							Ext.Msg.alert('提交失败');
						}
					}
				}
			]
		});
		Ext.Viewport.add(formPanel);
	}
});