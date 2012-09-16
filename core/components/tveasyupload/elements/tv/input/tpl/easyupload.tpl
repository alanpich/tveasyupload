<input type="hidden" id="tv{$tv->id}" name="tv{$tv->id}" value="{$tv->value}" />
<div id="easyupload{$tv->id}"></div>
<script type="text/javascript">
{literal}
myTV = MODx.load({
{/literal}
	xtype: 'easyupload-button',
	renderTo: 'easyupload{$tv->id}',
	tvFieldId: 'tv{$tv->id}',
	url: '{$assets}connector.php',
	res_id: {$res_id},
	tv_id: {$tv_id}
{literal}
});


function setupField() {

};



{/literal}

</script>
