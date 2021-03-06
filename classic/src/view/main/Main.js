/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Mvvm.app.view.main.Main', {
    extend: 'Ext.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'Mvvm.app.view.company.CompanyController',
        'Mvvm.app.view.company.CompanyModel',
    ],

    controller: 'main',
    viewModel: 'main',

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{title}'
            }
        },
        iconCls: 'fa-th-list'
    },
    layout: 'ux.center',
    border: false,
    items: [{
        xtype: 'panel', 
        width: '80%',
        border: false,
        items: [ {
            xtype: 'companies'
        }]
    }]
});
