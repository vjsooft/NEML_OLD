google.load('visualization', '1', {'packages': ['geochart']});
google.setOnLoadCallback(drawVisualization);

function drawVisualization() {
  var data = google.visualization.arrayToDataTable([
        ['State Code', 'State', 'Temperature'],     
        [ 'IN-UP','Uttar Pradesh', 33],
        ['IN-MH','Maharashtra', 32],
        ['IN-BR','Bihar', 31],
        ['IN-WB','West Bengal', 32],
        ['IN-MP','Madhya Pradesh', 30],
        ['IN-TN','Tamil Nadu', 33],
        ['IN-RJ','Rajasthan', 33],
        ['IN-KA','Karnataka', 29],
        ['IN-GJ','Gujarat', 34],
        ['IN-AP','Andhra Pradesh', 32],
        ['IN-OR','Orissa', 33],
        ['IN-TG','Telangana', 33],
        ['IN-KL','Kerala', 31],
        ['IN-JH','Jharkhand', 29],
        ['IN-AS','Assam', 28],
        ['IN-PB','Punjab', 30],
        ['IN-CT','Chhattisgarh', 0],
        ['IN-HR','Haryana', 30],
        ['IN-JK','Jammu and Kashmir', 20],
        ['IN-UT','Uttarakhand', 28],
        ['IN-HP','Himachal Pradesh', 17],
        ['IN-TR','Tripura', 31],
        ['IN-ML','Meghalaya', 21],
        ['IN-MN','Manipur', 22],
        ['IN-NL','Nagaland', 22],
        ['IN-GA','Goa', 32],
        ['IN-AR', 'Arunachal Pradesh', 33],
        ['IN-MZ','Mizoram', 23],
        ['IN-SK','Sikkim', 24],
        ['IN-DL','Delhi', 31],
        ['IN-PY','Puducherry', 33],
        ['IN-CH','Chandigarh', 30],
        ['IN-DN','Dadra and Nagar Haveli', 30],
        // ['IN-DD','Daman and Diu', 29],
        ['IN-LD','Lakshadweep', 0]
      ]);

      var opts = {
        region: 'IN',
        domain:'IN',
        displayMode: 'IN',
        // colorAxis: {colors: ['#e5ef88', '#d4b114', '#e85a03']},
        colorAxis: {colors: ['#8A86FF', '#19AFD0', '#FFB901', '#FF3943']},
        // colorAxis: {
        //   colors: 
        //   [
        //     'gradient(308.33deg, #6966CD 46.47%, #8A86FF 85.51%)', 
        //     'gradient(180deg, #21D1F8 0%, #19AFD0 69.58%)', 
        //     'gradient(126.21deg, #FFDF8C 10.93%, #FFB901 91.02%)', 
        //     'gradient(180deg, #FF537D 0%, #FF3943 59.69%)'
        //   ]
        // },
        resolution: 'provinces',
        backgroundColor: 'transparent',
        datalessRegionColor: 'transparent',
        defaultColor: 'transparent',
        // width: 100, 
        // height: 480
      };
      console.log("opts", opts)
      var geochart = new google.visualization.GeoChart(
          document.getElementById('visualization'));
          geochart.draw(data, opts);
    };
