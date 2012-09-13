<?php
class EasyUploadInputRender extends modTemplateVarInputRender {
    public function getTemplate() {
        return $this->modx->getOption('core_path').'components/tveasyupload/elements/tv/input/tpl/easyupload.tpl';
    }
    public function process($value,array $params = array()) {
 
    }
}
return 'EasyUploadInputRender';
