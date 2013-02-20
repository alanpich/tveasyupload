EasyUpload.form.EasyUploadField = function(config) {
    config = config || {};

    //noinspection JSValidateTypes
    Ext.apply(config,{
        border: false
        ,isUpload: true
        ,listeners: {
            change:         {fn: this.onFileSelected,scope:this }
            ,success:       {fn: this.onUploadSuccess,scope:this}
            ,failure:       {fn: this.onUploadFailure,scope:this}
        }
    })
    EasyUpload.form.EasyUploadField.superclass.constructor.call(this,config);


    // Create separate formPanel for uploading files
    this.createUploadForm();

    this.el.dom.type = 'hidden';

    MODx.load({
         xtype: 'button'
        ,text: 'Select file...'
        ,handler: this.onButtonClick
        ,scope: this
        ,float: 'left'
        ,renderTo: this.el.wrap()
    })

};
Ext.extend(EasyUpload.form.EasyUploadField,Ext.form.TextField,{


    createUploadForm: function(){




        this.UploadForm = MODx.load({
            xtype: 'modx-formpanel'
            ,id: this.uploadFormInputId
            ,renderTo: 'modx-content'
            ,isUpload: true
            ,hidden: true
            ,url: MODx.config.assets_url+'components/tveasyupload/connector.php'
            ,baseParams: {
                action: 'browser/file/upload'
                ,res_id: this.res_id
                ,tv_id: this.tv_id
                ,ms_id: this.ms_id
            }
            ,TV: this
            ,listeners: {
                success: {fn: this.onUploadSuccess, scope:this}
            }
            ,items: [{
                xtype:'filefield'
                ,TV: this
                ,listeners: {
                    'change': {fn: this.onFileSelected, scope:this }
                }
            }]
        })

        this.UploadField = this.UploadForm.items.items[0];

        // Force the form to be multipart/form-data
        this.UploadForm.form.el.dom.setAttribute('enctype','multipart/form-data')

        // I have absolutely no idea why i need to do this, but i do
        this.UploadForm.errorReader.read = function(response){ return Ext.util.JSON.decode(response.responseText) }

        // Grab change events from the file input
        this.relayEvents(this.UploadField,['change']);

        // Grab submit success/fail events from the form
        this.relayEvents(this.UploadForm.form,['failure','submit']);

    }



    /**
     * Handler for 'Select file...' button click
     */
    ,onButtonClick: function(){
        this.UploadField.click()
    }


    /** Handler for File selected -> trigger upload */
    ,onFileSelected: function(){
        this.UploadForm.form.baseParams.file = this.UploadField.getValue()
        this.UploadForm.submit()
    }





    ,onUploadSuccess: function(o){
        console.log(arguments);
        MODx.fireResourceFormChange()
        this.setValue(o.result.message)
    //    this.updateTextDisplay();
    }

    ,onUploadFailure: function(){
        /***/
    }



});
Ext.reg('EasyUploadTV',EasyUpload.form.EasyUploadField);
