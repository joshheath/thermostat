$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.temperature);

  $('#temperature-up').click(function(){
    thermostat.up();
    updateTemperature();
  });

  $('#temperature-down').click(function(){
    thermostat.down();
    updateTemperature();
  });

  $('#temperature-reset').click(function(){
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#powersaving-on').click(function(){
    thermostat.switchPSMOn();
    $('#power-saving-status').text('on')
    updateTemperature();
  });

  $('#powersaving-off').click(function(){
    thermostat.switchPSMOff();
    $('#power-saving-status').text('off')
    updateTemperature();
  });

  // function updateTemperature(){
  //   $('#temperature').text(thermostat.temperature);
  // };

  function updateTemperature(){
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  };

});
