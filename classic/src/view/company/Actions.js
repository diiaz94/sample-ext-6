Ext.define('Mvvm.app.view.company.Actions', {
	extend: 'Ext.Panel',
	requires: [
		'Ext.form.field.ComboBox'
	],
	
    xtype: 'actionslist',
	height: 50,
	margin: '20 0 0 0',
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
	border: false,
	items: [{
		xtype: 'button',
		text: 'Crear',
		itemId: 'add',
		listeners: {
	        click: 'onAddClick'
	    }
	}, {
		xtype: 'button',
		text: 'Editar',
		itemId: 'edit',
		hidden: true,
		bind: {
            hidden: '{!canUpdate}' 
        },
		listeners: {
	        click: 'onUpdateClick'
	    }
	}, {
		xtype: 'button',
		text: 'Eliminar',
		itemId: 'delete',
		hidden: true,
		listeners: {
	        click: 'onDeleteClick'
	    }
	}],

	
});