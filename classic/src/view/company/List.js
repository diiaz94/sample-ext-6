Ext.define('Mvvm.app.view.company.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'companieslist',
    selType: 'checkboxmodel',
    margin: '10 0 0 0',
    height: 330,
    requires: [
        'Mvvm.app.store.Company'
    ],
    viewConfig: {
         bind:{ 
            emptyText:"{emptyText}"
        },
        deferEmptyText: false
    },
    store: {
        type: 'company'
    },

    columns: [
        { text: 'Nombre',  dataIndex: 'name' },
        { text: 'NIT', dataIndex: 'nit', flex: 1 },
        { text: 'Telefono', dataIndex: 'phone', flex: 1 },
        { text: 'Direccion', dataIndex: 'address', flex: 1 },
        { text: 'Ciudad', dataIndex: 'city', flex: 1 },
        { text: 'Pais', dataIndex: 'country', flex: 1 },
        { text: 'Estado', dataIndex: 'state', flex: 1 }

    ],
    dockedItems: [{
        xtype: 'pagingtoolbar',
        dock: 'bottom',
        displayInfo: true,
        displayMsg: 'Mostrando de {0} a {1} elementos de un total de {2}',
        emptyMsg: "No hay elementos que mostrar"
    }],
    listeners: {
        select: 'onItemSelected'
    }
});
