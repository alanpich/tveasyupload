<div id="tv-input-properties-form{$tv}"></div>
{literal}
<style>
	.tveasyuploadInfo h4 {
		margin-top: 10px;
	}
	
	.tveasyuploadInfo ul {
		margin-left:20px;
		font-size:12px;
		margin-top:5px;
		color: #666;
	}
	.tveasyuploadInfo ul li span {
		font-family:mono;
		font-weight:bold;
	}
	
</style>
<div class="tveasyuploadInfo">
	<h3>Dynamic routing options</h3>
	<h4>Using Placeholders</h4>
	<p>Both the file save path and the optional filename prefix can be customized dynamically with several placeholders:
		<ul>
			<li><span>{r}</span> - Resource ID</li>
			<li><span>{t}</span> - TemplateVar ID</li>
			<li><span>{u}</span> - User ID</li>
			<li><span>{d}</span> - Day of month</li>
			<li><span>{m}</span> - Month</li>
			<li><span>{y}</span> - Year</li>
		</ul>
	</p>
	<h4>Setting Save Path using a snippet</h4>
	<p>You can also specify a snippet that returns a path string for advanced routing by using the @SNIPPET prefix</p>
	<p>e.g. <code>@SNIPPET myPathingSnippet</code></p>
	<h4>Input File MIME types</h4>
	<p>MIME types describe the type of file to be uploaded and relate to the file extension.</p>
	<p>Multiple upload types can be specified using a comma-separated list.</p>
	<p>e.g. <code>image/jpeg, image/png, application/pdf</code></p>
	<p>A (mostly) full list can be found <a href="http://webdesign.about.com/od/multimedia/a/mime-types-by-file-extension.htm" target="_blank">here</a>.</p>
</div>



<script type="text/javascript">
// <![CDATA[
var params = {
{/literal}{foreach from=$params key=k item=v name='p'}
 '{$k}': '{$v|escape:"javascript"}'{if NOT $smarty.foreach.p.last},{/if}
{/foreach}{literal}
};
var oc = {'change':{fn:function(){Ext.getCmp('modx-panel-tv').markDirty();},scope:this}};

{/literal}
EasyUploadLex = {$tveulex};
function __(key){
	return EasyUploadLex[key];
};
{literal}

MODx.load({
    xtype: 'panel'
    ,layout: 'form'
    ,autoHeight: true
    ,cls: 'form-with-labels'
    ,border: false
    ,labelAlign: 'top'
    ,items: [{
 		xtype: 'textfield',
 		fieldLabel: __('tveasyupload.save_path'),
 		name: 'inopt_path',
 		id: 'inopt_path{/literal}{$tv}{literal}',
 		value: params['path'] || '',
 		anchors: '98%',
 		listeners: oc
 	},{
        xtype: MODx.expandHelp ? 'label' : 'hidden'
        ,forId: 'inopt_path{/literal}{$tv}{literal}'
        ,html: __('tveasyupload.save_path_desc')
        ,cls: 'desc-under'
    },{
 		xtype: 'textfield',
 		fieldLabel: __('tveasyupload.file_prefix'),
 		name: 'inopt_prefix',
 		id: 'inopt_prefix{/literal}{$tv}{literal}',
 		value: params['prefix'] || '',
 		anchors: '98%',
 		listeners: oc
 	},{
        xtype: MODx.expandHelp ? 'label' : 'hidden'
        ,forId: 'inopt_prefix{/literal}{$tv}{literal}'
        ,html: __('tveasyupload.file_prefix_desc')
        ,cls: 'desc-under'
    },{
 		xtype: 'textfield',
 		fieldLabel: __('tveasyupload.mime_types'),
 		name: 'inopt_MIME',
 		id: 'inopt_MIME{/literal}{$tv}{literal}',
 		value: params['MIME'] || '',
 		anchors: '98%',
 		listeners: oc
 	},{
        xtype: MODx.expandHelp ? 'label' : 'hidden'
        ,forId: 'inopt_MIME{/literal}{$tv}{literal}'
        ,html: __('tveasyupload.mime_types_desc')
        ,cls: 'desc-under'
    }]
 	,renderTo: 'tv-input-properties-form{/literal}{$tv}{literal}'
});
// ]]>
</script>
{/literal}
