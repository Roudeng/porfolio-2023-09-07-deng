
    let myGraph = document.getElementById('myGraph');
    d3.csv(dataURL).then(getCSV_Data);

    function unpack(rows, key){
        // Element-Wised
        return rows.map(function(row){
            return row[key];
        });
    }

    function getCSV_Data(rows){
        let trace1 = {};
        trace1.type ="choropleth";
        trace1.locationmode = "country names";
        trace1.locations = unpack(rows, 'location');
        trace1.z = unpack(rows, 'alcohol');
        trace1.text = unpack(rows,'location');
        trace1.autocolorscale = true;
        
        trace1.locations.push('Taiwan'); //將沒有的資料新增進地圖中
        trace1.z.push(15);
        trace1.text.push('Taiwan');


        let data = [];
        data.push(trace1);

   
    let layout = {
        margin: {
            t:50,
            l:0,
        },
        geo:{
            projection:{
                type:'robinson'
            }
        },
        title: 'The Distribution of Alcohol Consumption per Adult'

    };

    Plotly.newPlot(myGraph, data, layout);
    } //括錯地方會讀不到資料
