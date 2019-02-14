/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Mvvm.app.view.company.CompanyController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.company',


    onAddClick: function (a,b,c){
        debugger;
    },
    onUpdateClick: function (a,b,c){
        debugger;
    },
    onDeleteClick: function (a,b,c){
        debugger;
    },
     onDeleteClick: function (a,b,c){
        debugger;
    },
    onItemSelected: function (sender, record) {
        //Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
        var win = Ext.create('Mvvm.app.view.main.Form');
        win.setTitle("Editar Registro");
        var form = win.down('form');
        form.loadRecord(record);
        var main = Ext.ComponentQuery.query("app-main")[0];
        main.getViewModel().set("company",record);
    },
    onCancelForm: function (btn){
        var win = btn.up('window');
        var form = win.down('form');
        form.getForm().reset();
        var main = Ext.ComponentQuery.query("app-main")[0];
        main.getViewModel().set("company",{});
        win.close();
    },
    onSaveForm: function (btn){
      
    },
    onConfirm: function (choice) {

    }
});