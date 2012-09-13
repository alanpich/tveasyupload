EasyUpload = {};

EasyUpload.Button = function(config) { 
	config = config || {};
	Ext.applyIf(config,{
		cls: 'button',
		fileUpload: true,
		labelPosition: 'above',
		items: [{
			xtype: 'hidden',
			name: 'tv_id',
			value: '1'
		},{
			xtype: 'hidden',
			name: 'res_id',
			value: '2'
		},{
			xtype: 'fileuploadfield',
			buttonText: 'Select file...',
			buttonOnly: true,
			float: 'left',
			align: 'left',
			listeners: {
				'change': {fn: function(){
					alert('changed');
				},scope: this}
			}
		}],
		listeners: {
			'afterRender': { fn: function(){
				
				this.tvField = document.getElementById(this.tvFieldId);
			
				this.items.items[2].fileInput.dom.eub = this;
				this.items.items[2].fileInput.dom.addEventListener('change',function(){
						this.eub.onInputFileChange();
					});
			},scope: this},
			'success': {fn:function(){
				alert('successful upload!');
				
				this.tvField.value = this.mediasource.url+this.path+this.filename;
				
			},scope:this}
		}
	});
	MODx.Panel.superclass.constructor.call(this,config);
	this.config = config;
};
Ext.extend(EasyUpload.Button,MODx.FormPanel,{

	
onInputFileChange: function(){

		var filename = this.items.items[2].fileInput.dom.value.split('\\').pop();
		this.filename = filename;
		alert(filename);
		this.submit();
	}//



});
Ext.reg('easyupload-button',EasyUpload.Button);





