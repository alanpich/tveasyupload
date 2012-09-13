<input type="text" id="tv{$tv->id}" name="tv{$tv->id}" value="{$tv->value}" />
<div id="easyupload{$tv->id}"></div>
<script type="text/javascript">
{literal}
myTV = MODx.load({
{/literal}
	xtype: 'easyupload-button',
	renderTo: 'easyupload{$tv->id}',
	tvFieldId: 'tv{$tv->id}',
	url: '/modx/easyupload/assets/components/tveasyupload/connector.php',
{literal}	
	mediasource: {
{/literal}
		id: {$MediaSource->id},
		path: '{$MediaSource->path}',
		url: '{$MediaSource->url}'
{literal}	
	},
{/literal}
	path: "{$path}"
{literal}
});


function setupField() {

};



{/literal}

</script>
