const currPict = (state = 'Add your picture', action) => {
    switch (action.type) {
        case "SEND_PICT":
            state = action.picture
            return state
        default:
            return state
    }
}

export default currPict;
