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
 
 		// Set assets path
 		$this->setPlaceholder('assets',$this->modx->getOption('assets_url').'components/tveasyupload/');
 		
 		$this->modx->lexicon->load('tveasyupload');
 		
 		$this->setPlaceholder('res_id',$this->modx->resource->get('id'));
		$this->setPlaceholder('tv_id',$this->tv->get('id'));
		$this->setPlaceholder('ms_id',$this->tv->source);
		
		if(isset($params['MIME'])){
			$MIME = $params['MIME'];
		} else {
			$MIME = '';
		};
 		$this->setPlaceholder('MIME_TYPES',json_encode($MIME));
    }//
    
    
    public function getLexiconTopics(){
    	return array('tveasyupload:default');
    }
}
return 'EasyUploadInputRender';
