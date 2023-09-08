
    let myGraph = document.getElementById('myGraph');
    let trace1 = {};
    trace1.type = "pie";
    trace1.title = "BDSE31 Courses";
    trace1.labels = [];
    trace1.values = [];
    // trace1.domain = {
    //     row:0,
    //     column:0
    // };
    trace1.hole = 0.5;

    for(let x=0;x<course.length;x++){
        trace1.labels[x] = course[x]['course'];
        trace1.values[x] = course[x]['count'];
    }
    
    
    

    let data = [];
    data.push(trace1);

    let layout = {
        height:500,
        width:600,
        margin: {
            t:40,
            l:0
        },
        // grid:{
        //     rows:2, //多個圓同時呈現
        //     columns:2
        // },
        title: 'The Distribution of BDSE31 Courses'

    };

    Plotly.newPlot(myGraph, data, layout);
