
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var addUserButton = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	addUserButton.click = function addUserButton_click (event)// @startlock
	{// @endlock
		ds.Settings.addUser($$('userNameInput').getValue(), $$('passwordInput').getValue(), $$('fullNameInput').getValue(),
		{
			onSuccess: function(e){
				if(e.result.success){
					alert('user created');
				} else {
					alert('user not created');
				}
			}
		});
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("addUserButton", "click", addUserButton.click, "WAF");
// @endregion
};// @endlock
