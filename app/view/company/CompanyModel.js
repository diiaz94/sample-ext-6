/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Mvvm.app.view.company.CompanyModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.company',

    data: {
    	title: "Compañias",
        elementsCount:0,
        emptyText: 'Oprime el botón crear para añadir datos'
	},
	formulas: {
        canCreate: function(get) {
            return get('elementsCount') == 0;
        },
        canEdit: function(get) {
            return get('elementsCount') == 1;
        },
        canDelete: function(get) {
            return get('elementsCount') > 0;
        },
    }
    //TODO - add data, formulas and/or methods to support your view
});
