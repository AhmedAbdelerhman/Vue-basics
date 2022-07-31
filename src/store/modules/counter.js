export const counter ={


    state: {
        counter: 1,
        colorCode:"red"
      },
      mutations: {
        increment(state, payload) {  //used by action below
          state.counter+=payload;
        },
        decrement(state ,payload) {   //used by action below
            state.counter -=payload
         },
         setColorCode(state , payload){    //used by computed in app.vue file
            state.colorCode = payload
         }
      },
      actions: {
        decrement({commit}) {
          fetch(
            "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"
          )
            .then((result) => {
              return result.json();
            })
            .then((random) => {
    
                commit("decrement",random )
            })
            .catch((err) => {
              console.log(err);
            });
        },
    
        increments({commit}) {
            fetch(
              "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"
            )
              .then((result) => {
                return result.json();
              })
              .then((random) => {
                commit("increment", random)
      
              })
              .catch((err) => {
                console.log(err);
              });
          },
    
          
      },
      getters:{  // getter use state after making some logic or calculation 
        squared(state){
    return state.counter*state.counter
        },
    
    
    
        activeIndexes:(state)=>(payload)=>{ //if i want to enter a data to getter and use it in the logic
            //u should return a payload https://www.youtube.com/watch?v=y7DQhNs9Azw&t=3256s&ab_channel=LaithAcademy
        let indexes=[];
       state.history.forEach((number,index)=>{
            if(number === payload){
                indexes.push(index)
           }
       });
        return indexes
      }
    },
    
}