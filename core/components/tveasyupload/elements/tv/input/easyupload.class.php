<?php
class EasyUploadInputRender extends modTemplateVarInputRender {

    public function getTemplate() {
        return $this->modx->getOption('core_path').'components/tveasyupload/elements/tv/input/tpl/easyupload.tpl';
    }
    
public function process($value,array $params = array()) {
    	$js = $this->modx->getOption('assets_url').'components/tveasyupload/js/mgr/';
 		$this->modx->regClientCSS($js.'ext3/css/fileuploadfield.css');
 		
 		$this->modx->regClientStartupScript($js.'ext3/FileUploadField.js');
 		$this->modx->regClientStartupScript($js.'easyupload.button.js');
 		
 		// Grab mediasource stuff
		$MS = $this->tv->getSource('web')->toArray();
		$mediasource = new stdClass;
		$mediasource->id = $MS['id'];
		if($MS['id'] != 1){
			$mediasource->path = is_null($MS['properties']['basePath']['value'])? $this->modx->getOption('base_path') : $MS['properties']['basePath']['value'];
			$mediasource->url = is_null($MS['properties']['baseUrl']['value'])? $this->modx->getOption('base_url') : $MS['properties']['baseUrl']['value'];
		} else {
			$mediasource->path = $this->modx->getOption('base_path');
			$mediasource->url = $this->modx->getOption('site_url');
		};
		$this->setPlaceholder('MediaSource',$mediasource);
 		
 		// Grab custom path extension
 		$path = 'assets/images/';	 # fill this with dynamic goodness
 		$this->setPlaceholder('path',$path);
 		
 		
    }//
    
    
    public function getLexiconTopics(){
    	
    	return array('tveasyupload:default');
    }
}
return 'EasyUploadInputRender';
