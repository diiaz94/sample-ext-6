Ext.define('Mvvm.app.view.main.Form', {
	extend: 'Ext.window.Window',
	xtype: 'formlist',
	height: 150,
	width: 300,
	layout: 'fit',
	title: '',
	autoShow: true,
	bodyBorder: false,
	items: [{
		xtype: 'form',
		bodyPadding: 10,
		bodyBorder: false,
		border: false,
		defaults: {
			anchor: '100%'
		}
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
	    	}
		}, {
			xtype: 'button',
			text: 'Guardar',
			itemId: 'save',
			listeners: {
	        	click: 'onSaveForm'
	    	}
		}]
	}]
});