sap.ui.require([
	"sap/m/Text",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/mvc/XMLView",
    "sap/ui/model/resource/ResourceModel"
], function (Text, JSONModel, XMLView, ResourceModel) {
	"use strict";

	// Attach an anonymous function to the SAPUI5 'init' event
	sap.ui.getCore().attachInit(function () {

        		// Create a JSON model from an object literal
		var oModel = new JSONModel({
			firstName: "Harry",
            lastName: "Hawk",
            enabled: true,
            address: {
				street: "Dietmar-Hopp-Allee 16",
				city: "Walldorf",
				zip: "69190",
				country: "Germany"
			},
            salesAmount: 12345.6789,
            currencyCode: "EUR",
            panelHeaderText: "Data Binding Basics"
		});


		// Assign the model object to the SAPUI5 core
		sap.ui.getCore().setModel(oModel);

        var oResourceModel = new ResourceModel({
			bundleName: "sap.ui.demo.db.i18n.i18n",
			supportedLocales: ["", "de"],
			fallbackLocale: ""
		});

		
		sap.ui.getCore().setModel(oResourceModel, "i18n");

        var oView =  new XMLView({
            viewName:"sap.ui.demo.db.view.App"
        });

        sap.ui.getCore().getMessageManager().registerObject(oView, true);

       oView.placeAt("content");


	
	});
});