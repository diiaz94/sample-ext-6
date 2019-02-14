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
    viewModel: 'company',
	border: false,
	items: [{
		xtype: 'button',
		text: 'Crear',
		itemId: 'add',
		bind: {
            hidden: '{!canCreate}' 
        },
		listeners: {
	        click: 'onAddClick'
	    }
	}, {
		xtype: 'button',
		text: 'Editar',
		itemId: 'edit',
		bind: {
            hidden: '{!canEdit}' 
        },
		listeners: {
	        click: 'onEditClick'
	    }
	}, {
		xtype: 'button',
		text: 'Eliminar',
		itemId: 'delete',
		bind: {
            hidden: '{!canDelete}' 
        },
		listeners: {
	        click: 'onDeleteClick'
	    }
	}],

	
});