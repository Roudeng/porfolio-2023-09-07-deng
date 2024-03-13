

d3.csv('info_4group_deleted.csv').then(
    res => {
        console.log('Local CSV:', res);
        drawHist(res);
    }
);

function drawHist(res){
    let myGraph = document.getElementById('myGraph');

    let trace1 = {};
    trace1.type ='histogram';
    trace1.name = 'age';
    trace1.x = [];
    trace1.y = [];
    
    for(let i=0; i < res.length; i++){
        trace1.x.push(res[i].age);
        trace1.y.push(res[i].age);
    }


let data = [];
data.push(trace1);

let layout = {
    margin:{
        t:50 //margin top
    },
    xaxis:{
        range:[0,100]
    },

    title:'The Distribution of H&M Customers'

    };

    Plotly.newPlot(myGraph,data,layout);

};
