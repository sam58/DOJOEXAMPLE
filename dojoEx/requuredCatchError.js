require(['dojo/domReady!'], function() {
    console.log('dom is ready');

    var handle = require.on('error', function( error )
    {
        console.dir(error);
        alert('Finally error');
        //error.info[0] содержит полный путь к ошибочному модулю начиная от 'http...'
        alert('module - '+ error.info[0]);
    });

//модуля 'nonexistent/module' не существует
    require(['nonexistent/module'], function ( m )
    {
        alert('Module was loaded correctly')
    });

});