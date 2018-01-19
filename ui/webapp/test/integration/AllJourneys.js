jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
		"sap/ui/test/Opa5",
		"com/sap/b1/ui/test/integration/pages/Common",
		"sap/ui/test/opaQunit",
		"com/sap/b1/ui/test/integration/pages/Worklist",
		"com/sap/b1/ui/test/integration/pages/Object",
		"com/sap/b1/ui/test/integration/pages/NotFound",
		"com/sap/b1/ui/test/integration/pages/Browser",
		"com/sap/b1/ui/test/integration/pages/App"
	], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.sap.b1.ui.view."
	});

	sap.ui.require([
		"com/sap/b1/ui/test/integration/WorklistJourney",
		"com/sap/b1/ui/test/integration/ObjectJourney",
		"com/sap/b1/ui/test/integration/NavigationJourney",
		"com/sap/b1/ui/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});