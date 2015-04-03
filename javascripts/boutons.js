function PSG()
  {
 
   var charts = $('#points').highcharts();
  charts.series[1].setData([1], true);
  charts.series[2].setData([2], true);
   var charts = $('#renversement').highcharts();
  charts.series[1].setData([5,7], true);
  charts.series[2].setData([5,7], true);
    var charts = $('#carton').highcharts();
  charts.series[1].setData([5,7,4], true);
  charts.series[2].setData([5,7,4], true);
   var charts = $('#reussite').highcharts();
  charts.series[1].setData([5,7,4], true);
    charts.series[2].setData([5,7,4], true);
 document.getElementById('input1').value="Paris"
 }
   
 function OL()
  {
  var charts = $('#carton').highcharts();
  charts.series[1].setData([5,7,4], true);
   document.getElementById('input1').value="Lyon"
  }
