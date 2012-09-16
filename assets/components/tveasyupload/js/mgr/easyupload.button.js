EasyUpload = {};

EasyUpload.Button = function(config) { 
	config = config || {};
	Ext.applyIf(config,{
		cls: 'button',
		fileUpload: true,
		labelAlign: 'above',
		border: false,
		hideLabels: true,
		baseParams: {
			action: 'browser/file/upload'
		},
		items: [{
			xtype: 'fileuploadfield',
			buttonText: 'Select file...',
			buttonOnly: true,
			float: 'left',
			align: 'left',
		},{
			xtype: 'hidden',
			name: 'tv_id',
			value: this.tv_id
		},{
			xtype: 'hidden',
			name: 'res_id',
			value: this.res_id
		}],
		listeners: {
			'afterRender': { fn: function(){
				
				this.tvField = document.getElementById(this.tvFieldId);
			
				// Bind clicks to auto upload file on selection
				this.items.items[0].fileInput.dom.eub = this;
				this.items.items[0].fileInput.dom.addEventListener('change',function(){
						this.eub.onInputFileChange();
					});
					
				// Fix dodgy upload button positioning
				var wrap = Ext.get(this.renderTo).select('div.x-form-element').elements[0];
					wrap.style.paddingLeft = '1px';
					
				// Create the preview image img
				this.previewImage = document.createElement('img');
				this.previewImage.width = '200';
				this.previewImage.style.marginTop = '5px';
				this.previewImage.src = this.tvField.value;
				document.getElementById(this.renderTo).appendChild(this.previewImage);
				
				// Set the tv_id and res_id fields
				var resid = this.getField('res_id');
					resid.setValue(this.res_id);
				var tvid = this.getField('tv_id');
					tvid.setValue(this.tv_id);
				
			},scope: this},
			'success': {fn:function(res){
				
				// Generate full image url
				var URL = res.result.message;
				
				// Update TV value field
				this.tvField.value = URL

				// Update the preview image
				this.updatePreview(URL);

				
				// Mark resource as Dirty
				Ext.getCmp('modx-panel-resource').markDirty();
				
			},scope:this}
		}
	});
	MODx.Panel.superclass.constructor.call(this,config);
	this.config = config;
};
Ext.extend(EasyUpload.Button,MODx.FormPanel,{

	
onInputFileChange: function(){
		var filename = this.items.items[0].fileInput.dom.value.split('\\').pop();
		this.filename = filename;
		this.submit();
	}//


,updatePreview: function(URL){
		this.previewImage.src = URL;
	}//


});
Ext.reg('easyupload-button',EasyUpload.Button);





