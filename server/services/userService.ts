const authenticate: any (username: string, password: string) => {
    if (username != process.env.LOGIN_USERNAME && password != process.env.LOGIN_PASSWORD) {
        return null;
    }
    const user = {
        id: "1001",
        name: "Web Admin",
        email: "admin@example.com",
    };
    return user;
}

export const userService = {
    authenticate,
};