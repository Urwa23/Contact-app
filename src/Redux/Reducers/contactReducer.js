const initialState = [
    {
        id:0,
        name: "Raman Sharma",
        number:27378888,
        email: "raman@gmail.com"
    },
    {
        id:1,
        name: "Nathan",
        number:3479232832,
        email: "nathan@gmail.com"
    }
]

const contactReducer = (state = initialState,action)=>{
    switch(action.type){
        case "ADD_CONTACT":
            state = [...state, action.payload]
            return state
        default:
            return state
    }
};

export default contactReducer;