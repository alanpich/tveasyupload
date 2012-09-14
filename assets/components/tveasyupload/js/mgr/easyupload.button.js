EasyUpload = {};

EasyUpload.Button = function(config) { 
	config = config || {};
	Ext.applyIf(config,{
		cls: 'button',
		fileUpload: true,
		labelAlign: 'above',
		items: [{
			xtype: 'fileuploadfield',
			buttonText: 'Select file...',
			buttonOnly: true,
			float: 'left',
			align: 'left',
		},{
			xtype: 'hidden',
			name: 'tv_id',
			value: '1'
		},{
			xtype: 'hidden',
			name: 'res_id',
			value: '2'
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
					wrap.style.paddingLeft = '0px';
					
				// Create the preview image img
				this.previewImage = document.createElement('img');
				this.previewImage.width = '200';
				this.previewImage.src = this.tvField.value;
				document.getElementById(this.renderTo).appendChild(this.previewImage);
				
			},scope: this},
			'success': {fn:function(){
				alert('successful upload!');
				
				// Generate full image url
				var URL = this.mediasource.url+this.path+this.filename;
				
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





