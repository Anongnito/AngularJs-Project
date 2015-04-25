var app = angular.module('eCommerce', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'homeInfoText',
            templateUrl: 'homepage.html'
        })
        .when('/products', {
            controller: 'products',
            templateUrl: 'products.html'
        })
        .when('/about', {
            controller: 'about',
            templateUrl: 'about.html'
        })
        .when('/contact', {
            controller: 'contact',
            templateUrl: 'contact.html'
        })
        .otherwise({redirectTo: '/'});

});

app.directive('barChart', function() {
    return {
        restrict: 'E',
        replace: false,
        scope: {data: '=chartData'},
        link: function(scope, element) {

            $(window).scroll(function() {
                var fromTop = $(document).scrollTop();
                if(fromTop >= 888) {
                    if($('#barChart').html() == "") {
                        doBarChart();
                    }
                }
            });

            function doBarChart() {
                var width = 350;
                var height = 350;
                var barWidth = width / scope.data.length;

                var y = d3.scale.linear()
                    .range([height, 0])
                    .domain([0, d3.max(scope.data, function(d) {
                        return (d);
                    })]);

                var x = d3.scale.linear()
                    .domain([0, d3.max(scope.data)])
                    .range([0, width]);

                var chart = d3.select(element[0])
                    .append('svg')
                    .attr("width", width)
                    .attr("height", height);

                var bar = chart.selectAll("g")
                    .data(scope.data)
                    .enter().append("g")
                    .attr("transform", function(d, i) {
                        return "translate(" + i * barWidth + ",0)";
                    });

                bar.append("rect")
                    .attr("y", height)
                    .attr("height", 0)
                    .transition()
                    .duration(800)

                    .attr('class', 'bar')
                    .attr("y", function(d) {
                        return y(d)
                    })
                    .attr("height", function(d) {
                        return height - y(d)
                    })
                    .attr("width", barWidth - 1);

                bar.append("text")
                    .attr("x", barWidth / 2)
                    .attr("y", function(d) {
                        return y(d) + 3;
                    })
                    .attr("dy", ".75em")
                    .text(function(d) {
                        return d;
                    });
            }
        }
    };

});

app.directive('pieChart', function() {
    return {
        restrict: 'E',
        replace: false,
        scope: {data: '=chartData'},
        link: function(scope, element) {
            $(window).scroll(function() {
                var fromTop = $(document).scrollTop();
                if(fromTop >= 888) {
                    if($('#pieChart').html() == "") {
                        doPieChart();
                    }
                }
            });

            function doPieChart() {
                var width = 350;
                var height = 350;
                var radius = Math.min(width, height) / 2;

                var color = d3.scale.ordinal()
                    .range(["#63673f", "#bc8c66", "#ceba75"]);

                var arc = d3.svg.arc()
                    .outerRadius(radius - 10)
                    .innerRadius(50);

                var pie = d3.layout.pie()
                    .sort(null)
                    .value(function(d) {
                        return d.value;
                    });

                var pieChart = d3.select(element[0])
                    .append("svg")
                    .attr("width", width)
                    .attr("height", height)
                    .append("g")
                    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

                var gArc = pieChart.selectAll(".arc")
                    .data(pie(scope.data))
                    .enter().append("g")
                    .attr("class", "arc");

                gArc.append("path")
                    .transition()
                    .duration(800)
                    .attrTween('d', tweenPie)
                    .style("fill", function(d) {
                        return color(d.data.value);
                    });

                gArc.append("text")
                    .attr("transform", function(d) {
                        return "translate(" + arc.centroid(d) + ")";
                    })
                    .attr("dy", ".35em")
                    .text(function(d) {
                        return d.data.title
                    });

                gArc.append("text")
                    .attr("transform", function(d) {
                        return "translate(" + arc.centroid(d) + ")";
                    })
                    .attr("dy", "2em")
                    .text(function(d) {
                        return d.data.value + "%";
                    });

                function tweenPie(finish) {
                    var start = {
                        startAngle: 0,
                        endAngle: 0
                    };
                    var i = d3.interpolate(start, finish);
                    return function(d) {
                        return arc(i(d));
                    };
                }
            }
        }
    };
});

app.directive('lineChart', function() {
    return {
        restrict: 'E',
        replace: false,
        scope: {data: '=chartData'},
        link: function(scope, element) {
            scope.$watch('data', function(data) {
                if(data) {
                    var margin = {top: 30, right: 20, bottom: 30, left: 50},
                        width = 600,
                        height = 270;

                    var parseDate = d3.time.format("%Y-%m-%d").parse;

                    var x = d3.time.scale().range([0, 1500]);
                    var y = d3.scale.linear().range([height, 0]);

                    var xAxis = d3.svg.axis().scale(x)
                        .orient("bottom").ticks(12);

                    var yAxis = d3.svg.axis().scale(y)
                        .orient("left").ticks(5);

                    var lineValue = d3.svg.line()
                        .x(function(d) {
                            return x(d.date);
                        })
                        .y(function(d) {
                            return y(d.amount);
                        });

                    var svg = d3.select(element[0])
                        .append("svg")
                        .attr("width", width + margin.left + margin.right)
                        .attr("height", height + margin.top + margin.bottom)
                        .call(d3.behavior.zoom()
                        .translate([0, 0])
                        .scale(1.0)
                        .scaleExtent([0.5, 2.0])
                        .on("zoom", function() {
                            svg.attr("transform", "translate(" + (d3.event.translate[0] + margin.left ) + "," + margin.top + ") scale(" + d3.event.scale + ")");
                        }))
                        .append("g")
                        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

                    x.domain([new Date(2015, 0, 1), new Date(2015, 11, 30)]);

                    scope.data.forEach(function(d) {
                        d.date = parseDate(d.date);
                        d.amount = +d.amount;

                    });

                    y.domain([0, d3.max(scope.data, function(d) {
                        return d.amount;
                    })]);

                    svg.append("path")
                        .attr("class", "line")
                        .attr("d", lineValue(scope.data));

                    svg.append("g")
                        .attr("class", "x axis")
                        .attr("transform", "translate(0," + height + ")")
                        .call(xAxis);

                    svg.append("g")
                        .attr("class", "y axis")
                        .call(yAxis);
                }
            });
        }
    };
});
