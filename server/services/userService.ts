const authenticate = (email: string, password: string) => {
    if (email != process.env.LOGIN_USERNAME && password != process.env.LOGIN_PASSWORD) {
        return null;
    }
    const user = {
        id: "1001",
        name: "Web Admin",
        email: "admin@example.com",
    };
    console.log("you made it");
    return user;
}

export const userService = {
    authenticate,
};