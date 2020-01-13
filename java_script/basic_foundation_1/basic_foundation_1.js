function get_one_to_255(){
    var arr=[];
    for(var i=1; i<=255; ++i){
        arr.push(i);
    };
    return arr;
};
get_one_to_255();

function get_even_1000(){
    var sum=2;
    for(var i=4; i<=1000; i+=2){
        console.log(i,sum)
        sum+=i;
    };
};
get_even_1000();

function sum_odd_5000(){
    var sum=1;
    for(var i=3; i<5000; i+=2){
        sum+=i;
    };
    return sum;
};
sum_odd_5000();

function iterate_an_array(arr){
    var sum=arr[0];
    for(var i=1; i<arr.length; ++i){
        sum+=arr[i]
    };
    return sum;
};
iterate_an_array([1,2,5]);
iterate_an_array([-5,2,5,12]);

function find_max(arr){
    var max=arr[0];
    for(var i=1; i<arr.length; ++i){
        if(arr[i]>max){
            max=arr[i];
        };
    };
    return max;
};
find_max([-3,3,5,7]);

function find_average(arr){
    var avg=arr[0];
    for(var i=1; i<arr.length; ++i){
        avg+=arr[i];
    };
    return avg/=arr.length;
};
find_average([1,3,5,7,20]);

function array_ood(){
    var arr=[];
    for(var i=1; i<50; ++i){
        if(i%2===1){
            arr.push(i);
        };
    };
    return arr;
};
array_ood();

function greater_than_y(arr,Y){
    var count=0;
    for(var i=0; i<arr.length; ++i){
        if(arr[i]>Y){
            count++;
        }
    }
    return count;
};
greater_than_y([1, 3, 5, 7],3)

function squares(arr){
    for(var i=0; i<arr.length; ++i){
        arr[i]*=arr[i];
    };
    return arr;
};
squares([1,5,10,-2]);

function negatives(arr){
    for(var i=0; i<arr.length; ++i){
        if(arr[i]<0){
            arr[i]=0;
        };
    };
    return arr
};
negatives([1,5,10,-2]);

function max_min_avg(arr){
    var max= min= avg=arr[0], new_arr=[];
    for(var i=1; i<arr.length; ++i){
        if(arr[i]>max){
            max=arr[i];
        }
        else if(arr[i]<min){
            min=arr[i];
        }
        avg+=arr[i];
    };
    new_arr.push(max,min,avg/=arr.length)
    return new_arr;
};
max_min_avg([1,5,10,-2]);

function swap_values(arr){
    var temp=arr[0];
    arr[0]=arr[arr.length-1];
    arr[arr.length-1]=temp;
    return arr;
};
swap_values([1,5,10,-2]);

function number_to_string(array){
    for(var i=0; i<array.length; i++){
        if(array[i]<0){
            array[i]='Dojo';
        }
    }
    return array;
};
number_to_string([-1,-3,2]);