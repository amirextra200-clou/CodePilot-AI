const HISTORY_KEY = "codepilot_history";


export function getHistory(){

    const data = localStorage.getItem(HISTORY_KEY);


    if(data){

        return JSON.parse(data);

    }


    return [];

}





export function saveHistory(type, input, output){


    const history = getHistory();



    history.unshift({

        type,

        input,

        output,

        date: new Date().toLocaleString()

    });



    localStorage.setItem(

        HISTORY_KEY,

        JSON.stringify(history)

    );


}





export function clearHistory(){

    localStorage.removeItem(HISTORY_KEY);

}