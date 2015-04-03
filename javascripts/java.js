function Resets(){
    document.getElementById('afflu').value=0;
    document.getElementById('input1').value="Selectionner une équipe"
}
 
 
 
 
$(function () {
$('#carton').highcharts({
chart: {
type: 'column'
},
title: {
text: 'Plus la sanction est grave, plus l\'effet domicile est marqué'
},
xAxis: {
categories: ['Fautes', 'Cartons jaunes', 'Cartons rouges']
},
yAxis: {
min: 45,
max:65,
title: {
text: 'Pourcentage'
}
},
tooltip: {
pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
shared: true
},
plotOptions: {
column: {
stacking: 'percent'
}
},
series: [{
name: 'Domicile',
data: [11.91695906, 1.157017544, 0.069883041]
}, {
name: 'Exterieur',
data: [12.55380117, 1.44502924, 0.107309942]
}]
});
});
 
$(function () {
$('#reussite').highcharts({
chart: {
type: 'column'
},
title: {
text: 'Un plus grand nombre de buts par frappes à domicile'
},
xAxis: {
categories: ['Frappes', 'Frappes cadrees', 'Buts']
},
yAxis: {
min: 40,
max:50,
title: {
text: 'Pourcentage'
}
},
tooltip: {
pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
shared: true
},
plotOptions: {
column: {
stacking: 'percent'
}
},
series: [{
name: 'Domicile',
data: [10.69561404, 3.688888889, 1.080409357]
}, {
name: 'Exterieur',
data: [8.457602339, 2.834210526, 0.787426901]
}]
});
});
 
 
 
 
$(function () {
    $('#retournement').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Victoires après avoir été mené à la mi-temps'
        },
        xAxis: {
            categories: ['D un match nul à une victoire', 'D une défaite à une victoire']
        },
        yAxis: {
            min: 0,
     
            title: {
                text: 'Pourcentage (par saison)'
            }
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
            shared: true
        },
        plotOptions: {
            column: {
                stacking: 'percent'
            }
        },
        series: [{
            name: 'Domicile',
            data: [45.66666667, 6]
        }, {
            name: 'Extérieur',
            data: [31,5.333333333]
        }],
    });
});
 
$(function () {
    $('#points').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Nombre de points obtenue au cours d une saison'
        },
        xAxis: {
            categories: ['']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Nombre de point (par saison)'
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            }
        },
        legend: {
            align: 'right',
            x: -10,
            verticalAlign: 'bottom',
            y: 15,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': ' + this.y + '<br/>' +
                    'Total: ' + this.point.stackTotal;
            }
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                    style: {
                        textShadow: '0 0 3px black'
                    }
                }
            }
        },
        series: [{
            name: 'Domicile',
            data: [24]
        },  {
            name: 'Extérieur',
            data: [16]
        }]
    });
});
 
 
$(function () {
    $('#bubblea').highcharts({
 
        chart: {
            type: 'bubble',
            zoomType: 'xy'
        },
 
        title: {
            text: 'Highcharts Bubbles'
        },
 
        series: [{
            name: 'Equipes ne bénéficiant pas de l avantage domicile',
            data: [
                [14, 12, 13566.16],
                [12, 12, 13184.32]
            ]
        }, {
            name: 'Equipes bénéficiant peu de l avantage domicile',
            data: [
                [14, 17, 12133.74],
                [29.57143, 36.71429, 45438.61],
                [29.14286, 37.28571, 38868.33],
                [22.14286, 29.14286, 19084.9],
                [23.28572, 31, 22049.13],
                [15, 20, 19401.32],
                [23.2, 31, 8531.937],
                [29.14286, 39.14286, 35121.68],
                [19.66667, 27.16667, 16696.18],
                [21, 29.6, 11890.27],
                [28, 39.71429, 23265.98],
                [17.5, 25.5, 26138.61],
                [25.42857, 37.28571, 23541.92],
                [8, 12, 9207.632],
                [17.66667, 27, 10961.77],
                [22.8, 35.6, 16775.85],
                [14, 22, 13596.95]
            ]
        }, {
            name: 'Equipes bénéficiant largement de l avantage domicile',
            data: [
                [20.57143, 33.14286, 26245.77],
                [16.25, 26.75, 17449.62],
                [12.5, 21, 15563.39],
                [15.33333, 26.33333, 10230.65],
                [13, 22.33333, 6392.702],
                [16.14286, 27.85714, 14064.5],
                [17.85714, 31.14286, 11628.41],
                [16.5, 29, 15115.97],
                [14, 24.66667, 13161.74],
                [17.57143, 31.71428, 13927.29],
                [14.33333, 26.66667, 33352.37]
            ]
        }, {
            name: 'Equipes bénéficiant très largement de l avantage domicile',
            data: [
                [14, 28, 15005.68],
                [14, 32.5, 12397.37],
                [11, 26, 13888.47],
                [13, 31.14286, 13659.8]
            ]
        }]
    });
});
 
 
 
 
 
$(function () {
    $('#pointseq').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Nombre de points obtenue au cours d une saison'
        },
        xAxis: {
            categories: ['']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Nombre de points (par saison)'
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            }
        },
        legend: {
            align: 'right',
            x: -10,
            verticalAlign: 'bottom',
            y: 15,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': ' + this.y + '<br/>' +
                    'Total: ' + this.point.stackTotal;
            }
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                    style: {
                        textShadow: '0 0 3px black'
                    }
                }
            }
        },
        series: [{
            name: 'Domicile',
            data: [0]
        },  {
            name: 'Extérieur',
            data: [0]
        }]
    });
});
 
 
$(function () {
    $('#retournementeq').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Victoires après avoir été mené à la mi-temps'
        },
        xAxis: {
            categories: ['D un match nul à une victoire', 'D une défaite à une victoire']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Pourcentage (par saison)'
            }
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
            shared: true
        },
        plotOptions: {
            column: {
                stacking: 'percent'
            }
        },
        series: [{
            name: 'Domicile',
            data: [0,   0]
        }, {
            name: 'Extérieur',
            data: [0,0]
        }],
    });
});
 
 
$(function () {
$('#cartoneq').highcharts({
chart: {
type: 'column'
},
title: {
text: 'Nombre de faute et de carton au cours d un match'
},
xAxis: {
categories: ['Fautes', 'Cartons jaunes', 'Cartons rouges']
},
yAxis: {
min: 0,
title: {
text: 'Pourcentage (par match)'
}
},
tooltip: {
pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
shared: true
},
plotOptions: {
column: {
stacking: 'percent'
}
},
series: [{
name: 'Domicile',
data: [0, 0, 0]
}, {
name: 'Exterieur',
data: [0, 0, 0]
}]
});
});
 
$(function () {
$('#reussiteeq').highcharts({
chart: {
type: 'column'
},
title: {
text: 'Nombre de buts et de frappes au cours d un match'
},
xAxis: {
categories: ['Frappes', 'Frappes cadrees', 'Buts']
},
yAxis: {
min: 0,
title: {
text: 'Pourcentage (par match)'
}
},
tooltip: {
pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
shared: true
},
plotOptions: {
column: {
stacking: 'percent'
}
},
series: [{
name: 'Domicile',
data: [0, 0, 0]
}, {
name: 'Exterieur',
data: [0, 0, 0]
}]
});
});
