var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];

function object_iter(obj){
    var a_two_counter=0;
    console.log("Answer 1 one way - "+obj[1].age+" And another way - "+obj[1]["age"]);
    for(var i=0; i<obj.length; ++i){
        if(obj[i]===obj[0] && a_two_counter===0){
            console.log("Answer 2 one way - "+obj[i]["name"]+" And another way - "+obj[i].name);
            a_two_counter++;
        };
        console.log("Anwser 3 - "+obj[i].name+" - "+obj[i]["age"])
    };
};
object_iter(users)
