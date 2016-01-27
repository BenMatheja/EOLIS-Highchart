var clusterspace = cluster_assigned_object["BMW_StationÃ¤re Anwendung"]
//console.log(result);
while(chart.series.length > 0)
    chart.series[0].remove(true);

var chart = $('#canvas').highcharts();
//var clusterspace = cluster_assigned_object["BMW_Mobile Anwendung"];

$.each(cluster_assigned_object, function(k,v){
	var count = 0;
	var clusterspace = v;
	console.log(k);
		$.each(clusterspace, function(k,v) {
		var name = '';
		var data = [];
		//console.log(k);
		$.each(clusterspace[k], function(k,v){
			data.push(v);
			//console.log(v);
		});
		count += data.length
		chart.addSeries({
			name: "Cluster "+k,
			data: data
		}, false)

	});
		console.log(count);
})

$.each(clusterspace, function(k,v) {
		var name = '';
		var data = [];
		//console.log(k);
		$.each(clusterspace[k], function(k,v){
			data.push(v);
			//console.log(v);
		});
		console.log(data.length);
		chart.addSeries({
			name: "Cluster "+k,
			data: data
		}, false)

	});

chart.redraw();