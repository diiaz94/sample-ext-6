Ext.define('Mvvm.app.view.company.Form', {
	extend: 'Ext.window.Window',
	xtype: 'formlist',
	width: 300,
	layout: 'fit',
	title: '',
	autoShow: true,
	bodyBorder: false,

	record: {},
    viewModel : {
        data: {
            company: {}
        }
    },
	items: [{
		xtype: 'form',
		bodyPadding: 20,
		bodyBorder: false,
		border: false,
		defaults: {
			anchor: '100%'
		},
		items:[{
			xtype: 'textfield',
			name: 'name',
			fieldLabel: 'Nombre'
		},
		{
			xtype: 'textfield',
			name: 'nit',
			fieldLabel: 'NIT'
		},
		{
			xtype: 'textfield',
			name: 'phone',
			fieldLabel: 'Telefono'
		},
		{
			xtype: 'textfield',
			name: 'address',
			fieldLabel: 'Direccion'
		},
		{
			xtype: 'textfield',
			name: 'city',
			fieldLabel: 'Ciudad'
		},
		{
			xtype: 'textfield',
			name: 'country',
			fieldLabel: 'Country'
		},
		{
			xtype: 'textfield',
			name: 'state',
			fieldLabel: 'Estado	'
		}],
	}],
	dockedItems: [{
		xtye: "toolbar",
		dock: 'bottom',
		border: false,
		layout: {
			type: 'hbox',
			pack: 'end'
		},
		items: [{
			xtype: 'button',
			text: 'Cancelar',
			itemId: 'cancel',
			listeners: {
	        	click: 'onCancelForm'
	    	},
	    	margin: '10 10 10 10'
		}, {
			xtype: 'button',
			text: 'Guardar',
			itemId: 'save',
			listeners: {
	        	click: 'onSaveForm'
	    	},
	    	margin: '10 10 10 10'
		}]
	}]
});