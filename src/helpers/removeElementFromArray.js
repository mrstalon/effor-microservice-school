const removeElementFromArray = function removeElementFromArray(array, element) {
    const index = array.indexOf(element);

    if (index !== -1) {
        array.splice(index, 1);
    }
};

export default removeElementFromArray;
