function makeItBig(array){
    for(var i=0; i<array.length; ++i){
        if(array[i]>0){
            array[i]="big";
        };
    };
    return array;
};
makeItBig([-1,3,5,-5]);

function print_low_return_high(array){
    var min= max= array[0];
    for(var i=1; i<array.length; ++i){
        if(array[i]>max){
            max=array[i];
        }
        else if(array[i]<min){
            min=array[i];
        };
    };
    console.log(min);
    return max;
};
print_low_return_high([1,-2,3,-7,5,10]);

function print_one_return_another(array){
    for(var i=0; i<array.length; ++i){
        if(array[i]%2===1){
            console.log(array[array.length-2]);
            return array[i];
        };
    };
};
print_one_return_another([10,9,8,-7,-6,-5,4]);

function double(array){
    var new_array=[];
    for(var i=0; i<array.length; ++i){
        new_array.push(array[i]*2);
    };
    return new_array;
};
double([1,2,3]);

function countPositives(array){
    var count=0;
    for(var i=0; i<array.length; ++i){
        if(array[i]>0){
            count++;
        };
    };
    array[array.length-1]=count;
    return array;
};
countPositives([-1,1,1,1]);

function evens_and_odds(array){
    var even_counter= odd_counter= 0;
    for(var i=0; i<array.length; ++i){
        if(array[i]%2===1){
            odd_counter++;
            even_counter=0;
            if(odd_counter === 3){
                console.log("That's odd!");
                odd_counter= 0;
            };
        }
        else{
            even_counter++;
            odd_counter=0;
            if(even_counter===3){
                console.log("Even more so!");
                even_counter= 0;
            };
        };
    };
};
evens_and_odds([4,5,6,1,1,1,2,2,2]);

function increment_the_seconds(arr){
    for(var i=0; i<arr.length; ++i){
        if(i%2===1){
            arr[i]+=1;
        };
        console.log(arr[i]);
    };
    return arr;
};
increment_the_seconds([1,2,3,4,-5,-6,-7,8]);

function previousLengths(arr){
    for(var i=arr.length-1; i>=0; --i){
        if(arr[i]!==arr[0]){
            arr[i]=arr[i-1].length;
        };
    };
    return arr;
};
previousLengths(["hello", "dojo", "awesome"]);

function addSeven(arr){
    new_arr=[];
    for(var i=0; i<arr.length; ++i){
        new_arr.push(arr[i]+7);
    };
    return new_arr;
};
addSeven([1,2,3]);

function reverse(arr){
    var temp=[];
    for(var i=0; i<arr.length/2; ++i){
        temp=arr[i];
        arr[i]=arr[arr.length-1-i];
        arr[arr.length-1-i]=temp;
    }
    return arr;
}
reverse([3,1,6,4,2]);

function outlook_negative(array){
    new_array=[];
    for(var i=0; i<array.length; ++i){
        if(array[i]>0){
            new_array.push(0-array[i]);
        }
        else{
            new_array.push(array[i]);
        }
    }
    return new_array;
};
outlook_negative([1,-3,5]);

function always_hungry(arr){
    var food_count=0;
    for(var i=0; i<arr.length; ++i){
        if(arr[i]==="food"){
            food_count++;
            console.log("yummy");
        };
    };
    if(food_count===0){
        console.log("I'm hungry")
    };
};
always_hungry(["food",1,2,4,5,"food"]);
always_hungry([1,2,4,5]);

function swapTowardCenter(arr){
    temp=[];
    for(var i=0; i<arr.length/2; i+=2){
        temp=arr[i];
        arr[i]=arr[arr.length-1-i]
        arr[arr.length-1-i]=temp;
    };
    console.log(arr)
};
swapTowardCenter([true,42,"Ada",2,"pizza"])
swapTowardCenter([1,2,3,4,5,6]);

function scaleArray(arr,num){
    for(var i=0; i<arr.length; ++i){
        arr[i]*=num;
    };
    return arr;
};
scaleArray([1,2,3],3);