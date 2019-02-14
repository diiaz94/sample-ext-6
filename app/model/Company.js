Ext.define('Mvvm.app.model.Company', {
	extend: 'Ext.data.Model',
	idProperty: "_id",
	fields: [/*{
		name: '_id',
		type: 'string'
	},*/ {
		name: 'name',
		type: 'string'
	}, {
		name: 'nit',
		type: 'string'
	}, {
		name: 'phone',
		type: 'string'
	}, {
		name: 'address',
		type: 'string'
	}, {
		name: 'city',
		type: 'string'
	}, {
		name: 'country',
		type: 'string'
	}, {
		name: 'state',
		type: 'string'
	}]
});