/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Mvvm.app.view.company.CompanyModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.company',

    data: {
    	title: "Compañias",
        emptyText: 'Oprime el botón crear para añadir datos',
        canUpdate:false,
        company:{}
	}
    //TODO - add data, formulas and/or methods to support your view
});
