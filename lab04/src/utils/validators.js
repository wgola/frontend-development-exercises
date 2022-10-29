const validator = (setErrors) => (field, value) => {
    
    const clearError = () => setErrors(errors => [...errors.filter(error => error.id !== field)]);

    const addError = (type) => {
        clearError();
        type === "number" ? 
            setErrors(errors => [...errors, {"id": field, "msg": `${field} cannot be empty or less then / equal 0!`}]) : 
            setErrors(errors => [...errors, {"id": field, "msg": `${field} cannot be empty!`}]);
    };
        
    if (field === "Price") {
        if (value === "" || value <= 0) {
            addError("number");
            return false;
        } else {
            clearError();
            return true;
        };
    } else {
        if (value === "") {
            addError("string");
            return false;
        } else {
            clearError();
            return true;
        };   
    };                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
};

export default validator;