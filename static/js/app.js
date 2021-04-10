data_url = '../../data/samples1.json'

d3.json(data_url).then(function(read_data){
    var data1 = read_data;
    console.log(data1)

    var dropDownMenu = d3.select("#selDataset")
        var id_names = data1[0].names;
        console.log(id_names)

        id_names.forEach((i) => {
            dropDownMenu
            .append("option")
            .text(i)
        });

        dropDownMenu.on("change", drop_func);

        function drop_func() 
        {
            var select_id_names = dropDownMenu.property("value");
            console.log(select_id_names);

            var fil_data = data1[0].samples.filter(item => item.id === select_id_names)
            console.log(fil_data)

            //////////////////////////////////////

            var top10_otu = []
            fil_data[0].otu_ids.slice(0,10).forEach(i => 
            {
                var substring = top10_otu.push(`OTU ${i}`
            )});
            var sample_values1 = fil_data[0].sample_values.slice(0,10);
            var top10_labels = fil_data[0].otu_labels.slice(0,10);

        
            console.log(top10_otu)

            var bar_data = 
            [{
                type: 'bar',
                x: sample_values1,
                y: top10_otu,
                text: top10_labels,
                mode: 'markers',
                orientation: 'h',
                marker:
            {
                color: '#FA8072',
                opacity: 0.8,
            }
            }]; 

            var bar_layout = 
            {
                yaxis: {autorange: 'reversed'},
                opacity: 0.6,
                title: "Top 10 OTUs"
            }; 

            Plotly.newPlot('bar', bar_data, bar_layout);

            
            var fil_meta = data1[0].metadata.filter(item=>item.id === parseInt(select_id_names));
            console.log(fil_meta)

            var demoMetadata = d3.select('#sample-metadata');
            demoMetadata.html("");
            
            demoMetadata.append('p').text(`ID: ${fil_meta[0].id}`);
            demoMetadata.append('p').text(`Ethnicity: ${fil_meta[0].ethnicity}`);
            demoMetadata.append('p').text(`Gender: ${fil_meta[0].gender}`);
            demoMetadata.append('p').text(`Age: ${fil_meta[0].age}`);
            demoMetadata.append('p').text(`Location: ${fil_meta[0].location}`);
            demoMetadata.append('p').text(`BBtype: ${fil_meta[0].bbtype}`);
            demoMetadata.append('p').text(`Wfreq: ${fil_meta[0].wfreq}`);






        }













    })




