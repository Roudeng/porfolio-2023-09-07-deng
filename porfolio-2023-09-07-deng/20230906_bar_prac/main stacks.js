let myGraph = document.getElementById('myGraph');

let trace1 = {}
trace1.type = "bar";
trace1.name = "Ladieswear";
trace1.x = [];
trace1.y = [];
trace1.x[0]= 'article 2018';
trace1.x[1]= 'article 2019';
trace1.x[2]= 'article 2020';
trace1.y[0]= article_2018[0]['count'];
trace1.y[1]= article_2019[0]['count'];
trace1.y[2]= article_2020[0]['count'];
trace1.text = trace1.y;
// trace1.textfont = {
//     color:'black',
//     size:20
// };
trace1.marker = { 
    color: 'skyblue'
};

let trace2 = {}
trace2.type = "bar"
trace2.name = "Divided";
trace2.x = [];
trace2.y = [];
trace2.x[0]= 'article 2018';
trace2.x[1]= 'article 2019';
trace2.x[2]= 'article 2020';
trace2.y[0]= article_2018[1]['count'];
trace2.y[1]= article_2019[1]['count'];
trace2.y[2]= article_2020[1]['count'];
trace2.text = trace2.y;
// trace2.textfont = {
//     color:'black',
//     size:20
// };
trace2.marker = {
    color: 'orange'
};

let trace3 = {}
trace3.type = "bar"
trace3.name = "Menswear";
trace3.x = [];
trace3.y = [];
trace3.x[0]= 'article 2018';
trace3.x[1]= 'article 2019';
trace3.x[2]= 'article 2020';
trace3.y[0]= article_2018[2]['count'];
trace3.y[1]= article_2019[2]['count'];
trace3.y[2]= article_2020[2]['count'];
trace3.text = trace3.y;
// trace3.textfont = {
//     color:'black',
//     size:20
// };
trace3.marker = {
    color: 'pink'
};

let trace4 = {}
trace4.type = "bar"
trace4.name = "Sport";
trace4.x = [];
trace4.y = [];
trace4.x[0]= 'article 2018';
trace4.x[1]= 'article 2019';
trace4.x[2]= 'article 2020';
trace4.y[0]= article_2018[3]['count'];
trace4.y[1]= article_2019[3]['count'];
trace4.y[2]= article_2020[3]['count'];
trace4.text = trace4.y;
// trace4.textfont = {
//     color:'black',
//     size:20
// };
trace4.marker = {
    color: 'green'
};

let trace5 = {}
trace5.type = "bar"
trace5.name = "Baby/Children";
trace5.x = [];
trace5.y = [];
trace5.x[0]= 'article 2018';
trace5.x[1]= 'article 2019';
trace5.x[2]= 'article 2020';
trace5.y[0]= article_2018[4]['count'];
trace5.y[1]= article_2019[4]['count'];
trace5.y[2]= article_2020[4]['count'];
trace5.text = trace5.y;
// trace5.textfont = {
//     color:'black',
//     size:20
// };
trace5.marker = {
    color: 'red'
};



let data = [];
data.push(trace1);
data.push(trace2);
data.push(trace3);
data.push(trace4);
data.push(trace5);

let layout = {
    margin:{
        t:30 //margin top
    },
    barmode:'stack',
    title: 'The Amount of H&M Index Groups From 2018 to 2020'
    };

Plotly.newPlot(myGraph,data,layout);

