import React from "react";

export const getDateFormat = (date) =>{
    var d = new Date(date);
    var dd = d.getDate();
    var mm = d.getMonth();
    var yyyy = d.getFullYear();
    var dayIndex = d.getDay();

    const days= ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    d = days[dayIndex]+', '+dd+" "+months[mm]+" "+yyyy;
    return d;
}

export const getItemDate = (date) =>{
    var d = new Date(date);
    var dd = d.getDate();
    var mm = d.getMonth();
    var yyyy = d.getFullYear();
    
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    d = months[mm]+". "+dd+", "+yyyy;
    return d;
}
        
        