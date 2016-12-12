(function () {
    //Optional parameters
    //Add city and state display capabilities
    function buildAddressOptional(address1, address2, city, state) {
        var addr2 = (address2) ? ' Address2: ' + address2 : '', city = (city) ? 'City: ' + city : '', state = (state) ? 'State: ' + state : '';
        displayAddress(address1 + addr2 + ', ' + city + ', ' + state);
    }
    //Default parameters
    //Add city and state display capabilities
    function buildAddressDefault(address1, address2) {
        if (address2 === void 0) { address2 = 'N/A'; }
        displayAddress('Address: ' + address1 + ' Address2: ' + address2);
    }
    //Rest parameters
    function buildAddressRest() {
        var restOfAddress = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            restOfAddress[_i - 0] = arguments[_i];
        }
        var address = '';
        restOfAddress.forEach(function (addr) {
            if (addr)
                address += addr + ', ';
        });
        displayAddress(address);
    }
    function displayAddress(msg) {
        result.innerHTML = msg;
    }
    var $ = function (id) { return document.getElementById(id); };
    var addressButton = $('addressButton'), address = $('address'), address2 = $('address2'), 
    //retrieve city value
    city = $('city'), 
    //retrieve state value
    state = $('state'), result = $('result');
    //Call function with optional parameter
    // addressButton.addEventListener('click',(e) => buildAddressOptional(address.value, address2.value, city.value, state.value));
    //Call function with default parameter
    // addressButton.addEventListener('click',(e) => buildAddressDefault(address.value, address2.value, city.value, state.value));
    //Call function with Rest parameters
    addressButton.addEventListener('click', function (e) { return buildAddressRest(address.value, address2.value, city.value, state.value); });
}());
//# sourceMappingURL=optionalDefaultRestParameters.js.map