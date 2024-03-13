let myGraph = document.getElementById('myGraph');

let trace1 = {}
trace1.type = "bar"
trace1.name = "article 2018";
trace1.x = [];
trace1.y = [];
trace1.visible = true;

for(let i=0; i<article_2018.length; i++){
    trace1.x[i] = article_2018[i]['Type'];
    trace1.y[i] = article_2018[i]['count'];
}


let trace2 = {}
trace2.type = "bar"
trace2.name = "article 2019";
trace2.x = [];
trace2.y = [];
trace2.visible = false;

for(let i=0; i<article_2019.length; i++){
    trace2.x[i] = article_2019[i]['Type'];
    trace2.y[i] = article_2019[i]['count'];
}

let trace3 = {}
trace3.type = "bar"
trace3.name = "article 2020";
trace3.x = [];
trace3.y = [];
trace3.visible = false;

for(let i=0; i<article_2020.length; i++){
    trace3.x[i] = article_2020[i]['Type'];
    trace3.y[i] = article_2020[i]['count'];
}

let data = [];
data.push(trace1);
data.push(trace2);
data.push(trace3);


let layout = {
    margin:{
        t:50 //margin top
    },
    title: 'The Amount of H&M Index Groups From 2018 to 2020',
    updatemenus:[
        {
            y:1.1,
            x:1.5,
            yanchor:'top',
            buttons:[
                {
                    method:'restyle',
                    args:['visible',[true, false, false]],
                    label:"article 2018"
                },
                {
                    method:'restyle',
                    args:['visible',[false, true, false]],
                    label:"article 2019"
                },
                {
                    method:'restyle',
                    args:['visible',[false, false, true]],
                    label:"article 2020"
                },
                {
                    method:'restyle',
                    args:['visible',[true, true, true]],
                    label:"Display All"
                }
            ]
        }
    ]
    };

Plotly.newPlot(myGraph,data,layout);

