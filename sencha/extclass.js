<snippet>
	<content><![CDATA[
Ext.define('${1:MyNamespace}.${2:classes}.${TM_FILENAME/(.+)\..+|.*/$1/:name}', {
    config: {
        ${3:prop}: '${4}'
    },
    constructor : function(config){
        this.initConfig(config);
        this.callParent([config]);
        // Do whatever you need here.
    },
    apply${3/./\u$0/}: function($3){

    }
    update${3/./\u$0/}: function($3){

    }
});
]]></content>
	<tabTrigger>extclass</tabTrigger> -->
	<scope>source.js</scope> 
	<description>Ext.define()</description>
</snippet>
