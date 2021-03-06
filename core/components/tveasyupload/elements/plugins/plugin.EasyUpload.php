<?php
$corePath = $modx->getOption('core_path',null,MODX_CORE_PATH).'components/tveasyupload/';
$assetsUrl = $modx->getOption('assets_url',null,MODX_ASSETS_URL).'components/tveasyupload/';

$modx->lexicon->load('tveasyupload:default');

switch ($modx->event->name) {
    case 'OnTVInputRenderList':
        $modx->event->output($corePath.'elements/tv/input/');
        break;
    case 'OnTVInputPropertiesList':
        $modx->event->output($corePath.'elements/tv/input/options/');
        break;
    case 'OnDocFormPrerender':
        $js  = $modx->getOption('assets_url').'components/tveasyupload/mgr/js/';
        $modx->regClientStartupScript($js.'widgets/modx.form.filefield.js');
        $modx->regClientStartupScript($js.'EasyUpload.js');
        $modx->regClientStartupScript($js.'EasyUpload.form.EasyUploadField.js');
        break;
}