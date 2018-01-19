sap.ui.define([
		"com/sap/b1/ui/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("com.sap.b1.ui.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);