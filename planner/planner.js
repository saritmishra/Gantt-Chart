example();

function example() {
    var tasks = [],
          taskNames = [];

    var legend = {
    "sprint-task" : "bar-green",
    "holiday" : "bar-red",
    };

    d3.json("gantt-data.json", function(error, json) {
        if (error)
            return console.warn(error);

        tasks = json;

        tasks.forEach(function(element, index, array){
            taskNames.push(element["taskName"]);

             element["startDate"] = new Date(element["startDate"]);
             element["endDate"] = new Date(element["endDate"]);

        });

        // var taskNames = [];
        // for ( var i = 0; i < json.length; i++) {
        //     for ( var j = 0; j < json[i].values.length; j++) {
        //     var role = json[i].values[j]["Role"];
        //     var company = json[i].values[j]["Company"];
        //     var roleAndCompany = role + "(" + company + ")";
        //     var name = json[i]["name"];
        //     taskNames.push(roleAndCompany);
        //     tasks.push({
        //         "startDate" : new Date(json[i].values[j]["from date"]),
        //         "endDate" : new Date(json[i].values[j]["to date"]),
        //         "taskName" : roleAndCompany,
        //         "status" : name
        //     });
        //     }
        // }

        console.log( tasks);

        // var format = "%b-%e-%y";
        var format = "%m/%d";
        var gantt = d3.gantt().taskTypes(taskNames).taskStatus(legend).tickFormat(format);
        gantt(tasks);
    });

};


// function example() {
//     var tasks = [];

//     var taskStatus = {
//     "Bill Johnson" : "bar-green",
//     "Joe Johnson" : "bar-red",
//     };

//     d3.json("example.json", function(error, json) {
//     if (error)
//         return console.warn(error);
//     var taskNames = [];
//     for ( var i = 0; i < json.length; i++) {
//         for ( var j = 0; j < json[i].values.length; j++) {
//         var role = json[i].values[j]["Role"];
//         var company = json[i].values[j]["Company"];
//         var roleAndCompany = role + "(" + company + ")";
//         var name = json[i]["name"];
//         taskNames.push(roleAndCompany);
//         tasks.push({
//             "startDate" : new Date(json[i].values[j]["from date"]),
//             "endDate" : new Date(json[i].values[j]["to date"]),
//             "taskName" : roleAndCompany,
//             "status" : name
//         });
//         }
//     }

//     console.log( tasks);

//     // var format = "%b-%e-%y";
//     var format = "%m/%Y";
//     var gantt = d3.gantt().taskTypes(taskNames).taskStatus(taskStatus).tickFormat(format);
//     gantt(tasks);
//     });

// };
