const validate = (errors, setErrors) => (field, value) => {
    
    const clearError = () => setErrors([...errors.filter(error => error.id !== field)]);

    const addError = (type) => 
        type === "number" ? 
            setErrors([...errors, {"id": field, "msg": `${field} cannot be empty or less then 0!`}]) : 
                setErrors([...errors, {"id": field, "msg": `${field} cannto be emmpty!`}]);

    switch(field) {
        case "price" || "rate" || "count": 
            value === "" || value <= 0 ? addError("number") : clearError();
            break;
        default:
            value === "" ? addError("string") : clearError();
            break;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
    }
};

export default validate;