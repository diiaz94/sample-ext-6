Ext.define('Mvvm.app.store.Company', {
    extend: 'Ext.data.Store',

    alias: 'store.company',
    model: 'Mvvm.app.model.Company',

    data: { items: [
        { name: 'Empresa 1', nit: "13214234324", phone: "555-111-1111",  address: "Av principal, calle1", city: "Caracas", country: "Venezuela",state: "Distrito Capital" },
        { name: 'Empresa 2', nit: "43454353453", phone: "555-222-1111",  address: "Av principal, calle2", city: "Bogota", country: "Colombia",state: "Bogota" },
        { name: 'Empresa 3', nit: "57867865766", phone: "555-333-1111",  address: "Av principal, calle1", city: "Medellin", country: "Colombia",state: "Medellin" },
        { name: 'Empresa 4', nit: "23545252424", phone: "555-444-1111",  address: "Av principal, calle3", city: "Caracas", country: "Venezuela",state: "Distrito Capital" },
        { name: 'Empresa 5', nit: "28456454544", phone: "555-555-1111",  address: "Av principal, calle4", city: "Bogota", country: "Colombia",state: "Bogota" },
        { name: 'Empresa 6', nit: "86787685674", phone: "555-666-1111",  address: "Av principal, calle5", city: "Caracas", country: "Venezuela",state: "Distrito Capital" }
        ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});