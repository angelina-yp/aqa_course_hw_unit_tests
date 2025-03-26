function validatePassword(password: string): boolean {
    if (password.trim().length === 0) {
        return false;
    }
    if (!/[A-Z]/.test(password)) {
        return false;
    }
    if (!/[a-z]/.test(password)) {
        return false;
    }
    if (!/\d/.test(password)) {
        return false;
    }
    if (password.length < 8) {
        return false;
    }
    return true;
}
console.log(validatePassword("Password1"));