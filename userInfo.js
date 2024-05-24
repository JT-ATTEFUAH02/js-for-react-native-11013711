// userInfo.js

function createUserProfiles(names, modifiedNames) {
    return names.map((name, index) => {
        return {
            id: index + 1,
            originalName: name,
            modifiedName: modifiedNames[index]
        };
    });
}

// Export the function for use in other modules
module.exports = { createUserProfiles };
