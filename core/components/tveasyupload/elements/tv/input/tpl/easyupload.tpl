<input type="hidden" id="tv{$tv->id}" name="tv{$tv->id}" value="{$tv->value}" />
<div id="easyupload{$tv->id}" style="width:98%;"></div>
<div id="easyupload{$tv->id}preview"></div>
<script type="text/javascript">

myTV{$tv->id} = MODx.load{literal}({
{/literal}
	xtype: 'easyupload-button',
	renderTo: 'easyupload{$tv->id}',
	tvFieldId: 'tv{$tv->id}',
	url: '{$assets}connector.php',
	res_id: {$res_id},
	tv_id: {$tv_id},
	ms_id: {$ms_id},
	acceptedMIMEtypes: {$MIME_TYPES}
{literal}
});



function setupField() {

};



{/literal}

</script>
