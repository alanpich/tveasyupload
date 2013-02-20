<div id="easyuploadtv{$tv->id}" style="width:700px; height:100px"></div>
<script type="text/javascript">
    myTV{$tv->id} = MODx.load{literal}({
    {/literal}
        xtype: 'EasyUploadTV',
        renderTo: 'easyuploadtv{$tv->id}',
        url: '{$assets}connector.php',
        name: 'tv{$tv->id}',
        res_id: {$res_id},
        tv_id: {$tv_id},
        ms_id: {$ms_id},
        acceptedMIMEtypes: {$MIME_TYPES},
        value: '{$tv->value}'
    {literal}
    });
{/literal}
</script>