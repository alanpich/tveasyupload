<?php

    define('PKG_NAMESPACE', 'tvimageplus');
    define('PKG_NAME', 'EasyUpload');
    define('PKG_NAME_LOWER',str_replace(' ','',strtolower(PKG_NAME)));
    define('PKG_VERSION','1.2.6');
    define('PKG_RELEASE','alpha');

    define('MODX_BASE_PATH', '/var/www/modx/');
    define('MODX_CONFIG_KEY', 'config');



    /* Package sources */
    $sources = array(
        'model' => PKG_CORE.'model/'
    );


    $schemas = array(
        $sources['model'].PKG_NAME_LOWER.'.mysql.schema.xml'
    );



/*********************************************************************************
 *** SHOULDNT NEED TO EDIT BELOW THIS LINE (UNLESS YOUR DOING SOMETHING FUNNY) ***
 *********************************************************************************/
    define('PKG_ROOT',dirname(dirname(__FILE__)));
    define('PKG_CORE',PKG_ROOT.'core/components/'.PKG_NAMESPACE.'/');
    define('PKG_ASSETS',PKG_ROOT.'assets/components/'.PKG_NAMESPACE.'/');

    define('MODX_CORE_PATH', MODX_BASE_PATH . 'core/');
    define('MODX_MANAGER_PATH', MODX_BASE_PATH . 'manager/');
    define('MODX_CONNECTORS_PATH', MODX_BASE_PATH . 'connectors/');
    define('MODX_ASSETS_PATH', MODX_BASE_PATH . 'assets/');