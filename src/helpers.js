// Inserting and updating values in an array

exports.insertItem = (array, action) => {
    let newArray = array.slice();
    newArray.splice(action.index, 0, action.item);
    return newArray;
}

exports.removeItem = (array, action) => array.filter((item, index) => index !== action.index);