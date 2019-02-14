/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Mvvm.app.view.company.Main', {
    extend: 'Ext.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'Mvvm.app.view.company.CompanyController',
        'Mvvm.app.view.company.CompanyModel',
        'Mvvm.app.view.company.List'
    ],

    controller: 'company',
    viewModel: 'company',

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{title}'
            },
            flex: 0
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
            height: 50,
            layout: {
                type: 'hbox',
                defaultMargins: {
                    top: 10,
                    right: 10,
                    bottom: 0,
                    left: 10
                },
                pack: 'end'
            },
            hidden: true,
            border: false,
            items: [{
                xtype: 'button',
                text: 'Crear',
                itemId: 'add'
            }, {
                xtype: 'button',
                text: 'Editar',
                itemId: 'edit',
                hidden: true,
            }, {
                xtype: 'button',
                text: 'Eliminar',
                itemId: 'delete',
                hidden: true,
            }]
        }, {
            height: 330,
            items: [{
                margin: '10 0 0 0',
                xtype: 'grid',
                selType: 'checkboxmodel',
                columns: [],
                title: 'test',
                viewConfig: {
                    emptyText: 'Oprime el botón crear para añadir datos',
                    deferEmptyText: false
                },
                dockedItems: [{
                    xtype: 'pagingtoolbar',
                    dock: 'bottom',
                    displayInfo: true,
                    displayMsg: 'Mostrando de {0} a {1} elementos de un total de {2}',
                    emptyMsg: "No hay elementos que mostrar"
                }]
            }]
        }]
    }]
});
